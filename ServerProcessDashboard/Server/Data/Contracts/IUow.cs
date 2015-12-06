using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ServerProcessDashboard.Server.Models;

namespace ServerProcessDashboard.Server.Data.Contracts
{
    public interface IUow
    {
        IRepository<User> Users { get; }
        IRepository<Group> Groups { get; }
        IRepository<Role> Roles { get; }
        IRepository<Session> Sessions { get; }
        IRepository<ServerProcess> ServerProcesses { get; }
        IRepository<RunningServerProcess> RunningServerProcesses { get; } 
        void SaveChanges();
    }
}
