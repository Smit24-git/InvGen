using inv_gen_api.Application.Responses;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace inv_gen_api.Application.Exceptions
{
    public class RequestFailedException:Exception
    {
        public BaseResponse BaseResponse { get; set; }
        public RequestFailedException(BaseResponse res): base(res.Message) {
            BaseResponse = res;
        }
    }
}
