angular.module("dashboard").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/dashboard/components/dashboardVersion/dashboardVersion.html",
		"<div>"+
		"    "+
		"    <h1>Version</h1>"+
		"    "+
		"    <div>"+
		"        OWIN Windows Service Version: {{ configuration.simWindowServiceVersion }}"+
		"    </div>"+
		"    "+
		"    <div>"+
		"        Execution Host Version: {{ configuration.simExecutionHostVersion }}"+
		"    </div>"+
		""+
		"</div>"
	);
}]);
