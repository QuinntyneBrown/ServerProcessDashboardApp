angular.module("dashboard").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/dashboard/templates/dashboard.html",
		"<div id=\"dashboard\">"+
		"    <feed-report></feed-report>"+
		"</div>"
	);
}]);
