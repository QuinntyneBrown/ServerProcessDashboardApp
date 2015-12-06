using ServerProcessDashboard.Server.Data;
using ServerProcessDashboard.Server.Models;
using ServerProcessDashboard.Server.Services;
using ServerProcessDashboard.Server.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ServerProcessDashboard.Server.Api.v1
{
    public class ServerProcessController : BaseApiController
    {
        public ServerProcessController(ISessionService sessionService, IServerProcessService serverProcessService)
            : base(sessionService)
        {
            this.serverProcessService = serverProcessService;
        }

        [HttpGet]
        public IHttpActionResult GetAll()
        {
            return Ok(this.serverProcessService.GetAllServerProcesses());
        }

        [HttpGet]
        public IHttpActionResult Add(ServerProcess serverProcess)
        {
            serverProcessService.AddServerProcess(serverProcess);

            return Ok();
        }

        [Authorize]
        [HttpDelete]
        public IHttpActionResult Remove(int id)
        {
            serverProcessService.RemoveServerProcess(id);
            return Ok();
        }


        private IServerProcessService serverProcessService { get; set; }
    }
}
