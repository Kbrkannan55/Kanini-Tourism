using KaniniTourism.Models;
using Microsoft.AspNetCore.Mvc;

namespace KaniniTourism.Repository.FeedbackServices
{
    public interface IFeedbackRepo
    {
        Task<ActionResult<List<Feedback>>> GetAllFeedback();
        Task<ActionResult<List<Feedback>>> PostFeedback(Feedback feedback);
    }
}
