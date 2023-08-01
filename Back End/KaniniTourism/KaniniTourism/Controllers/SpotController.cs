using KaniniTourism.Models;
using loginauth.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KaniniTourism.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpotController : ControllerBase
    {
        private readonly TourismContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public SpotController(TourismContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }

        // GET: api/Employee
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Place>>> GetEmployees()
        {
            return await _context.places
                .Select(x => new Place()
                {
                    Id = x.Id,
                    ImageName = x.ImageName,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.ImageName)
                })
                .ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Place>> PostEmployeeModel([FromForm] Place employeeModel)
        {
            employeeModel.ImageName = await SaveImage(employeeModel.ImageFile);
            _context.places.Add(employeeModel);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }



        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }

        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);
        }
    }
}
