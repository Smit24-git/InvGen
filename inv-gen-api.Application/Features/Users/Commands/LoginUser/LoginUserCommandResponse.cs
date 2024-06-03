using inv_gen_api.Application.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace inv_gen_api.Application.Features.Users.Commands.LoginUser
{
    public class LoginUserCommandResponse : BaseResponse
    {
        public string Token { get; internal set; } = default!;
        public string? UserName { get; internal set; } = default!;
        public string Id { get; internal set; } = default!;
        public string[] Roles { get; internal set; } = default!;
    }
}
