angular.module("dashboard").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/dashboard/components/dashboardHeader/dashboardHeader.html",
		"<div id=\"dashboard-header\">"+
		"    <ul data-ng-if=\"session.isLoggedIn()\">"+
		"        <li><a href=\"#/\">Home</a></li>"+
		"        <li><a href=\"#/dashboard\">Dashboard</a></li>"+
		"        <li><a href=\"#/security\">Security</a></li>"+
		"        <li><a href=\"#/version\">Version</a></li>"+
		"        <li><a href=\"#/serverProcess\">Sever Processes</a></li>"+
		"        <li><a href=\"#/signin\">Logout</a></li>"+
		"        <li><a>Hi {{ session.getCurrentUser().username }}!</a></li>"+
		"    </ul>"+
		"    "+
		"    <ul data-ng-if=\"!session.isLoggedIn()\">"+
		"        <li><a href=\"#/\">Home</a></li>"+
		"        <li><a href=\"#/signin\">Login</a></li>"+
		"    </ul>"+
		""+
		"</div>"
	);
}]);
