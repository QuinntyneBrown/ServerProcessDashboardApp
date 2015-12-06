module ServerProcessModule {

    class ServerProcessList {

        public static componentId: string = "serverProcessList";

        public replace: boolean = true;

        public restrict: string = "E";

        public templateUrl: string = "/app/serverProcess/components/serverProcessList/serverProcessList.html";

        public scope: any = {};

        public link = (scope, element, attributes) => {

            scope.vm = {};

            scope.vm.remove = (entity) => {
                return this.serverProcessService.remove({ id: entity.id }).then(() => {

                    for (var i = 0; i < scope.vm.entities.length; i++) {
                        if (scope.vm.entities[i].id == entity.id) {
                            scope.vm.entities.splice(i, 1);
                        }
                    }

                }).catch((error) => {

                });
            }

            return this.serverProcessService.getAll().then((results) => {
                return scope.vm.entities = results;
            });
        }

        public $inject: string[] = ["serverProcessService"];

        constructor(private serverProcessService) {

        }
    }

    angular.module("serverProcess").directive(ServerProcessList.componentId,(serverProcessService) => new ServerProcessList(serverProcessService));

}