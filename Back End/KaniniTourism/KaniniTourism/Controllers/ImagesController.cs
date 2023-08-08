using KaniniTourism.Models;
using loginauth.Context;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KaniniTourism.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class ImagesController : ControllerBase
    {
        private readonly TourismContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;


        public ImagesController(TourismContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            _hostEnvironment = hostEnvironment;
        }

        //to post images
        [HttpPost]
        public async Task<ActionResult<ImageGallery>> AddSpecialPlace([FromForm] ImageGallery allPlaces)
        {
            allPlaces.ImageName = await SaveImage(allPlaces.ImageFile);
            _context.imageGallery.Add(allPlaces);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        //to save image
        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images/AdminGallery", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }

        //to get all images
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ImageGallery>>> GetAllDetailPlaces()
        {
            return await _context.imageGallery
                .Select(x => new ImageGallery()
                {
                    AdminImgsId = x.AdminImgsId,
                    LocationName = x.LocationName,
                    LocationDescription = x.LocationDescription,
                    ImageName = x.ImageName,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/AdminGallery/{3}", Request.Scheme, Request.Host, Request.PathBase, x.ImageName)
                })
                .ToListAsync();
        }


        //to update the images with details
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlaceDetails(int id, [FromForm] ImageGallery updatePlace)
        {
            if (id != updatePlace.AdminImgsId)
            {
                return BadRequest();
            }

            if (updatePlace.ImageFile != null)
            {
                DeleteImage(updatePlace.ImageName);
                updatePlace.ImageName = await SaveImage(updatePlace.ImageFile);
            }

            _context.Entry(updatePlace).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ImageExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        //to check catch error meathod
        private bool ImageExists(int id)
        {
            return _context.imageGallery.Any(e => e.AdminImgsId == id);
        }

        //to delete images
        [HttpDelete("{id}")]
        public async Task<ActionResult<ImageGallery>> DeletePlaceDetail(int id)
        {
            var placedetail = await _context.imageGallery.FindAsync(id);
            if (placedetail == null)
            {
                return NotFound();
            }
            DeleteImage(placedetail.ImageName);
            _context.imageGallery.Remove(placedetail);
            await _context.SaveChangesAsync();

            return placedetail;
        }

        //delete image meathod
        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images/AdminGallery", imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);
        }

    }
}
