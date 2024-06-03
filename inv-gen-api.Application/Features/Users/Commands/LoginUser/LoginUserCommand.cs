using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace inv_gen_api.Application.Features.Users.Commands.LoginUser
{
    public class LoginUserCommand: IRequest<LoginUserCommandResponse>
    {
        public required string UserName { get; set; }
        public required string Password { get; set; }
    }
}
