using KaniniTourism.Models;
using Microsoft.AspNetCore.Mvc;

namespace KaniniTourism.Repository.HotelRepo
{
    public interface IHotelRepo
    {
        Task<ActionResult<List<Hotels>>> GetAllHotels();
        Task<ActionResult<List<Hotels>>> PostHotels(Hotels hotels);
    }
}
