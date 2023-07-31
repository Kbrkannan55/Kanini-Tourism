﻿using KaniniTourism.Models;
using loginauth.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Imageupload.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly TourismContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public EmployeeController(TourismContext context, IWebHostEnvironment hostEnvironment)
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
                    PlaceName = x.PlaceName,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.PlaceName)
                })
                .ToListAsync();
        }

        // GET: api/Employee/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Place>> GetEmployeeModel(int id)
        {
            var employeeModel = await _context.places.FindAsync(id);

            if (employeeModel == null)
            {
                return NotFound();
            }

            return employeeModel;
        }

        // PUT: api/Employee/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeModel(int id, [FromForm] Place employeeModel)
        {
            if (id != employeeModel.Id)
            {
                return BadRequest();
            }

            if (employeeModel.PlaceImage != null)
            {
                DeleteImage(employeeModel.PlaceName);
                employeeModel.PlaceName = await SaveImage(employeeModel.PlaceImage);
            }

            _context.Entry(employeeModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeModelExists(id))
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

        // POST: api/Employee
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Place>> PostEmployeeModel([FromForm] Place employeeModel)
        {
            employeeModel.PlaceName = await SaveImage(employeeModel.PlaceImage);
            _context.places.Add(employeeModel);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        // DELETE: api/Employee/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Place>> DeleteEmployeeModel(int id)
        {
            var employeeModel = await _context.places.FindAsync(id);
            if (employeeModel == null)
            {
                return NotFound();
            }
            DeleteImage(employeeModel.PlaceName);
            _context.places.Remove(employeeModel);
            await _context.SaveChangesAsync();

            return employeeModel;
        }

        private bool EmployeeModelExists(int id)
        {
            return _context.places.Any(e => e.Id == id);
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