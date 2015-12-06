angular.module("dashboard").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/dashboard/templates/splash.html",
		"<div id=\"splash\">"+
		"    <h1>Dashboard</h1>"+
		"</div>"
	);
}]);
