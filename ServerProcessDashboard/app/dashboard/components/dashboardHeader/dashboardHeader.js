var DashboardModule;
(function (DashboardModule) {
    "use strict";
    var DashboardHeader = (function () {
        function DashboardHeader(session) {
            var _this = this;
            this.session = session;
            this.templateUrl = "app/dashboard/components/dashboardHeader/dashboardHeader.html";
            this.restrict = "E";
            this.scope = {};
            this.replace = true;
            this.link = function (scope, element) {
                scope.session = _this.session;
            };
        }
        DashboardHeader.componentId = "dashboardHeader";
        DashboardHeader.$inject = ["session"];
        return DashboardHeader;
    })();
    DashboardModule.DashboardHeader = DashboardHeader;
    angular.module("dashboard").directive(DashboardHeader.componentId, function (session) { return new DashboardHeader(session); });
})(DashboardModule || (DashboardModule = {}));
//# sourceMappingURL=dashboardHeader.js.map