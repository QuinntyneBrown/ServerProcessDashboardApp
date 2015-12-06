module DashboardModule {

    "use strict";

    export class DashboardHeader implements ng.IDirective {

        public static componentId = "dashboardHeader";

        public templateUrl: string = "app/dashboard/components/dashboardHeader/dashboardHeader.html";

        public restrict: string = "E";

        public scope: any = {};

        public replace: boolean = true;

        public link = (scope: any, element: any) => {
            scope.session = this.session;

        };

        public static $inject: Array<string> = ["session"];

        constructor(private session) {

        }
    }

    angular.module("dashboard").directive(DashboardHeader.componentId,(session) => new DashboardHeader(session));
}