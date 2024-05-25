using inv_gen_api.Persistence;
using inv_gen_api.Repositories.Contracts.Persistence;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace inv_gen_api.Repositories.Contracts.Persistance
{
    public interface IUserRepository:IAsyncRepository<ApplicationUser>
    {
        Task<bool> IsUserUniqueAsync(string userName);
        Task<ApplicationUser> RegisterUserAsync(ApplicationUser user);
    }
}
