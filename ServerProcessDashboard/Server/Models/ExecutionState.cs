using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerProcessDashboard.Server.Models
{
    public enum ExecutionState
    {
        Created,
        InProgress,
        Stopped,
        Paused,
        Killed
    }
}