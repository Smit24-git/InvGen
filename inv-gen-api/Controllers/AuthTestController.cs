using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace inv_gen_api.Controllers
{

    [ApiController]
    public class AuthTestController : ControllerBase
    {
        [HttpGet]
        [Authorize]
        [Route("Api/Auth/Test")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<string> TestAuthorization()
        {
            return Ok(new { Message = "You are authorized!" });
        }
    }
}
