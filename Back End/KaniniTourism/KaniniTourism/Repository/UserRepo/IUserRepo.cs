using KaniniTourism.Models;
using loginauth.Models.Dto;
using Microsoft.AspNetCore.Mvc;

namespace KaniniTourism.Repository.UserRepo
{
    public interface IUserRepo
    {
        Task<IActionResult> AddUser(User userObj);
        Task<IActionResult> Authenticate(User userObj);
        Task<IActionResult> Refresh(TokenApiDto getToken);
        Task<ActionResult<List<User>>> GetAllAgent();
        Task<ActionResult<List<User>>> DeleteAgent(int id);
    }
}
