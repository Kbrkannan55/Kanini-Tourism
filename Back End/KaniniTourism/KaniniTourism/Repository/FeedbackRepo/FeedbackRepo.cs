using KaniniTourism.GlobalExceptions;
using KaniniTourism.Models;
using loginauth.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KaniniTourism.Repository.FeedbackServices
{
    public class FeedbackRepo : IFeedbackRepo
    {
        private readonly TourismContext _context;
        public FeedbackRepo(TourismContext context)
        {
            _context = context;
        }


        public async Task<ActionResult<List<Feedback>>> GetAllFeedback()
        {
            var details = await _context.feedbacks.ToListAsync();
            if (details == null)
            {
                throw new Exception(CustomException.ExceptionMessages["Empty"]);
            }
            return details;
        }


        public async Task<ActionResult<List<Feedback>>> PostFeedback(Feedback feedback)
        {
            _context.Add(feedback);
            await _context.SaveChangesAsync();
            return await _context.feedbacks.ToListAsync();
        }
    }

}
