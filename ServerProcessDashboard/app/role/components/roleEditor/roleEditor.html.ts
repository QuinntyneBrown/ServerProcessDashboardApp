angular.module("role").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/role/components/roleEditor/roleEditor.html",
		"<div>"+
		"    <hgroup>"+
		"        <h1 data-ng-show=\"vm.entity.id > 0\">Edit Role</h1>"+
		"        <h1 data-ng-hide=\"vm.entity.id\">Create Role</h1>"+
		"    </hgroup>"+
		""+
		"    <form name=\"roleEditor\" role=\"form\" data-ng-submit=\"tryToSave(roleEditor)\" novalidate>"+
		""+
		"        <div class=\"form-group\">"+
		"            <label>"+
		"                Name"+
		"            </label>"+
		"            <input data-ng-model=\"vm.entity.name\" type=\"text\" class=\"form-control\" />"+
		"        </div>"+
		""+
		"        <p>"+
		"            <input type=\"submit\" value=\"save\" class=\"btn btn-lrg\" />"+
		"        </p>"+
		"    </form>"+
		"</div>"
	);
}]);
