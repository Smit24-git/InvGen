using inv_gen_api.Application;
using inv_gen_api.Extensions;
using inv_gen_api.middlewares;
using inv_gen_api.Persistence;
using inv_gen_api.Repositories;
using Microsoft.OpenApi.Models;

namespace inv_gen_api
{
    public static class StartupExtensions
    {
        public static WebApplication ConfigurationService(
            this WebApplicationBuilder builder)
        {
            AddSwagger(builder.Services);
            builder.Services.AddApplicationServices();
            builder.Services.AddRepositoryPersistanceService();
            builder.Services.AddPersistenceServices(builder.Configuration);
            builder.Services.AddIdentityServices(builder.Configuration);


            builder.Services.AddControllers().AddNewtonsoftJson();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("Open", builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            });



            return builder.Build();
        }

        public static WebApplication ConfigurationPipeline(
            this WebApplication app)
        {
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "InvGen API");
                });
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("Open");

            app.UseAuthentication();
            app.UseAuthorization();

            app.MapControllers();
            app.UseCustomExceptionHandler();


            return app;
        }

        private static void AddSwagger(IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = "JWT Authorization header using the Bearer Scheme. Example: 'Bearer XXXXX'",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Scheme = "Bearer"
                });
                c.AddSecurityRequirement(new OpenApiSecurityRequirement()
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference= new OpenApiReference()
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            },
                            Scheme = "oauth2",
                            Name = "Bearer",
                            In= ParameterLocation.Header,
                        },
                        new List<string>()
                    }
                });
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "Invoice Generator API",
                });
            });
        }
    }
}
