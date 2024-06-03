using inv_gen_api.Application.Exceptions;
using inv_gen_api.Persistence;
using inv_gen_api.Repositories.Contracts.Persistance;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace inv_gen_api.Application.Features.Users.Commands.LoginUser
{
    public class LoginUserCommandHandler : IRequestHandler<LoginUserCommand, LoginUserCommandResponse>
    {
        private readonly IUserRepository _userRepository;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly string _secretKey;

        public LoginUserCommandHandler(IUserRepository userRepository, UserManager<ApplicationUser> userManager, IConfiguration configuration)
        {
            _userRepository = userRepository;
            _userManager = userManager;
            _secretKey = configuration.GetValue<string>("ApiSettings:Secret")!;
        
        }

        public async Task<LoginUserCommandResponse> Handle(LoginUserCommand request, CancellationToken cancellationToken)
        {
            var res =new LoginUserCommandResponse();

            //check user exists
            var user = (await _userRepository.ListAllAsync()).FirstOrDefault(u=> u.UserName == request.UserName);

            if (user is null)
            {
                res.IsSuccess = false;
                res.Message = "Incorrect username or password!";
                res.Errors = ["Username not found."];
                throw new RequestFailedException(res);
            }

            //check Password
            var isValidPassword = await _userManager.CheckPasswordAsync(user, request.Password);

            if (!isValidPassword)
            {

                res.IsSuccess = false;
                res.Message = "Incorrect username or password!";
                res.Errors = ["Password does not match."];
                throw new RequestFailedException(res);
            }

            //create token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_secretKey);
            var roles = (await _userManager.GetRolesAsync(user)).ToList();

            var nameClaim = new Claim(ClaimTypes.Name, user.Id);
            var roleClaims = roles.Select((role) => new Claim(ClaimTypes.Role, role));
            var claims = new List<Claim>() { nameClaim };
            claims.AddRange(roleClaims);

            var secTokenDescriptor = new SecurityTokenDescriptor()
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(31),
                SigningCredentials = new SigningCredentials( new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(secTokenDescriptor);
            res.Token = tokenHandler.WriteToken(token);
            res.UserName = user.UserName;
            res.Id = user.Id;
            res.Roles = [.. roles];
            res.IsSuccess = true;

            //send response
            return res;
        }
    }
}
