using ServerProcessDashboard.Server.Services.Contracts;
using System.Web.Http;

namespace ServerProcessDashboard.Server.Api.v1
{
    public class BaseApiController : ApiController
    {
        protected readonly ISessionService sessionService;

        public BaseApiController(ISessionService sessionService)
        {
            this.sessionService = sessionService;
        }
    }
}
