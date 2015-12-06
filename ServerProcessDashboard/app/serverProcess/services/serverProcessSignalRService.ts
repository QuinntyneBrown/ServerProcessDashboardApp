module ServerProcessModule {

    "use strict";

    angular.module("serverProcess")
        .service("serverProcessSignalRService",($rootScope, $) => new ServerProcessSignalRService($rootScope, $));

    class ServerProcessSignalRService {

        public static serviceId: string = "serverProcessSignalRService";

        public connection: any = null;

        public hub: any = null;

        public run = (name: string, step: string) => {
            this.hub.invoke("run", name, step);
        }
        public runStart = () => {
            this.$rootScope.$broadcast("serverProcessRunStart");
        }

        public $inject = ["$rootScope","$"];

        constructor(private $rootScope, private $) {

            this.connection = this.$.hubConnection();

            this.hub = this.connection.createHubProxy("serverProcessHub");

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

}


