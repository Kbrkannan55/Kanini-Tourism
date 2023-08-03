using KaniniTourism.Models;
using loginauth.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KaniniTourism.Repository.HotelRepo
{
    public class HotelRepo : IHotelRepo
    {
        private readonly TourismContext _context;
        public HotelRepo(TourismContext tourismContext)
        {
            _context= tourismContext;
        }
        public async Task<ActionResult<List<Hotels>>> GetAllHotels()
        {
            var details = await _context.hotels.ToListAsync();
            return details;
        }


        public async Task<ActionResult<List<Hotels>>> PostHotels(Hotels hotels)
        {
            _context.Add(hotels);
            await _context.SaveChangesAsync();
            return await _context.hotels.ToListAsync();
        }

    }
}
