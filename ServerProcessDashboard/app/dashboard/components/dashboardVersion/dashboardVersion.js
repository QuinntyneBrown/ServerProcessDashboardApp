var DashboardModule;
(function (DashboardModule) {
    var DashboardVersion = (function () {
        function DashboardVersion($rootScope) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.restrict = "E";
            this.scope = {};
            this.replace = true;
            this.templateUrl = "/app/dashboard/components/dashboardVersion/dashboardVersion.html";
            this.link = function (scope, element, attributes) {
                scope.configuration = _this.$rootScope.configuration;
            };
            this.$inject = ["$rootScope"];
        }
        DashboardVersion.componentId = "dashboardVersion";
        return DashboardVersion;
    })();
    angular.module("dashboard").directive(DashboardVersion.componentId, function ($rootScope) { return new DashboardVersion($rootScope); });
})(DashboardModule || (DashboardModule = {}));
//# sourceMappingURL=dashboardVersion.js.map