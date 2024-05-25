using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace inv_gen_api.Persistence
{
    public class ApplicationUser: IdentityUser
    {
        public string? Name { get; set; }
        public bool IsActive { get; set; } = true;
    }
}
