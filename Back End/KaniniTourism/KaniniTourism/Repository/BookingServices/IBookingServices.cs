using KaniniTourism.Models;
using Microsoft.AspNetCore.Mvc;

namespace KaniniTourism.Repository.BookingServices
{
    public interface IBookingServices
    {
        Task<ActionResult<List<Booking>>> GetAllBookings();
        Task<ActionResult<List<Booking>>> PostBookings(Booking booking);
    }
}
