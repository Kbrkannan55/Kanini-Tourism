using KaniniTourism.Models;
using Microsoft.AspNetCore.Mvc;

namespace KaniniTourism.Repository.ImagesRepo
{
    public interface IImageRepo
    {
        Task<ActionResult<IEnumerable<Place>>> GetAllPlace();
    }
}
