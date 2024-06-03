using inv_gen_api.Application.Features.Users.Commands.LoginUser;
using inv_gen_api.Application.Features.Users.Commands.RegisterUser;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace inv_gen_api.Controllers
{
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IMediator _mediator;

        public UserController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [Route("Api/Users/Register")]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<RegisterUserCommandResponse>> RegisterUser([FromBody] RegisterUserCommand registerUserCommand)
        {
            var res = await _mediator.Send(registerUserCommand);
            return Ok(res);
        }

        [Route("Api/Users/Login")]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<LoginUserCommandResponse>> LoginUser([FromBody] LoginUserCommand loginUserCommand)
        {
            var res = await _mediator.Send<LoginUserCommandResponse>(loginUserCommand);
            return Ok(res);
        }
    }
}
