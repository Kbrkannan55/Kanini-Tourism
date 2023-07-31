using KaniniTourism.Models;
using loginauth.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.EntityFrameworkCore;

namespace KaniniTourism.Repository.PackageServices
{
    public class PackageServices : IPackageServices
    {
        private readonly TourismContext _context;
        public PackageServices(TourismContext context)
        {
            _context = context;
        }

        public async Task<ActionResult<List<Package>>> GetAllPackages()
        {
            var details = await _context.packages.ToListAsync();
            return details;
        }

        public async Task<List<Package>> PostPackages(Package package)
        {
            var details= _context.Add(package);
            _context.SaveChangesAsync();
            return await _context.packages.ToListAsync();
        }
    }
}
