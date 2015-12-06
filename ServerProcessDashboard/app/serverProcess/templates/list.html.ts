angular.module("serverProcess").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/serverProcess/templates/list.html",
		"<div class=\"two-columns\">"+
		""+
		"    <server-process-menu></server-process-menu>"+
		""+
		"    <div class=\"sub-view\">"+
		"        <server-process-list></server-process-list>"+
		"    </div>"+
		""+
		"</div>"
	);
}]);
