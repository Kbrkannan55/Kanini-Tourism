using KaniniTourism.Models;
using KaniniTourism.Repository.FeedbackServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KaniniTourism.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        private readonly IFeedbackServices _context;

        public FeedbackController(IFeedbackServices context)
        {
            _context = context;
        }

      /*  [HttpGet]
        public async Task<ActionResult<List<Feedback>>> GetAllFeedback()
        {
            try
            {
                return await _context.GetAllFeedback();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }


        [HttpPost]
        public async Task<ActionResult<List<Feedback>>> PostFeedback(Feedback feedback)
        {
            try
            {
                return await _context.PostFeedback(feedback);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }*/
    }
}
