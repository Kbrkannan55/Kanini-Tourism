using KaniniTourism.Models;
using KaniniTourism.Repository.HotelRepo;
using loginauth.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol;

namespace KaniniTourism.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelController : ControllerBase
    {
        /* private readonly IHotelRepo _context;
         public HotelController(IHotelRepo context)
         {
             _context = context;
         }


         [HttpGet]
         public async Task<ActionResult<List<Hotels>>> GetAllHotels()
         {
             try
             {
                 return await _context.GetAllHotels();
             }
             catch (Exception ex)
             {
                 return BadRequest(ex.Message);
             }

         }


         [HttpPost]
         public async Task<ActionResult<List<Hotels>>> PostHotels(Hotels hotels)
         {
             try
             {
                 return await _context.PostHotels(hotels);
             }
             catch (Exception ex)
             {
                 return BadRequest(ex.Message);
             }
         }*/

        private readonly TourismContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;


        public HotelController(TourismContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            _hostEnvironment = hostEnvironment;
        }

        //to post images
        [HttpPost]
        public async Task<ActionResult<Hotels>> AddSpecialPlace([FromForm] Hotels allPlaces)
        {
            allPlaces.ImageName = await SaveImage(allPlaces.ImageFile);
            _context.hotels.Add(allPlaces);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        //to save image
        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images/Hotel", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }

        //to get all images
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hotels>>> GetAllDetailPlaces()
        {
            return await _context.hotels
                .Select(x => new Hotels()
                {
                    HotelId = x.HotelId, 
                    HotelName = x.HotelName,
                    HotelDescription = x.HotelDescription,
                    Ratings = x.Ratings,
                    PricePerPerson = x.PricePerPerson,
                    HotelRoomsAvailable = x.HotelRoomsAvailable,
                    FoodType = x.FoodType,
                    HotelLocation = x.HotelLocation,
                    ImageName = x.ImageName,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/Hotel/{3}", Request.Scheme, Request.Host, Request.PathBase, x.ImageName)
                })
                .ToListAsync();
        }

        //to update the images with details
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlaceDetails(int id, [FromForm] Hotels updatePlace)
        {
            if (id != updatePlace.HotelId)
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
            return _context.hotels.Any(e => e.HotelId == id);
        }

        //to delete images
        [HttpDelete("{id}")]
        public async Task<ActionResult<Hotels>> DeletePlaceDetail(int id)
        {
            var placedetail = await _context.hotels.FindAsync(id);
            if (placedetail == null)
            {
                return NotFound();
            }
            DeleteImage(placedetail.ImageName);
            _context.hotels.Remove(placedetail);
            await _context.SaveChangesAsync();

            return placedetail;
        }

        //delete image meathod
        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images/Hotel", imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);
        }
    }
}
