using KaniniTourism.Models;
using Microsoft.AspNetCore.Mvc;

namespace KaniniTourism.Repository.TravelAgentRequest
{
    public interface ITravelServices
    {
        Task<ActionResult<List<TravelAgent>>> GetAllTravelAgentRequest();
        Task<ActionResult<List<TravelAgent>>> PostRequestForTravelAgent(TravelAgent travelAgent);
    }
}
