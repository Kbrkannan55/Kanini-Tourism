using KaniniTourism.Models;
using loginauth.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KaniniTourism.Repository.TravelAgentRequest
{
    public class TravelRepo : ITravelRepo
    {
        private readonly TourismContext _context;
        public TravelRepo(TourismContext context)
        {
            _context = context;
        }


        public async Task<ActionResult<List<TravelAgent>>> GetAllTravelAgentRequest()
        {
            var details = await _context.travelAgents.ToListAsync();
            return details;
        }


        public async Task<ActionResult<List<TravelAgent>>> PostRequestForTravelAgent(TravelAgent travelAgent)
        {
            _context.Add(travelAgent);
            await _context.SaveChangesAsync();
            return await _context.travelAgents.ToListAsync();
        }
    }
}
