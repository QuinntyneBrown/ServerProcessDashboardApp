module DashboardModule {
    
    class DashboardVersion {
        
        public static componentId:string="dashboardVersion";
        
        public restrict: string = "E";

        public scope = {};

        public replace:boolean = true;

        public templateUrl: string = "/app/dashboard/components/dashboardVersion/dashboardVersion.html";

        public link= (scope, element, attributes) => {

            scope.configuration = this.$rootScope.configuration;
        }

        public $inject=["$rootScope"];

        constructor(private $rootScope) {
            

        }
    }


    angular.module("dashboard").directive(DashboardVersion.componentId,($rootScope) => new DashboardVersion($rootScope));

}