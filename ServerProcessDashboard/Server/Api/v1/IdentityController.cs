using ServerProcessDashboard.Server.Data.Contracts;
using ServerProcessDashboard.Server.Dto.v1;
using ServerProcessDashboard.Server.Services.Contracts;
using System.Web.Http;

namespace ServerProcessDashboard.Server.Api.v1
{
    public class IdentityController : BaseApiController
    {
        protected readonly IIdentityService identityService;

        public IdentityController(ISessionService sessionService, IUow uow, IIdentityService identityService)
            :base(sessionService) 
        {
            this.identityService = identityService;
        }

        [HttpPost]
        public IHttpActionResult SignIn(SignInDto signInDto)
        {
            return Ok(identityService.SignIn(signInDto));
        }

        [HttpPost]
        public IHttpActionResult Register(RegistrationRequestDto dto)
        {
            return Ok(identityService.TryToRegister(dto));
        }
    }
}
