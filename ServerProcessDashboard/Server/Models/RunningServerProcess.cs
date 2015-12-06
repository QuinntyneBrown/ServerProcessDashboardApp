using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ServerProcessDashboard.Server.Models
{
    public class RunningServerProcess: BaseEntity
    {
        public RunningServerProcess()
        {
            
        }

        public string Step { get; set; }

        [ForeignKey("ServerProcess")]
        public int ServerProcessId { get; set; }

        public Guid? Guid { get; set; }

        public ExecutionState ExecutionState { get; set; }

        public DateTime? StartTime { get; set; }

        public DateTime? CompletionTime { get; set; }

        public string Comment { get; set; }

        public ServerProcess ServerProcess { get; set; }
    }
}