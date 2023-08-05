using KaniniTourism.Models;
using loginauth.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;

namespace Imageupload.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlaceController : ControllerBase
    {
        private readonly TourismContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;


        public PlaceController(TourismContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            _hostEnvironment = hostEnvironment;
        }

        //to post images
        [HttpPost]
        public async Task<ActionResult<Place>> AddSpecialPlace([FromForm] Place allPlaces)
        {
            allPlaces.ImageName = await SaveImage(allPlaces.ImageFile);
            _context.places.Add(allPlaces);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        //to save image
        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images/Place", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }

        //to get all images
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Place>>> GetAllDetailPlaces()
        {
            return await _context.places
                .Select(x => new Place()
                {
                    Id = x.Id,
                    Location = x.Location,
                    Description = x.Description,
                    ImageName = x.ImageName,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/Place/{3}", Request.Scheme, Request.Host, Request.PathBase, x.ImageName)
                })
                .ToListAsync();
        }

        //to update the images with details
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlaceDetails(int id, [FromForm] Place updatePlace)
        {
            if (id != updatePlace.Id)
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
            return _context.places.Any(e => e.Id == id);
        }

        //to delete images
        [HttpDelete("{id}")]
        public async Task<ActionResult<Place>> DeletePlaceDetail(int id)
        {
            var placedetail = await _context.places.FindAsync(id);
            if (placedetail == null)
            {
                return NotFound();
            }
            DeleteImage(placedetail.ImageName);
            _context.places.Remove(placedetail);
            await _context.SaveChangesAsync();

            return placedetail;
        }

        //delete image meathod
        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images/PlaceDetails", imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);
        }
    }
}