using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using ServerProcessDashboard.Server.Services.Contracts;
using ServerProcessDashboard.Server.Data.Contracts;
using Microsoft.Practices.Unity;
using System.Timers;

namespace ServerProcessDashboard.Server.Hubs
{
    [HubName("serverProcessDashboardHub")]
    public class ServerProcessDashboardHub : Hub, IServerProcessDashboardHub
    {
        private IServerProcessService serverProcessService;

        private int serverProcessId = 0;

        public ServerProcessDashboardHub(IServerProcessService serverProcessService)
        {
            this.serverProcessService = serverProcessService;

            var timer = new Timer(300);

            timer.Elapsed += NotifyClientsIfServerProcessesChange;
        }

        public void Run(string name, string step)
        {
            Clients.All.runStart();
        }

        private void NotifyClientsIfServerProcessesChange(Object source, ElapsedEventArgs e)
        {
            var serverProcess = serverProcessService.MostRecentlyAddedServerProcess();

            if (serverProcess != null)
            {
                if (this.serverProcessId != serverProcess.Id)
                {
                    Clients.All.serverProcessChange();

                    this.serverProcessId = serverProcess.Id;
                }
            }           
        }
    }
}