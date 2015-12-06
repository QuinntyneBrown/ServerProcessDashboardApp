using System.Configuration;

namespace ServerProcessDashboard.Server.Config
{
    public class AppConfiguration : ConfigurationSection
    {
        [ConfigurationProperty("owinWindowServiceVersion", IsRequired = true)]
        public string SIMWindowServiceVersion
        {
            get { return (string)this["owinWindowServiceVersion"]; }
            set { this["owinWindowServiceVersion"] = value; }
        }

        [ConfigurationProperty("simExecutionHostVersion", IsRequired = true)]
        public string SIMExecutionHostVersion
        {
            get { return (string)this["simExecutionHostVersion"]; }
            set { this["simExecutionHostVersion"] = value; }
        }

        public static AppConfiguration Config
        {
            get { return ConfigurationManager.GetSection("appConfiguration") as AppConfiguration; }
        }


    }
}