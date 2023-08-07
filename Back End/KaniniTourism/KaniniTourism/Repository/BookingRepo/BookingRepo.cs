using KaniniTourism.GlobalExceptions;
using KaniniTourism.Models;
using loginauth.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xunit.Abstractions;

namespace KaniniTourism.Repository.BookingServices
{
    public class BookingRepo : IBookingRepo
    {
        private readonly TourismContext _context;
        public BookingRepo(TourismContext context)
        {
            _context = context;
        }


        public async Task<ActionResult<List<Booking>>> GetAllBookings()
        {

            var details = await _context.bookings.ToListAsync();
            if (details == null)
            {
                throw new Exception(CustomException.ExceptionMessages["Empty"]);
            }
            return details;

        }


        public async Task<ActionResult<List<Booking>>> PostBookings(Booking booking)
        {
            _context.bookings.Add(booking);
            await _context.SaveChangesAsync();
            return  _context.bookings.ToList();
        }
    }
}
