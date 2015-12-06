module ServerProcessModule {

    "use strict";

    class RunServerProcessForm {

        public static componentId: string = "runServerProcessForm";

        public restrict: string = "E";

        public replace: boolean = true;

        public scope = {};

        public templateUrl: string = "/app/serverProcess/components/runServerProcessForm/runServerProcessForm.html";

        public link = (scope, element, attributes) => {

            scope.tryToRun = (form) => {

                return this.serverProcessService.run({ model: scope.entity }).then(() => {

                });
            }
        }

        public $inject: string[] = ["serverProcessService"];

        constructor(private serverProcessService) {

        }
    }

    angular.module("serverProcess").directive(RunServerProcessForm.componentId,(serverProcessService) => new RunServerProcessForm(serverProcessService));

}
