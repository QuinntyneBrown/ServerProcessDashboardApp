module ServerProcessModule {

    "use strict";

    class RunningServerProcessList {

        public static componentId: string = "runningServerProcessList";

        public restrict: string = "E";

        public replace: boolean = true;

        public templateUrl: string = "/app/serverProcess/components/runningServerProcessList/runningServerProcessList.html";

        public link = (scope, element, attributes) => {

            scope.save = (form) => {

            }
        }

        public $inject: string[] = ["serverProcessService"];

        constructor(private serverProcessService) {

        }
    }

    angular.module("serverProcess").directive(RunningServerProcessList.componentId,(serverProcessService) => new RunningServerProcessList(serverProcessService));
}
