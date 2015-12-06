angular.module("serverProcess").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/serverProcess/templates/add.html",
		"<div class=\"two-columns\">"+
		""+
		"    <server-process-menu></server-process-menu>"+
		""+
		"    <div class=\"sub-view\">"+
		"        <server-process-editor></server-process-editor>"+
		"    </div>"+
		""+
		"</div>"
	);
}]);
