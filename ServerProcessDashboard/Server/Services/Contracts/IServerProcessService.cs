using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ServerProcessDashboard.Server.Models;

namespace ServerProcessDashboard.Server.Services.Contracts
{
    public interface IServerProcessService
    {
        void AddServerProcess(ServerProcess serverProcess);

        ICollection<ServerProcess> GetAllServerProcesses();

        ICollection<RunningServerProcess> GetAllRunningServerProcesses();

        ServerProcess MostRecentlyAddedServerProcess();

        RunningServerProcess MostRecentlyAddedRunningServerProcess();

        void RemoveServerProcess(int serverProcessId);

        void RunServerProcess(string name, string step);

        void KillRunningServerProcess(Guid guid);

        void StopRunningServerProcess(Guid guid);

        void PauseRunningServerProcess(Guid guid);

        void RestartRunningServerProcess(Guid guid);
    }
}
