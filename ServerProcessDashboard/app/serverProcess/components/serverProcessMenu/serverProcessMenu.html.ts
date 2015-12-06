angular.module("serverProcess").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/serverProcess/components/serverProcessMenu/serverProcessMenu.html",
		"<div id=\"server-process-menu\" class=\"sub-menu\">"+
		""+
		""+
		"    <entity-admin-menu entity-name-pluralized=\"Server Processes\" entity-name=\"Server Process\"></entity-admin-menu>"+
		""+
		""+
		"</div>"
	);
}]);
