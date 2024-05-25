using FluentValidation;
using inv_gen_api.Repositories.Contracts.Persistance;

namespace inv_gen_api.Application.Features.Users.Commands.RegisterUser
{
    public class RegisterUserCommandValidator : AbstractValidator<RegisterUserCommand>
    {
        private readonly IUserRepository _userRepository;

        public RegisterUserCommandValidator(IUserRepository userRepository)
        {
            this._userRepository = userRepository;
            RuleFor(x => x.UserName)
                .NotNull()
                .NotEmpty()
                .WithMessage("{PropertyName} is required!");

            RuleFor(x => x.Password)
                .NotNull()
                .NotEmpty()
                .WithMessage("{PropertyName} is required!");

            RuleFor(x => x)
                .MustAsync(UniqueUserName)
                .WithMessage("UserName Already Exists. Please select unique username.");
        }

        private async Task<bool> UniqueUserName(RegisterUserCommand command, CancellationToken token)
        {
            return (await _userRepository.IsUserUniqueAsync(command.UserName));
        }
    }
}
