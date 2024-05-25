using inv_gen_api.Persistence;
using inv_gen_api.Persistence.Repositories;
using inv_gen_api.Repositories.Contracts.Persistance;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace inv_gen_api.Repositories.Repositories.UserRepositories
{
    public class UserRepository : BaseRepository<ApplicationUser>, IUserRepository 
    {
        public UserRepository(InvoiceGenDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<bool> IsUserUniqueAsync(string userName)
        {
            return !(await _dbContext.ApplicationUsers.AnyAsync(x=>x.UserName == userName));

        }

        public async Task<ApplicationUser> RegisterUserAsync(ApplicationUser user)
        {
            await _dbContext.AddAsync(user);
            await _dbContext.SaveChangesAsync();
            return user;
        }
        
    }
}
