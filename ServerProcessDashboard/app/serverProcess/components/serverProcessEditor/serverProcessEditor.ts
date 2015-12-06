module ServerProcessModule {

    "use strict";

    class ServerProcessEditor {

        public static componentId: string = "serverProcessEditor";

        public restrict: string = "E";

        public replace: boolean = true;

        public templateUrl: string = "/app/serverProcess/components/serverProcessEditor/serverProcessEditor.html";

        public link = (scope, element, attributes) => {

            scope.save = (form) => {

            }
        }

        public $inject: string[] = ["serverProcessUow"];

        constructor(private serverProcessUow) {

        }
    }

    angular.module("serverProcess").directive(ServerProcessEditor.componentId,(serverProcessUow) => new ServerProcessEditor(serverProcessUow));
}
