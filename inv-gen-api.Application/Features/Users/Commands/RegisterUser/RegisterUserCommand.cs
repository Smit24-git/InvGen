using MediatR;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace inv_gen_api.Application.Features.Users.Commands.RegisterUser
{
    public class RegisterUserCommand:IRequest<RegisterUserCommandResponse>
    {
        [MaxLength(100)]
        public required string UserName { get; set; }
        [MaxLength(100)]
        public required string Password { get; set; }
    }
}
