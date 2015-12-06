angular.module("dashboard").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/dashboard/templates/version.html",
		"<div id=\"version\">"+
		"    <dashboard-version></dashboard-version>"+
		"</div>"
	);
}]);
