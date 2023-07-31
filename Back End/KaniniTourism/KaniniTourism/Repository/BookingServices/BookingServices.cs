using KaniniTourism.Models;
using loginauth.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KaniniTourism.Repository.BookingServices
{
    public class BookingServices : IBookingServices
    {
        private readonly TourismContext _context;
        public BookingServices(TourismContext context)
        {
            _context = context;
        }


        public async Task<ActionResult<List<Booking>>> GetAllBookings()
        {
            var details = await _context.bookings.ToListAsync();
            return details;
        }


        public async Task<ActionResult<List<Booking>>> PostBookings(Booking booking)
        {
            _context.Add(booking);
            await _context.SaveChangesAsync();
            return  _context.bookings.ToList();
        }
    }
}
