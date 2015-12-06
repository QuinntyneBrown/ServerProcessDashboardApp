using System;
using ServerProcessDashboard.Server.Data.Contracts;
using ServerProcessDashboard.Server.Models;

namespace ServerProcessDashboard.Server.Data
{
    public class Uow: IUow
    {
        protected DbContext DbContext;

        protected IRepositoryProvider RepositoryProvider { get; set; } 

        public Uow(IRepositoryProvider repositoryProvider)
        {
            CreateDbContext();

            repositoryProvider.DbContext = DbContext;

            RepositoryProvider = repositoryProvider;
        }

        protected void CreateDbContext()
        {
            DbContext = new DbContext();
            DbContext.Configuration.ProxyCreationEnabled = false;
            DbContext.Configuration.LazyLoadingEnabled = false;
            DbContext.Configuration.ValidateOnSaveEnabled = false;
        }

        public IRepository<User> Users { get { return GetStandardRepo<User>(); } }
        public IRepository<Group> Groups { get { return GetStandardRepo<Group>(); } }
        public IRepository<Role> Roles { get { return GetStandardRepo<Role>(); } }
        public IRepository<Session> Sessions { get { return GetStandardRepo<Session>(); } }
        public IRepository<ServerProcess> ServerProcesses { get { return GetStandardRepo<ServerProcess>(); } }
        public IRepository<RunningServerProcess> RunningServerProcesses { get {  return GetStandardRepo<RunningServerProcess>(); } }
 
        public void SaveChanges()
        {
            this.DbContext.SaveChanges();
        }

        private IRepository<T> GetStandardRepo<T>() where T : class
        {
            return RepositoryProvider.GetRepositoryForEntityType<T>();
        }

        private T GetRepo<T>() where T : class
        {
            return RepositoryProvider.GetRepository<T>();
        }

        #region IDisposable

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (DbContext != null)
                {
                    DbContext.Dispose();
                }
            }
        }

        #endregion
    }
}