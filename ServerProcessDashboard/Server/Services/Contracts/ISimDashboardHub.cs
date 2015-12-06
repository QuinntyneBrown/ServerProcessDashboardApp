using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServerProcessDashboard.Server.Services.Contracts
{
    public interface IServerProcessDashboardHub
    {
        void Run(string name, string step);
    }
}
