using KaniniTourism.Models;
using Microsoft.AspNetCore.Mvc;

namespace KaniniTourism.Repository.PackageServices
{
    public interface IPackageRepo
    {
        Task<ActionResult<List<Package>>> GetAllPackages();
        Task<List<Package>> PostPackages(Package package);
    }
}
