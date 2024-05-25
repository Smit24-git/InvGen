using inv_gen_api.Persistence.Repositories;
using inv_gen_api.Repositories.Contracts.Persistance;
using inv_gen_api.Repositories.Contracts.Persistence;
using inv_gen_api.Repositories.Repositories.UserRepositories;
using Microsoft.Extensions.DependencyInjection;

namespace inv_gen_api.Repositories
{
    public static class RepositoryServiceRegistration
    {
        public static IServiceCollection AddRepositoryPersistanceService(this IServiceCollection services)
        {
            services.AddScoped(typeof(IAsyncRepository<>), typeof(BaseRepository<>));

            // user repositories
            services.AddScoped<IUserRepository, UserRepository>();

            //

            return services;
        }
    }
}
