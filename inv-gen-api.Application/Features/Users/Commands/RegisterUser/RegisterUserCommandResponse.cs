using inv_gen_api.Application.Responses;

namespace inv_gen_api.Application.Features.Users.Commands.RegisterUser
{
    public class RegisterUserCommandResponse : BaseResponse
    {
        public RegisteredUserDetailDto UserDetails { get; set; } = default!;
    }
}
