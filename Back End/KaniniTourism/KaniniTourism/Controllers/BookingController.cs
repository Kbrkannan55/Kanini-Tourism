using KaniniTourism.Models;
using KaniniTourism.Repository.BookingServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace KaniniTourism.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IBookingRepo _context;
        public BookingController(IBookingRepo context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Booking>>> GetAllBookings()
        {
            try
            {
                return await _context.GetAllBookings();
                Log.Information("All Bookings");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost]
        public async Task<ActionResult<List<Booking>>> PostBookings(Booking booking)
        {
            try
            {
                return await _context.PostBookings(booking);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
