using ServerProcessDashboard.Server.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ServerProcessDashboard.Server.Api.v1
{
    public class RunningServerProcessController : BaseApiController
    {
        public RunningServerProcessController(ISessionService sessionService, IServerProcessService serverProcessService)
            :base(sessionService)
        {
            this.serverProcessService = serverProcessService;
        }

        [HttpGet]
        public IHttpActionResult Kill(Guid guid)
        {
            this.serverProcessService.KillRunningServerProcess(guid);
            return Ok();
        }

        [HttpGet]
        public IHttpActionResult Pause(Guid guid)
        {
            this.serverProcessService.PauseRunningServerProcess(guid);
            return Ok();
        }

        [HttpGet]
        public IHttpActionResult Stop(Guid guid)
        {
            this.serverProcessService.StopRunningServerProcess(guid);
            return Ok();
        }

        [HttpGet]
        public IHttpActionResult Restart(Guid guid)
        {
            this.serverProcessService.RestartRunningServerProcess(guid);
            return Ok();
        }

        private IServerProcessService serverProcessService { get; set; }
    }
}
