using KaniniTourism.Models;
using loginauth.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KaniniTourism.Repository.TransactionServices
{
    public class TransactionServices : ITransactionServices
    {
        private readonly TourismContext _context;
        public TransactionServices(TourismContext context)
        {
            _context = context;
        }


        public async Task<ActionResult<List<Transaction>>> GetAllTransaction()
        {
            var details = await _context.transaction.ToListAsync();
            return details;
        }


        public async Task<ActionResult<List<Transaction>>> PostTransaction(Transaction transaction)
        {
            _context.Add(transaction);
            await _context.SaveChangesAsync();
            return await _context.transaction.ToListAsync();
        }
    }
}
