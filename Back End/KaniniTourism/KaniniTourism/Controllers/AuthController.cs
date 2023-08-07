using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text.RegularExpressions;
using System.Text;
using Microsoft.EntityFrameworkCore;
using loginauth.Models.Dto;
using loginauth.Helpers;
using KaniniTourism.Models;
using KaniniTourism.Repository.UserRepo;
using Serilog;
using Microsoft.Azure.Cosmos.Serialization.HybridRow;
using Microsoft.AspNetCore.Authorization;

namespace loginauth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserRepo _authContext;

        public AuthController (IUserRepo authContext)
        {
            _authContext = authContext;
        }

        [HttpPost("register")]
        public async Task<IActionResult> AddUser([FromBody] User userObj)
        {
            try
            {
                return await _authContext.AddUser(userObj);
                
            }
            catch
            {
                Log.Information("Registration Details =>{@userObj}", userObj);
                // Return a generic error response to the client
                return StatusCode(500, new { Message = "An error occurred while adding a user. Please try again later." });
            }
            
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] User userObj)
        {
            try
            {
                return await _authContext.Authenticate(userObj);
                Log.Information("Authenticate Details => {@userObj}", userObj);
            }
            catch
            {
                // Return a generic error response to the client
                return StatusCode(500, new { Message = "An error occurred while authenticating the user. Please try again later." });
            }
        }


        [HttpPost("refresh")]
        public async Task<IActionResult> Refresh([FromBody] TokenApiDto getToken)
        {
            try
            {
                return await _authContext.Refresh(getToken);
                Log.Information($"Refresh: {getToken}");
            }
            catch
            {
                // Return a generic error response to the client
                return StatusCode(500, new { Message = "An error occurred while refreshing the token. Please try again later." });
            }
        }

        /*[Authorize(Roles = "Admin")]*/
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAllAgent()
        {
            try
            {
                return await _authContext.GetAllAgent();
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

      /*  [Authorize(Roles = "Admin")]*/
        [HttpDelete("Delete")]
        public async Task<ActionResult<List<User>>> DeleteAgent(int id)
        {
            try
            {
                return await _authContext.DeleteAgent(id);
                
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
