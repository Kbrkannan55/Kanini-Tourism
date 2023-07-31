using KaniniTourism.Models;
using Microsoft.AspNetCore.Mvc;

namespace KaniniTourism.Repository.PackageServices
{
    public interface IPackageServices
    {
        Task<ActionResult<List<Package>>> GetAllPackages();
        Task<List<Package>> PostPackages(Package package);
    }
}
