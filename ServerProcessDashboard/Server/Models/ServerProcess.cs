using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerProcessDashboard.Server.Models
{
    public class ServerProcess: BaseEntity
    {
        public ServerProcess()
        {
            this.RunningServerProcesses = new HashSet<RunningServerProcess>();
        }
        public string Name { get; set; }

        public ICollection<RunningServerProcess> RunningServerProcesses { get; set; } 
    }
}