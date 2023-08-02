using KaniniTourism.Models;
using Microsoft.AspNetCore.Mvc;

namespace KaniniTourism.Repository.TravelAgentRequest
{
    public interface ITravelRepo
    {
        Task<ActionResult<List<TravelAgent>>> GetAllTravelAgentRequest();
        Task<ActionResult<List<TravelAgent>>> PostRequestForTravelAgent(TravelAgent travelAgent);
    }
}
