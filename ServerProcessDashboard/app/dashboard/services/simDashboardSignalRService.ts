 module DashboardModule {
     
     function serverProcessDashboardSignalRService($rootScope) {
         
     }

     serverProcessDashboardSignalRService.$inject = ["$rootScope"];


     class ServerProcessDashboardSignalRService {
         
         public $inject = ["$rootScope", "$"];

         public static serviceId = "serverProcessDashboardSignalRService";

         public connection: any = null;

         public hub:any = null;

         public run = (name: string, step: string) => {
             this.hub.invoke("run", name, step);
         }
         public runStart = () => {
             this.$rootScope.$broadcast("runStart");
         }

         constructor(private $rootScope, private $) {

             this.connection = this.$.hubConnection();

             this.hub = this.connection.createHubProxy("serverProcessDashboardHub");

             this.hub.on("serverProcessRunStart",(update) => {
                 this.runStart();
             });

             this.connection.start(() => {

             });

             this.$rootScope.$on("serverProcessRunRequest",(event, object) => {
                 this.run(object.entity.name, object.entity.step);
             });
         }
     }

     angular.module("dashboard")
         .service(ServerProcessDashboardSignalRService.serviceId, ($rootScope,$) => new ServerProcessDashboardSignalRService($rootScope, $));

 }