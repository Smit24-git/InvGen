using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace inv_gen_api.Application.Exceptions
{
    public class NotFoundException : Exception
    {
        public NotFoundException(string name, string key)
            : base($"{name} ({key}) is not found")
        {

        }
    }
}
