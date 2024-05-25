using inv_gen_api.Application.Exceptions;
using inv_gen_api.Persistence;
using inv_gen_api.Repositories.Contracts.Persistance;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace inv_gen_api.Application.Features.Users.Commands.RegisterUser
{
    public class RegisterUserCommandHandler : IRequestHandler<RegisterUserCommand, RegisterUserCommandResponse>
    {
        private readonly IUserRepository _userRepository;
        private readonly UserManager<ApplicationUser> _userManager;

        public RegisterUserCommandHandler(IUserRepository userRepository, UserManager<ApplicationUser> userManager)
        {
            _userRepository = userRepository;
            _userManager = userManager;
        }

        public async Task<RegisterUserCommandResponse> Handle(RegisterUserCommand request, CancellationToken cancellationToken)
        {
            var res = new RegisterUserCommandResponse();
            await ValidateAsync(request);

            var user = new ApplicationUser()
            {
                UserName = request.UserName,
                NormalizedUserName = request.UserName.ToUpper(),
            };

            var result = await _userManager.CreateAsync(user, request.Password);

            if (result.Succeeded)
            {
                res.UserDetails = new RegisteredUserDetailDto { Id = user.Id, UserName = user.UserName };
                res.IsSuccess = true;
                res.Message = "User Registered Successfully!";
            }
            else
            {
                res.IsSuccess = false;
                res.Message = "Failed to add new user";
                res.Errors = result.Errors.Select(e => e.Description).ToList();
            }

            return res;
        }

        private async Task ValidateAsync(RegisterUserCommand request)
        {
            var validator = new RegisterUserCommandValidator(_userRepository);
            var validationResult = await validator.ValidateAsync(request);
            if (validationResult.Errors.Count > 0)
            {
                throw new ValidationException(validationResult);
            }
        }
    }
}
