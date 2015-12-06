module ServerProcessModule {

    "use strict";

    class ServerProcessMenu {

        public $inject: string[] = [];

        constructor() {

        }

        public static componentId: string = "serverProcessMenu";

        public restrict: string = "E";

        public replace: boolean = true;

		public scope = {};

        public templateUrl: string = "/app/serverProcess/components/serverProcessMenu/serverProcessMenu.html";

        public link = (scope, element, attributes) => {


        }

    }

    angular.module("serverProcess").directive(ServerProcessMenu.componentId,() => new ServerProcessMenu());

}
