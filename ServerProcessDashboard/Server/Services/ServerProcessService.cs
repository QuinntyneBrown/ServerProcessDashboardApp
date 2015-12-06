using ServerProcessDashboard.Server.Data.Contracts;
using ServerProcessDashboard.Server.Models;
using ServerProcessDashboard.Server.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerProcessDashboard.Server.Services
{
    public class ServerProcessService : IServerProcessService
    {
        private IUow uow { get; set; }

        public ServerProcessService(IUow uow)
        {
            this.uow = uow;
        }

        public void AddServerProcess(ServerProcess serverProcess)
        {
            uow.ServerProcesses.Add(serverProcess);
        }

        public ICollection<ServerProcess> GetAllServerProcesses()
        {
            return uow.ServerProcesses.GetAll().Where(x => !x.IsDeleted).ToList();
        }

        public ICollection<RunningServerProcess> GetAllRunningServerProcesses()
        {
            return uow.RunningServerProcesses.GetAll().Where(x => !x.IsDeleted).ToList();
        }

        public ServerProcess MostRecentlyAddedServerProcess()
        {
            return uow.ServerProcesses.GetAll().Where(x=> !x.IsDeleted).OrderByDescending(x => x.Id).FirstOrDefault();
        }

        public RunningServerProcess MostRecentlyAddedRunningServerProcess()
        {
            return uow.RunningServerProcesses.GetAll().Where(x => !x.IsDeleted).OrderByDescending(x => x.Id).FirstOrDefault();
        }

        public void RemoveServerProcess(int serverProcessId)
        {
            var serverProcess = uow.ServerProcesses.GetById(serverProcessId);
            serverProcess.IsDeleted = true;
            uow.ServerProcesses.Update(serverProcess);
            uow.SaveChanges();

        }

        public void RunServerProcess(string name, string step)
        {

        }

        public void KillRunningServerProcess(Guid guid)
        {
            
        }

        public void StopRunningServerProcess(Guid guid)
        {

        }

        public void PauseRunningServerProcess(Guid guid)
        {

        }

        public void RestartRunningServerProcess(Guid guid)
        {

        }
    }
}