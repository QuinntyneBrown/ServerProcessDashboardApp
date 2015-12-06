module DashboardModule {
    
    class FeedReport {
        
        public static componentId = "feedReport";

        public restrict: string = "E";
        
        public replace: boolean = true;

        public templateUrl: string = "/app/dashboard/components/feedReport/feedReport.html";

        public link = (scope, element, attributes) => {

            scope.runningJobs = [];

            scope.$on("runStart", (event,object) => {
                scope.runningJobs.push({ name: "New Job" });
                scope.$digest();
            });
        }
    }

    angular.module("dashboard").directive(FeedReport.componentId,() => new FeedReport());

}