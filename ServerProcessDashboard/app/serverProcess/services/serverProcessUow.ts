module ServerProcessModule {
    
    class ServerProcessUow {
    
        public static serviceId: string = "serverProcessUow";  
          
        public serverProcesss = this.serverProcessService;

        public $inject: string[] = ["serverProcessService"];

        constructor(private serverProcessService) {
            
        }
    }


    angular.module("serverProcess").service(ServerProcessUow.serviceId,(serverProcessService) => new ServerProcessUow(serverProcessService));

}