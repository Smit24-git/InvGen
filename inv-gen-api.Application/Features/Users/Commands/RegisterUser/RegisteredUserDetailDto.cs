using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace inv_gen_api.Application.Features.Users.Commands.RegisterUser
{
    public class RegisteredUserDetailDto
    {
        public string Id { get; set; } = default!;
        public string UserName { get; set; } = default!;

    }
}
