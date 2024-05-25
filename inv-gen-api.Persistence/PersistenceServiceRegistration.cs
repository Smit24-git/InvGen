
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace inv_gen_api.Persistence
{
    public static class PersistenceServiceRegistration
    {
        public static IServiceCollection AddPersistenceServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<InvoiceGenDbContext>(option =>
            {
                var provider = configuration.GetValue("provider", "mysql");

                if (provider == "mysql")
                {
                    option.UseMySql(
                        configuration.GetConnectionString("mysqlDatabase"),
                        ServerVersion.AutoDetect(configuration.GetConnectionString("mysqlDatabase")),
                        x => x.MigrationsAssembly("inv-gen-api.Persistence.MySQL"))
                      .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
                }
                else
                {
                    throw new Exception($"Unsupported provider: {provider}");
                }

            });
            return services;

        }
    }
}
