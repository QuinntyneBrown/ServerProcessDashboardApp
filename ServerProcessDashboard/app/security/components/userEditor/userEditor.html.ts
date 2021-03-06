angular.module("security").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/security/components/userEditor/userEditor.html",
		"<div>"+
		"    <hgroup>"+
		"        <h1 data-ng-show=\"vm.entity.id\">Edit User: {{ vm.entity.firstname + ' ' + vm.entity.lastname }}</h1>"+
		"        <h1 data-ng-hide=\"vm.entity.id\">Create User</h1>"+
		"    </hgroup>"+
		""+
		"    <a href=\"#/user/changepassword/{{vm.entity.id}}\" data-ng-hide=\"!vm.entity.id\">Change Password</a>"+
		"    <form name=\"userEditor\" role=\"form\" data-ng-submit=\"tryToSave(userEditor)\" novalidate>"+
		"        "+
		"        <multi-entity-select parent-entities=\"vm.entity.roles\" entity-service=\"uow.roles\" entity-name-plural=\"Roles\"></multi-entity-select>"+
		""+
		"        <multi-entity-select parent-entities=\"vm.entity.groups\" entity-service=\"uow.groups\" entity-name-plural=\"Groups\"></multi-entity-select>"+
		""+
		"        "+
		"        <div class=\"form-group\">"+
		"            <label>"+
		"                Username"+
		"            </label>"+
		"            <input data-ng-model=\"vm.entity.username\" type=\"text\" class=\"form-control\" />"+
		"        </div>"+
		""+
		"        <div class=\"form-group\">"+
		"            <label>"+
		"                First Name"+
		"            </label>"+
		"            <input data-ng-model=\"vm.entity.firstname\" type=\"text\" class=\"form-control\" />"+
		"        </div>"+
		""+
		"        <div class=\"form-group\">"+
		"            <label>"+
		"                Last Name"+
		"            </label>"+
		"            <input data-ng-model=\"vm.entity.lastname\" type=\"text\" class=\"form-control\" />"+
		"        </div>"+
		""+
		"        <div class=\"form-group\">"+
		"            <label>"+
		"                Email"+
		"            </label>"+
		"            <input data-ng-model=\"vm.entity.emailAddress\" type=\"text\" class=\"form-control\" />"+
		"        </div>"+
		""+
		"        <div class=\"form-group\" data-ng-hide=\"vm.entity.id\">"+
		"            <label>"+
		"                Password"+
		"            </label>"+
		"            <input data-ng-model=\"vm.entity.password\" type=\"password\" class=\"form-control\" />"+
		"        </div>"+
		""+
		"        <div class=\"form-group\" data-ng-hide=\"vm.entity.id\">"+
		"            <label>"+
		"                Confirm Password"+
		"            </label>"+
		"            <input data-ng-model=\"vm.entity.confirmpassword\" type=\"password\" class=\"form-control\" />"+
		"        </div>"+
		"        <p>"+
		"            <input type=\"submit\" value=\"save\" class=\"btn btn-lrg\" />"+
		"        </p>"+
		"    </form>"+
		"</div>"
	);
}]);
