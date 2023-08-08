using KaniniTourism.Models;
using KaniniTourism.Repository.TravelAgentRequest;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KaniniTourism.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TravelAgentController : ControllerBase
    {
        private readonly ITravelRepo _context;
        public TravelAgentController(ITravelRepo context)
        {
            _context = context;
        }

     
        [HttpGet]
        public async Task<ActionResult<List<TravelAgent>>> GetAllTravelAgentRequest()
        {
            try
            {
                return await _context.GetAllTravelAgentRequest();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost]
        public async Task<ActionResult<List<TravelAgent>>> PostRequestForTravelAgent(TravelAgent travelAgent)
        {
            try
            {
                return await _context.PostRequestForTravelAgent(travelAgent);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        public async Task<ActionResult<List<TravelAgent>>> DeleteTravelAgent(int id)
        {
            try
            {
                return await _context.DeleteTravelAgent(id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
