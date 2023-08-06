using KaniniTourism.Models;
using loginauth.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.EntityFrameworkCore;

namespace KaniniTourism.Repository.PackageServices
{
    public class PackageRepo : IPackageRepo
    {
        private readonly TourismContext _context;
        public PackageRepo(TourismContext context)
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
            _ = _context.packages.Add(package);
            await _context.SaveChangesAsync();
            return await _context.packages.ToListAsync();
        }


        public async Task<ActionResult<List<Package>>> GetFiltedPackages(string type, string desti,string transport)
        {
            var details= await _context.packages.Where(x=>x.PackageType==type && x.Destination==desti && x.VehicleType==transport).ToListAsync();
            return details;
        }
    }
}
