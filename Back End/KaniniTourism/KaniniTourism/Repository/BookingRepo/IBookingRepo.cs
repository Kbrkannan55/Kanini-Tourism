using KaniniTourism.Models;
using Microsoft.AspNetCore.Mvc;

namespace KaniniTourism.Repository.BookingServices
{
    public interface IBookingRepo
    {
        Task<ActionResult<List<Booking>>> GetAllBookings();
        Task<ActionResult<List<Booking>>> PostBookings(Booking booking);
    }
}
