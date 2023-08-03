using KaniniTourism.Models;
using KaniniTourism.Repository.HotelRepo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol;

namespace KaniniTourism.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelController : ControllerBase
    {
        private readonly IHotelRepo _context;
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
        }
    }
}
