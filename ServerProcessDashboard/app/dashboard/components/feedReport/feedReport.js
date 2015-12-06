var DashboardModule;
(function (DashboardModule) {
    var FeedReport = (function () {
        function FeedReport() {
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "/app/dashboard/components/feedReport/feedReport.html";
            this.link = function (scope, element, attributes) {
                scope.runningJobs = [];
                scope.$on("runStart", function (event, object) {
                    scope.runningJobs.push({ name: "New Job" });
                    scope.$digest();
                });
            };
        }
        FeedReport.componentId = "feedReport";
        return FeedReport;
    })();
    angular.module("dashboard").directive(FeedReport.componentId, function () { return new FeedReport(); });
})(DashboardModule || (DashboardModule = {}));
//# sourceMappingURL=feedReport.js.map