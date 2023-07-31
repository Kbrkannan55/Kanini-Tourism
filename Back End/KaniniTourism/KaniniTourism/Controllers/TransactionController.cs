using KaniniTourism.Models;
using KaniniTourism.Repository.TransactionServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KaniniTourism.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        private readonly ITransactionServices _context;
        public TransactionController(ITransactionServices context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<Transaction>>> GetAllTransaction()
        {
            try
            {
                return await _context.GetAllTransaction();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);  
            }
        }


        [HttpPost]
        public async Task<ActionResult<List<Transaction>>> PostTransaction(Transaction transaction)
        {
            try
            {
                return await _context.PostTransaction(transaction);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
