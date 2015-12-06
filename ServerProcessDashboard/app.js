var CommonModule;
(function (CommonModule) {
    var app = angular.module("common", ["configuration", "core", "session"]);
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=module.js.map
angular.module("common").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/common/components/entityAdminMenu/entityAdminMenu.html", "<div class=\"entity-admin-menu\">" + "    " + "    <h1>" + "        {{ entityNamePluralized }}" + "    </h1>" + "" + "    <ul>" + "        <li><a ng-href=\"#/{{ entityNameLowerCase }}/add\">Add {{ entityName }}</a></li>" + "        <li><a ng-href=\"#/{{ entityNameLowerCase }}/list\">{{ entityNamePluralized }}</a></li>" + "    </ul>" + "" + "</div>");
}]);
//# sourceMappingURL=entityAdminMenu.html.js.map
var CommonModule;
(function (CommonModule) {
    "use strict";
    var EntityAdminMenu = (function () {
        function EntityAdminMenu() {
            this.$inject = [];
            this.restrict = "E";
            this.replace = true;
            this.scope = {};
            this.templateUrl = "/app/common/components/entityAdminMenu/entityAdminMenu.html";
            this.link = function (scope, element, attributes) {
                scope.entityNameLowerCase = attributes.entityName.toLowerCase();
                scope.entityName = attributes.entityName;
                scope.entityNamePluralized = attributes.entityNamePluralized;
            };
        }
        EntityAdminMenu.componentId = "entityAdminMenu";
        return EntityAdminMenu;
    })();
    angular.module("common").directive(EntityAdminMenu.componentId, function () { return new EntityAdminMenu(); });
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=entityAdminMenu.js.map
var CommonModule;
(function (CommonModule) {
    var componentId = "identityMenu";
    angular.module("common").directive(componentId, ["session", component]);
    function component(session) {
        return {
            templateUrl: "/app/common/components/identityMenu/identityMenu.html",
            restrict: "EA",
            replace: true,
            scope: {},
            link: function (scope) {
                scope.session = session;
            }
        };
    }
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=identityMenu.js.map
angular.module("common").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/common/components/multiEntitySelect/multiEntitySelect.html", "<div class=\"form-group\">" + "    <label>" + "        {{ entityNamePlural }}" + "    </label>" + "    <select ng-model=\"selectedId\"" + "            data-ng-options=\"e.id as e.name for e in vm.entities\"></select>" + "" + "    <div>" + "        <ul>" + "            <li data-ng-repeat=\"entity in parentEntities\">" + "                <a>{{ entity.name }}</a>" + "            </li>" + "        </ul>" + "    </div>" + "</div>");
}]);
//# sourceMappingURL=multiEntitySelect.html.js.map
var CommonModule;
(function (CommonModule) {
    var MultiEntitySelect = (function () {
        function MultiEntitySelect() {
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "/app/common/components/multiEntitySelect/multiEntitySelect.html";
            this.scope = {
                parentEntities: "=",
                entityService: "="
            };
            this.link = function (scope, element, attributes) {
                scope.parentEntities = scope.parentEntities || [];
                scope.entityNamePlural = attributes.entityNamePlural;
                scope.$watch("selectedId", function () {
                    scope.processSelectedIdChange();
                    scope.selectedId = null;
                });
                scope.processSelectedIdChange = function () {
                    if (scope.selectedId) {
                        for (var i = 0; i < scope.parentEntities.length; i++) {
                            if (scope.parentEntities[i].id == scope.selectedId) {
                                scope.parentEntities.splice(i, 1);
                                return;
                            }
                        }
                        for (var i = 0; i < scope.vm.entities.length; i++) {
                            if (scope.vm.entities[i].id == scope.selectedId) {
                                scope.parentEntities.push(scope.vm.entities[i]);
                            }
                        }
                    }
                };
                return scope.entityService.getAll().then(function (results) {
                    scope.vm = {
                        entities: results
                    };
                });
            };
        }
        MultiEntitySelect.componentId = "multiEntitySelect";
        return MultiEntitySelect;
    })();
    angular.module("common").directive(MultiEntitySelect.componentId, function () { return new MultiEntitySelect(); });
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=multiEntitySelect.js.map
var CommonModule;
(function (CommonModule) {
    "use strict";
    var workSpinner = function ($rootScope, requestCounter) {
        return {
            restrict: "E",
            scope: {},
            //template: "<div ng-show='requestCount' class='work-spinner'><img src='images/common/ajax-loader.gif' /></div>",
            template: "<div ng-show='requestCount' class='work-spinner'><i class='fa fa-spinner fa-spin fade'></i></div>",
            link: function (scope) {
                scope.$watch(function () {
                    return requestCounter.getRequestCount();
                }, function (requestCount) {
                    scope.requestCount = requestCount;
                });
            }
        };
    };
    var componentId = "workSpinner";
    workSpinner.$inject = ["$rootScope", "requestCounter"];
    angular.module("common").directive(componentId, workSpinner);
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=workSpinner.js.map
var ConfigurationModule;
(function (ConfigurationModule) {
    var app = angular.module("configuration", []);
})(ConfigurationModule || (ConfigurationModule = {}));
//# sourceMappingURL=module.js.map
var ConfigurationModule;
(function (ConfigurationModule) {
    var ConfigurationService = (function () {
        function ConfigurationService($http, $q, $rootScope) {
            this.$http = $http;
            this.$q = $q;
            this.$rootScope = $rootScope;
            this.baseUri = "api/configuration/";
        }
        ConfigurationService.prototype.get = function () {
            var _this = this;
            var deferred = this.$q.defer();
            this.$http({ method: "GET", url: this.baseUri + "get" }).then(function (results) {
                deferred.resolve(_this.$rootScope.configuration = results.data);
            }).catch(function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };
        ConfigurationService.serviceId = "configurationService";
        return ConfigurationService;
    })();
    ConfigurationModule.ConfigurationService = ConfigurationService;
    angular.module("configuration").service(ConfigurationService.serviceId, ["$http", "$q", "$rootScope", function ($http, $q, $rootScope) { return new ConfigurationService($http, $q, $rootScope); }]);
})(ConfigurationModule || (ConfigurationModule = {}));
//# sourceMappingURL=configurationService.js.map
//# sourceMappingURL=IConfigurationService.js.map
var CoreModule;
(function (CoreModule) {
    var app = angular.module("core", ["configuration", "session"]).config(config);
    config.$inject = ["$httpProvider"];
    function config($httpProvider) {
        $httpProvider.interceptors.push("authorizationInterceptor");
        $httpProvider.interceptors.push("requestCounter");
    }
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=module.js.map
var CoreModule;
(function (CoreModule) {
    "use strict";
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=IApiEndpointConfig.js.map
var CoreModule;
(function (CoreModule) {
    "use strict";
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=IApiEndpointProvider.js.map
//# sourceMappingURL=ICoreRootScope.js.map
//# sourceMappingURL=IDataService.js.map
//# sourceMappingURL=IRouteProvider.js.map
//# sourceMappingURL=IRouteResolver.js.map
var CoreModule;
(function (CoreModule) {
    "use strict";
    function authorizationInterceptor($q, $rootScope, token) {
        var self = this;
        self.request = function (config) {
            if (token.get()) {
                config.headers["Authorization"] = "basic " + token.get();
            }
            return config;
        };
        return self;
    }
    ;
    var interceptorId = "authorizationInterceptor";
    authorizationInterceptor.$inject = ["$q", "$rootScope", "token"];
    angular.module("core").factory(interceptorId, authorizationInterceptor);
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=authorizationInterceptor.js.map
var CoreModule;
(function (CoreModule) {
    "use strict";
    function requestCounter($q) {
        var requests = 0;
        var request = function (config) {
            requests += 1;
            return $q.when(config);
        };
        var requestError = function (error) {
            requests -= 1;
            return $q.reject(error);
        };
        var response = function (response) {
            requests -= 1;
            return $q.when(response);
        };
        var responseError = function (error) {
            requests -= 1;
            return $q.reject(error);
        };
        var getRequestCount = function () {
            return requests;
        };
        return {
            request: request,
            response: response,
            requestError: requestError,
            responseError: responseError,
            getRequestCount: getRequestCount
        };
    }
    var interceptorId = "requestCounter";
    requestCounter.$inject = ["$q"];
    angular.module("core").factory(interceptorId, requestCounter);
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=requestCounter.js.map
var CoreModule;
(function (CoreModule) {
    angular.module("core").value("$", $);
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=jQuery.js.map
var CoreModule;
(function (CoreModule) {
    var ApiEndpointProvider = (function () {
        function ApiEndpointProvider() {
        }
        ApiEndpointProvider.prototype.configure = function (baseUrl) {
            this.config = {
                baseUrl: baseUrl
            };
        };
        ApiEndpointProvider.prototype.$get = function () {
            return this.config;
        };
        return ApiEndpointProvider;
    })();
    angular.module("core").provider("apiEndpointProvider", ApiEndpointProvider);
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=ApiEndpointProvider.js.map
(function () {
    "use strict";

    var factoryId = "storage";

    angular.module("core").factory(factoryId, [factory]);

    function factory() {

        var STORAGE_ID = 'ngBlogStorage';

        return {
            get: function () {
                return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
            },

            getByName: function (params) {
                var items = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');

                for (var i = 0; i < items.length; i++) {
                    if (params.name === items[i].name) {
                        return items[i];
                    };
                };

                return null;
            },

            put: function (params) {

                var items = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');

                for (var i = 0; i < items.length; i++) {
                    if (params.name === items[i].name) {
                        items[i].value = params.value;
                        localStorage.setItem(STORAGE_ID, JSON.stringify(items));
                        return;
                    };
                };

                items.push(params);
                localStorage.setItem(STORAGE_ID, JSON.stringify(items));

            }
        };

    };

})();

(function () {
    "use strict";
    var serviceId = "configuration";
    angular.module("core").service(serviceId, ["$rootScope", "storage", service]);
    function service($rootScope, storage) {
        var self = this;
        var data = null;
        var name = "configuration";
        self.get = function get() {
            if (data) {
                return data;
            }
            ;
            try {
                data = storage.getByName({ name: name }).value;
            }
            catch (error) {
            }
            return data;
        };
        self.set = function set(params) {
            data = params.data;
            storage.put({ name: name, value: params.data });
        };
        $rootScope.$on("$routeChangeStart", function routeChange(event, newUrl, oldUrl) {
            if (newUrl.originalPath == "/signin") {
                data = null;
                self.set({ data: null });
            }
        });
        return self;
    }
    ;
})();
//# sourceMappingURL=configuration.js.map
var CoreModule;
(function (CoreModule) {
    "use strict";
    function getStringFromUrl(url) {
        var request = new XMLHttpRequest();
        var response = null;
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    response = request.responseText;
                }
            }
        };
        request.open("GET", url, false);
        request.send(null);
        return response;
    }
    angular.module("core").value("getStringFromUrl", getStringFromUrl);
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=getStringFromUrl.js.map
var DashboardModule;
(function (DashboardModule) {
    angular.module("dashboard", [
        "configuration",
        "common",
        "core",
        "session",
        "security",
        "serverProcess",
        "ngRoute"
    ]).config(config).run(run);
    config.$inject = ["$compileProvider", "$httpProvider", "$locationProvider", "$routeProvider", "$rootScopeProvider"];
    function config($compileProvider, $httpProvider, $locationProvider, $routeProvider, $rootScopeProvider) {
        $rootScopeProvider.digestTtl(8);
        $httpProvider.interceptors.push("authorizationInterceptor");
        $httpProvider.useApplyAsync(true);
        $locationProvider.html5Mode(false);
        $compileProvider.debugInfoEnabled(false);
        $routeProvider.when("/", {
            templateUrl: "app/dashboard/templates/splash.html",
            resolve: {
                routeData: [
                    "serverProcessDashboardRouteResolver",
                    function (serverProcessDashboardRouteResolver) {
                        return serverProcessDashboardRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: false,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/signin", {
            templateUrl: "app/dashboard/templates/signin.html",
            resolve: {
                routeData: [
                    "serverProcessDashboardRouteResolver",
                    function (serverProcessDashboardRouteResolver) {
                        return serverProcessDashboardRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: false,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/dashboard", {
            templateUrl: "app/dashboard/templates/dashboard.html",
            resolve: {
                routeData: [
                    "serverProcessDashboardRouteResolver",
                    function (serverProcessDashboardRouteResolver) {
                        return serverProcessDashboardRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/version", {
            templateUrl: "app/dashboard/templates/version.html",
            resolve: {
                routeData: [
                    "serverProcessDashboardRouteResolver",
                    function (serverProcessDashboardRouteResolver) {
                        return serverProcessDashboardRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.otherwise("/");
    }
    run.$inject = ["$http", "$location", "$rootScope", "$route", "$templateCache", "currentUser", "serverProcessDashboardSignalRService", "token"];
    function run($http, $location, $rootScope, $route, $templateCache, currentUser, serverProcessDashboardSignalRService, token) {
        $rootScope.$on("$routeChangeStart", function (event, newUrl) {
            $rootScope.inViewTransition = true;
            if (newUrl.originalPath == "/signin") {
                token.set({ data: null });
            }
            ;
            if (newUrl.$$route && newUrl.$$route.authorizationRequired) {
                if (token.get() == null) {
                    $rootScope.$evalAsync(function () {
                        $location.path("/signin");
                    });
                }
                ;
            }
            ;
        });
        $rootScope.$on("$viewContentLoaded", function () {
            $rootScope.inViewTransition = false;
            if ($route.current.$$route.authorizationRequired && (currentUser.get() == null || currentUser.get() == "")) {
                $location.path("/signin");
            }
            ;
        });
    }
})(DashboardModule || (DashboardModule = {}));
//# sourceMappingURL=module.js.map
angular.module("dashboard").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/dashboard/components/dashboardHeader/dashboardHeader.html", "<div id=\"dashboard-header\">" + "    <ul data-ng-if=\"session.isLoggedIn()\">" + "        <li><a href=\"#/\">Home</a></li>" + "        <li><a href=\"#/dashboard\">Dashboard</a></li>" + "        <li><a href=\"#/security\">Security</a></li>" + "        <li><a href=\"#/version\">Version</a></li>" + "        <li><a href=\"#/serverProcess\">Sever Processes</a></li>" + "        <li><a href=\"#/signin\">Logout</a></li>" + "        <li><a>Hi {{ session.getCurrentUser().username }}!</a></li>" + "    </ul>" + "    " + "    <ul data-ng-if=\"!session.isLoggedIn()\">" + "        <li><a href=\"#/\">Home</a></li>" + "        <li><a href=\"#/signin\">Login</a></li>" + "    </ul>" + "" + "</div>");
}]);
//# sourceMappingURL=dashboardHeader.html.js.map
var DashboardModule;
(function (DashboardModule) {
    "use strict";
    var DashboardHeader = (function () {
        function DashboardHeader(session) {
            var _this = this;
            this.session = session;
            this.templateUrl = "app/dashboard/components/dashboardHeader/dashboardHeader.html";
            this.restrict = "E";
            this.scope = {};
            this.replace = true;
            this.link = function (scope, element) {
                scope.session = _this.session;
            };
        }
        DashboardHeader.componentId = "dashboardHeader";
        DashboardHeader.$inject = ["session"];
        return DashboardHeader;
    })();
    DashboardModule.DashboardHeader = DashboardHeader;
    angular.module("dashboard").directive(DashboardHeader.componentId, function (session) { return new DashboardHeader(session); });
})(DashboardModule || (DashboardModule = {}));
//# sourceMappingURL=dashboardHeader.js.map
angular.module("dashboard").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/dashboard/components/dashboardTile/dashboardTile.html", "<div id=\"\">" + "    " + "</div>");
}]);
//# sourceMappingURL=dashboardTile.html.js.map
//# sourceMappingURL=dashboardTile.js.map
//# sourceMappingURL=dashboardTiles.html.js.map
//# sourceMappingURL=dashboardTiles.js.map
angular.module("dashboard").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/dashboard/components/dashboardVersion/dashboardVersion.html", "<div>" + "    " + "    <h1>Version</h1>" + "    " + "    <div>" + "        OWIN Windows Service Version: {{ configuration.simWindowServiceVersion }}" + "    </div>" + "    " + "    <div>" + "        Execution Host Version: {{ configuration.simExecutionHostVersion }}" + "    </div>" + "" + "</div>");
}]);
//# sourceMappingURL=dashboardVersion.html.js.map
var DashboardModule;
(function (DashboardModule) {
    var DashboardVersion = (function () {
        function DashboardVersion($rootScope) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.restrict = "E";
            this.scope = {};
            this.replace = true;
            this.templateUrl = "/app/dashboard/components/dashboardVersion/dashboardVersion.html";
            this.link = function (scope, element, attributes) {
                scope.configuration = _this.$rootScope.configuration;
            };
            this.$inject = ["$rootScope"];
        }
        DashboardVersion.componentId = "dashboardVersion";
        return DashboardVersion;
    })();
    angular.module("dashboard").directive(DashboardVersion.componentId, function ($rootScope) { return new DashboardVersion($rootScope); });
})(DashboardModule || (DashboardModule = {}));
//# sourceMappingURL=dashboardVersion.js.map
angular.module("dashboard").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/dashboard/components/feedReport/feedReport.html", "<div id=\"feed-report\">" + "    <h1>Feed Report</h1>" + "    " + "    <div data-ng-repeat=\"runningJob in runningJobs\">" + "        <a> {{ runningJob.name }}</a>" + "    </div>" + "</div>");
}]);
//# sourceMappingURL=feedReport.html.js.map
var DashboardModule;
(function (DashboardModule) {
    var FeedReport = (function () {
        function FeedReport() {
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "/app/dashboard/components/feedReport/feedReport.html";
            this.link = function (scope, element, attributes) {
                scope.runningJobs = [];
                scope.$on("runStart", function (event, object) {
                    scope.runningJobs.push({ name: "New Job" });
                    scope.$digest();
                });
            };
        }
        FeedReport.componentId = "feedReport";
        return FeedReport;
    })();
    angular.module("dashboard").directive(FeedReport.componentId, function () { return new FeedReport(); });
})(DashboardModule || (DashboardModule = {}));
//# sourceMappingURL=feedReport.js.map
var DashboardModule;
(function (DashboardModule) {
    "use strict";
    var serviceId = "serverProcessDashboardRouteResolver";
    angular.module("dashboard").service(serviceId, ["$location", "$q", "$route", "configurationService", "securityUow", service]);
    function service($location, $q, $route, configurationService, securityUow) {
        var self = this;
        self.resolveRoute = function () {
            return configurationService.get().then(function () {
                return securityUow.identity.getCurrentUser().then(function () {
                    return true;
                });
            });
        };
        return self;
    }
    ;
})(DashboardModule || (DashboardModule = {}));
//# sourceMappingURL=simDashboardRouteResolver.js.map
var DashboardModule;
(function (DashboardModule) {
    function serverProcessDashboardSignalRService($rootScope) {
    }
    serverProcessDashboardSignalRService.$inject = ["$rootScope"];
    var ServerProcessDashboardSignalRService = (function () {
        function ServerProcessDashboardSignalRService($rootScope, $) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.$ = $;
            this.$inject = ["$rootScope", "$"];
            this.connection = null;
            this.hub = null;
            this.run = function (name, step) {
                _this.hub.invoke("run", name, step);
            };
            this.runStart = function () {
                _this.$rootScope.$broadcast("runStart");
            };
            this.connection = this.$.hubConnection();
            this.hub = this.connection.createHubProxy("serverProcessDashboardHub");
            this.hub.on("serverProcessRunStart", function (update) {
                _this.runStart();
            });
            this.connection.start(function () {
            });
            this.$rootScope.$on("serverProcessRunRequest", function (event, object) {
                _this.run(object.entity.name, object.entity.step);
            });
        }
        ServerProcessDashboardSignalRService.serviceId = "serverProcessDashboardSignalRService";
        return ServerProcessDashboardSignalRService;
    })();
    angular.module("dashboard").service(ServerProcessDashboardSignalRService.serviceId, function ($rootScope, $) { return new ServerProcessDashboardSignalRService($rootScope, $); });
})(DashboardModule || (DashboardModule = {}));
//# sourceMappingURL=simDashboardSignalRService.js.map
var GroupModule;
(function (GroupModule) {
    angular.module("group", ["configuration", "common", "core", "session", "ngRoute"]).config(config);
    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider.when("/group/add", {
            templateUrl: ""
        });
        $routeProvider.when("/group/list", {
            templateUrl: ""
        });
    }
})(GroupModule || (GroupModule = {}));
//# sourceMappingURL=module.js.map
angular.module("group").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/group/components/groupEditor/groupEditor.html", "<div>" + "    <hgroup>" + "        <h1 data-ng-show=\"vm.entity.id > 0\">Edit Group</h1>" + "        <h1 data-ng-hide=\"vm.entity.id\">Create Group</h1>" + "    </hgroup>" + "" + "    <form name=\"groupEditor\" role=\"form\" data-ng-submit=\"tryToSave(groupEditor)\" novalidate>" + "" + "        <div class=\"form-group\">" + "            <label>" + "                Name" + "            </label>" + "            <input data-ng-model=\"vm.entity.name\" type=\"text\" class=\"form-control\" />" + "        </div>" + "" + "        <p>" + "            <input type=\"submit\" value=\"save\" class=\"btn btn-lrg\" />" + "        </p>" + "    </form>" + "</div>");
}]);
//# sourceMappingURL=groupEditor.html.js.map
var GroupModule;
(function (GroupModule) {
    var GroupEditor = (function () {
        function GroupEditor($location, groupService) {
            var _this = this;
            this.$location = $location;
            this.groupService = groupService;
            this.replace = true;
            this.restrict = "E";
            this.templateUrl = "/app/group/components/groupEditor/groupEditor.html";
            this.scope = {
                entity: "="
            };
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.entity = scope.entity;
                scope.tryToSave = function (form) {
                    if (scope.vm.entity.id) {
                        return _this.groupService.update({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/group/list");
                        });
                    }
                    else {
                        return _this.groupService.add({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/group/list");
                        });
                    }
                };
            };
            this.$inject = ["$location", "groupService"];
        }
        GroupEditor.componentId = "groupEditor";
        return GroupEditor;
    })();
    angular.module("group").directive(GroupEditor.componentId, function ($location, groupService) { return new GroupEditor($location, groupService); });
})(GroupModule || (GroupModule = {}));
//# sourceMappingURL=groupEditor.js.map
angular.module("group").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/group/components/groupList/groupList.html", "<div>" + "" + "    <hgroup>" + "        <h1>Groups</h1>" + "    </hgroup>" + "" + "    <a href=\"#/group/add\">Add</a>" + "" + "    <table>" + "        <thead>" + "            <tr>" + "                <th>Id</th>" + "                <th>Name</th>" + "                <th>Actions</th>" + "            </tr>" + "        </thead>" + "        <tbody>" + "            <tr data-ng-repeat=\"entity in vm.entities\">" + "                <td><a>{{ entity.id }}</a></td>" + "                <td><a>{{ entity.name }}</a></td>" + "                <td><a href=\"#/group/edit/{{ entity.id }}\">edit</a>&nbsp;|&nbsp;<a data-ng-click=\"vm.remove(entity)\">delete</a></td>" + "            </tr>" + "        </tbody>" + "    </table>" + "</div>");
}]);
//# sourceMappingURL=groupList.html.js.map
var GroupModule;
(function (GroupModule) {
    var GroupList = (function () {
        function GroupList(groupService) {
            var _this = this;
            this.groupService = groupService;
            this.replace = true;
            this.restrict = "E";
            this.templateUrl = "/app/group/components/groupList/groupList.html";
            this.scope = {};
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.remove = function (entity) {
                    return _this.groupService.remove({ id: entity.id }).then(function () {
                        for (var i = 0; i < scope.vm.entities.length; i++) {
                            if (scope.vm.entities[i].id == entity.id) {
                                scope.vm.entities.splice(i, 1);
                            }
                        }
                    }).catch(function (error) {
                    });
                };
                return _this.groupService.getAll().then(function (results) {
                    return scope.vm.entities = results;
                });
            };
            this.$inject = ["groupService"];
        }
        GroupList.componentId = "groupList";
        return GroupList;
    })();
    angular.module("group").directive(GroupList.componentId, function (groupService) { return new GroupList(groupService); });
})(GroupModule || (GroupModule = {}));
//# sourceMappingURL=groupList.js.map
//# sourceMappingURL=IGroupService.js.map
var GroupModule;
(function (GroupModule) {
    "use strict";
    var GroupService = (function () {
        function GroupService($http, $q, $rootScope, configurationService) {
            var _this = this;
            this.$http = $http;
            this.$q = $q;
            this.$rootScope = $rootScope;
            this.configurationService = configurationService;
            this.dataStore = {
                getAll: null,
                getById: null,
                pages: []
            };
            this.clearDataStore = function () {
                _this.dataStore = {
                    getAll: null,
                    getById: null,
                    pages: []
                };
            };
            this.getBaseUri = function () {
                if (_this.$rootScope.configuration && _this.$rootScope.configuration.apiVersion) {
                    return "api/" + _this.$rootScope.configuration.apiVersion + "/group/";
                }
                else {
                    return "api/group/";
                }
            };
            this.add = function (options) {
                var deferred = _this.$q.defer();
                _this.$http({ method: "POST", url: _this.getBaseUri() + "add", data: options.entity }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.remove = function (options) {
                var deferred = _this.$q.defer();
                _this.$http({ method: "DELETE", url: _this.getBaseUri() + "remove?id=" + options.id }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.getAll = function () {
                var deferred = _this.$q.defer();
                if (_this.dataStore.getAll) {
                    deferred.resolve(_this.dataStore.getAll);
                    return deferred.promise;
                }
                _this.$http({ method: "GET", url: _this.getBaseUri() + "getAll" }).then(function (results) {
                    _this.dataStore.getAll = results.data;
                    deferred.resolve(results.data);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.getById = function (id) {
                var deferred = _this.$q.defer();
                if (_this.dataStore.getById && _this.dataStore.getById.id == id) {
                    deferred.resolve(_this.dataStore.getById);
                    return deferred.promise;
                }
                _this.$http({ method: "GET", url: _this.getBaseUri() + "getbyid?id=" + id }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.getPage = function (offset, setSize) {
                var deferred = _this.$q.defer();
                if (_this.dataStore.getAll) {
                    deferred.resolve(_this.dataStore.getAll);
                    return deferred.promise;
                }
                ;
                _this.$http({ method: "GET", url: _this.getBaseUri() + "getAll" }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.$rootScope.$on("$locationChangeStart", function () {
                _this.clearDataStore();
            });
        }
        GroupService.serviceId = "groupService";
        GroupService.$inject = ["$http", "$q", "$rootScope", "configurationService"];
        return GroupService;
    })();
    GroupModule.GroupService = GroupService;
    angular.module("group").service(GroupService.serviceId, function ($http, $q, $rootScope, configurationService) { return new GroupService($http, $q, $rootScope, configurationService); });
})(GroupModule || (GroupModule = {}));
//# sourceMappingURL=groupService.js.map
var RoleModule;
(function (RoleModule) {
    angular.module("role", ["configuration", "common", "core", "session", "ngRoute"]).config(config);
    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider.when("/role/add", {
            templateUrl: ""
        });
        $routeProvider.when("/role/list", {
            templateUrl: ""
        });
    }
})(RoleModule || (RoleModule = {}));
//# sourceMappingURL=module.js.map
angular.module("role").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/role/components/roleEditor/roleEditor.html", "<div>" + "    <hgroup>" + "        <h1 data-ng-show=\"vm.entity.id > 0\">Edit Role</h1>" + "        <h1 data-ng-hide=\"vm.entity.id\">Create Role</h1>" + "    </hgroup>" + "" + "    <form name=\"roleEditor\" role=\"form\" data-ng-submit=\"tryToSave(roleEditor)\" novalidate>" + "" + "        <div class=\"form-group\">" + "            <label>" + "                Name" + "            </label>" + "            <input data-ng-model=\"vm.entity.name\" type=\"text\" class=\"form-control\" />" + "        </div>" + "" + "        <p>" + "            <input type=\"submit\" value=\"save\" class=\"btn btn-lrg\" />" + "        </p>" + "    </form>" + "</div>");
}]);
//# sourceMappingURL=roleEditor.html.js.map
var RoleModule;
(function (RoleModule) {
    var RoleEditor = (function () {
        function RoleEditor($location, roleService) {
            var _this = this;
            this.$location = $location;
            this.roleService = roleService;
            this.replace = true;
            this.restrict = "E";
            this.templateUrl = "/app/role/components/roleEditor/roleEditor.html";
            this.scope = {
                entity: "="
            };
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.entity = scope.entity;
                scope.tryToSave = function (form) {
                    if (scope.vm.entity.id) {
                        return _this.roleService.update({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/role/list");
                        });
                    }
                    else {
                        return _this.roleService.add({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/role/list");
                        });
                    }
                };
            };
            this.$inject = ["$location", "roleService"];
        }
        RoleEditor.componentId = "roleEditor";
        return RoleEditor;
    })();
    angular.module("role").directive(RoleEditor.componentId, function ($location, roleService) { return new RoleEditor($location, roleService); });
})(RoleModule || (RoleModule = {}));
//# sourceMappingURL=roleEditor.js.map
angular.module("role").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/role/components/roleList/roleList.html", "<div>" + "" + "    <hgroup>" + "        <h1>Roles</h1>" + "    </hgroup>" + "" + "    <a href=\"#/role/add\">Add</a>" + "" + "    <table>" + "        <thead>" + "            <tr>" + "                <th>Id</th>" + "                <th>Name</th>" + "                <th>Actions</th>" + "            </tr>" + "        </thead>" + "        <tbody>" + "            <tr data-ng-repeat=\"entity in vm.entities\">" + "                <td><a>{{ entity.id }}</a></td>" + "                <td><a>{{ entity.name }}</a></td>" + "                <td><a href=\"#/role/edit/{{ entity.id }}\">edit</a>&nbsp;|&nbsp;<a data-ng-click=\"vm.remove(entity)\">delete</a></td>" + "            </tr>" + "        </tbody>" + "    </table>" + "</div>");
}]);
//# sourceMappingURL=roleList.html.js.map
var RoleModule;
(function (RoleModule) {
    var RoleList = (function () {
        function RoleList(roleService) {
            var _this = this;
            this.roleService = roleService;
            this.replace = true;
            this.restrict = "E";
            this.templateUrl = "/app/role/components/roleList/roleList.html";
            this.scope = {};
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.remove = function (entity) {
                    return _this.roleService.remove({ id: entity.id }).then(function () {
                        for (var i = 0; i < scope.vm.entities.length; i++) {
                            if (scope.vm.entities[i].id == entity.id) {
                                scope.vm.entities.splice(i, 1);
                            }
                        }
                    }).catch(function (error) {
                    });
                };
                return _this.roleService.getAll().then(function (results) {
                    return scope.vm.entities = results;
                });
            };
            this.$inject = ["roleService"];
        }
        RoleList.componentId = "roleList";
        return RoleList;
    })();
    angular.module("role").directive(RoleList.componentId, function (roleService) { return new RoleList(roleService); });
})(RoleModule || (RoleModule = {}));
//# sourceMappingURL=roleList.js.map
//# sourceMappingURL=IRoleService.js.map
var RoleModule;
(function (RoleModule) {
    "use strict";
    var RoleService = (function () {
        function RoleService($http, $q, $rootScope, configurationService) {
            var _this = this;
            this.$http = $http;
            this.$q = $q;
            this.$rootScope = $rootScope;
            this.configurationService = configurationService;
            this.dataStore = {
                getAll: null,
                getById: null,
                pages: []
            };
            this.clearDataStore = function () {
                _this.dataStore = {
                    getAll: null,
                    getById: null,
                    pages: []
                };
            };
            this.getBaseUri = function () {
                if (_this.$rootScope.configuration && _this.$rootScope.configuration.apiVersion) {
                    return "api/" + _this.$rootScope.configuration.apiVersion + "/role/";
                }
                else {
                    return "api/role/";
                }
            };
            this.add = function (options) {
                var deferred = _this.$q.defer();
                _this.$http({ method: "POST", url: _this.getBaseUri() + "add", data: options.entity }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.remove = function (options) {
                var deferred = _this.$q.defer();
                _this.$http({ method: "DELETE", url: _this.getBaseUri() + "remove?id=" + options.id }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.getAll = function () {
                var deferred = _this.$q.defer();
                if (_this.dataStore.getAll) {
                    deferred.resolve(_this.dataStore.getAll);
                    return deferred.promise;
                }
                _this.$http({ method: "GET", url: _this.getBaseUri() + "getAll" }).then(function (results) {
                    _this.dataStore.getAll = results.data;
                    deferred.resolve(results.data);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.getById = function (id) {
                var deferred = _this.$q.defer();
                if (_this.dataStore.getById && _this.dataStore.getById.id == id) {
                    deferred.resolve(_this.dataStore.getById);
                    return deferred.promise;
                }
                _this.$http({ method: "GET", url: _this.getBaseUri() + "getbyid?id=" + id }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.getPage = function (offset, setSize) {
                var deferred = _this.$q.defer();
                if (_this.dataStore.getAll) {
                    deferred.resolve(_this.dataStore.getAll);
                    return deferred.promise;
                }
                ;
                _this.$http({ method: "GET", url: _this.getBaseUri() + "getAll" }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.$rootScope.$on("$locationChangeStart", function () {
                _this.clearDataStore();
            });
        }
        RoleService.serviceId = "roleService";
        RoleService.$inject = ["$http", "$q", "$rootScope", "configurationService"];
        return RoleService;
    })();
    RoleModule.RoleService = RoleService;
    angular.module("role").service(RoleService.serviceId, function ($http, $q, $rootScope, configurationService) { return new RoleService($http, $q, $rootScope, configurationService); });
})(RoleModule || (RoleModule = {}));
//# sourceMappingURL=roleService.js.map
var SecurityModule;
(function (SecurityModule) {
    angular.module("security", [
        "configuration",
        "common",
        "core",
        "session",
        "group",
        "role",
        "user",
        "ngRoute"
    ]).config(config);
    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider.when("/signin", {
            templateUrl: "app/security/templates/signin.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: false,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/security", {
            templateUrl: "app/security/templates/security.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/role/add", {
            templateUrl: "/app/security/templates/addrole.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/role/edit/:roleid", {
            templateUrl: "/app/security/templates/addrole.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/role/list", {
            templateUrl: "/app/security/templates/roles.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/user/changepassword/:changepasswordid", {
            templateUrl: "/app/security/templates/changepassword.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/user/add", {
            templateUrl: "/app/security/templates/adduser.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/user/edit/:userid", {
            templateUrl: "/app/security/templates/adduser.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/user/list", {
            templateUrl: "/app/security/templates/users.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/group/add", {
            templateUrl: "/app/security/templates/addgroup.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/group/edit/:groupid", {
            templateUrl: "/app/security/templates/addgroup.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/group/list", {
            templateUrl: "/app/security/templates/groups.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
    }
    function run() {
    }
})(SecurityModule || (SecurityModule = {}));
//# sourceMappingURL=module.js.map
angular.module("security").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/security/components/securityMenu/securityMenu.html", "<div id=\"security-menu\" class=\"sub-menu\">" + "    " + "    <entity-admin-menu entity-name-pluralized=\"Users\" entity-name=\"User\"></entity-admin-menu>" + "    " + "    <entity-admin-menu entity-name-pluralized=\"Groups\" entity-name=\"Group\"></entity-admin-menu>" + "    " + "    <entity-admin-menu entity-name-pluralized=\"Roles\" entity-name=\"Role\"></entity-admin-menu>" + "" + "</div>");
}]);
//# sourceMappingURL=securityMenu.html.js.map
var SecurityModule;
(function (SecurityModule) {
    var DashboardSecurityMenu = (function () {
        function DashboardSecurityMenu() {
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "/app/security/components/securityMenu/securityMenu.html";
            this.scope = {};
            this.link = function (scope, element, attributes) {
            };
        }
        DashboardSecurityMenu.componentId = "securityMenu";
        return DashboardSecurityMenu;
    })();
    angular.module("dashboard").directive(DashboardSecurityMenu.componentId, function () { return new DashboardSecurityMenu(); });
})(SecurityModule || (SecurityModule = {}));
//# sourceMappingURL=securityMenu.js.map
angular.module("security").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/security/components/userEditor/userEditor.html", "<div>" + "    <hgroup>" + "        <h1 data-ng-show=\"vm.entity.id\">Edit User: {{ vm.entity.firstname + ' ' + vm.entity.lastname }}</h1>" + "        <h1 data-ng-hide=\"vm.entity.id\">Create User</h1>" + "    </hgroup>" + "" + "    <a href=\"#/user/changepassword/{{vm.entity.id}}\" data-ng-hide=\"!vm.entity.id\">Change Password</a>" + "    <form name=\"userEditor\" role=\"form\" data-ng-submit=\"tryToSave(userEditor)\" novalidate>" + "        " + "        <multi-entity-select parent-entities=\"vm.entity.roles\" entity-service=\"uow.roles\" entity-name-plural=\"Roles\"></multi-entity-select>" + "" + "        <multi-entity-select parent-entities=\"vm.entity.groups\" entity-service=\"uow.groups\" entity-name-plural=\"Groups\"></multi-entity-select>" + "" + "        " + "        <div class=\"form-group\">" + "            <label>" + "                Username" + "            </label>" + "            <input data-ng-model=\"vm.entity.username\" type=\"text\" class=\"form-control\" />" + "        </div>" + "" + "        <div class=\"form-group\">" + "            <label>" + "                First Name" + "            </label>" + "            <input data-ng-model=\"vm.entity.firstname\" type=\"text\" class=\"form-control\" />" + "        </div>" + "" + "        <div class=\"form-group\">" + "            <label>" + "                Last Name" + "            </label>" + "            <input data-ng-model=\"vm.entity.lastname\" type=\"text\" class=\"form-control\" />" + "        </div>" + "" + "        <div class=\"form-group\">" + "            <label>" + "                Email" + "            </label>" + "            <input data-ng-model=\"vm.entity.emailAddress\" type=\"text\" class=\"form-control\" />" + "        </div>" + "" + "        <div class=\"form-group\" data-ng-hide=\"vm.entity.id\">" + "            <label>" + "                Password" + "            </label>" + "            <input data-ng-model=\"vm.entity.password\" type=\"password\" class=\"form-control\" />" + "        </div>" + "" + "        <div class=\"form-group\" data-ng-hide=\"vm.entity.id\">" + "            <label>" + "                Confirm Password" + "            </label>" + "            <input data-ng-model=\"vm.entity.confirmpassword\" type=\"password\" class=\"form-control\" />" + "        </div>" + "        <p>" + "            <input type=\"submit\" value=\"save\" class=\"btn btn-lrg\" />" + "        </p>" + "    </form>" + "</div>");
}]);
//# sourceMappingURL=userEditor.html.js.map
var SecurityModule;
(function (SecurityModule) {
    var UserEditor = (function () {
        function UserEditor($location, $routeParams, securityUow) {
            var _this = this;
            this.$location = $location;
            this.$routeParams = $routeParams;
            this.securityUow = securityUow;
            this.replace = true;
            this.restrict = "E";
            this.templateUrl = "/app/security/components/userEditor/userEditor.html";
            this.scope = {};
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.uow = {
                    roles: _this.securityUow.roles,
                    groups: _this.securityUow.groups
                };
                scope.tryToSave = function (form) {
                    if (scope.vm.entity.id) {
                        return _this.securityUow.users.update({ model: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/user/list");
                        });
                    }
                    else {
                        return _this.securityUow.users.add({ model: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/user/list");
                        });
                    }
                };
                if (_this.$routeParams.userid) {
                    return _this.securityUow.users.getById({ id: _this.$routeParams.userid }).then(function (results) {
                        scope.vm.entity = results;
                    }).catch(function (error) {
                    });
                }
            };
            this.$inject = ["$location", "userService"];
        }
        UserEditor.componentId = "userEditor";
        return UserEditor;
    })();
    angular.module("security").directive(UserEditor.componentId, function ($location, $routeParams, securityUow) { return new UserEditor($location, $routeParams, securityUow); });
})(SecurityModule || (SecurityModule = {}));
//# sourceMappingURL=userEditor.js.map
var SecurityModule;
(function (SecurityModule) {
    var SecurityUow = (function () {
        function SecurityUow(groupService, identityService, roleService, userService) {
            this.groupService = groupService;
            this.identityService = identityService;
            this.roleService = roleService;
            this.userService = userService;
            this.$inject = ["groupService", "identityService", "roleService", "userService"];
            this.identity = this.identityService;
            this.groups = this.groupService;
            this.roles = this.roleService;
            this.users = this.userService;
        }
        SecurityUow.serviceId = "securityUow";
        return SecurityUow;
    })();
    angular.module("security").service(SecurityUow.serviceId, function (groupService, identityService, roleService, userService) { return new SecurityUow(groupService, identityService, roleService, userService); });
})(SecurityModule || (SecurityModule = {}));
//# sourceMappingURL=uow.js.map
var SecurityModule;
(function (SecurityModule) {
    var SecurityRouteResolver = (function () {
        function SecurityRouteResolver(configurationService, securityUow, $q, $route) {
            var _this = this;
            this.configurationService = configurationService;
            this.securityUow = securityUow;
            this.$q = $q;
            this.$route = $route;
            this.resolveRoute = function () {
                return _this.configurationService.get().then(function () {
                    return _this.securityUow.identity.getCurrentUser().then(function () {
                        if (_this.$route.current.params.userid) {
                            console.log("edit user");
                            return _this.$q.all([
                                _this.securityUow.roles.getAll(),
                                _this.securityUow.groups.getAll(),
                                _this.securityUow.users.getById({ id: _this.$route.current.params.userid })
                            ]).then(function (results) {
                                return results;
                            });
                        }
                        if (_this.$route.current.params.roleid) {
                            return _this.$q.all([
                                _this.securityUow.roles.getById({ id: _this.$route.current.params.roleid })
                            ]).then(function (results) {
                                return results;
                            });
                        }
                        if (_this.$route.current.params.groupid) {
                            return _this.$q.all([
                                _this.securityUow.groups.getById({ id: _this.$route.current.params.groupid })
                            ]).then(function (results) {
                                return results;
                            });
                        }
                        return true;
                    });
                });
            };
        }
        SecurityRouteResolver.serviceId = "securityRouteResolver";
        return SecurityRouteResolver;
    })();
    angular.module("security").service(SecurityRouteResolver.serviceId, function (configurationService, securityUow, $q, $route) { return new SecurityRouteResolver(configurationService, securityUow, $q, $route); });
})(SecurityModule || (SecurityModule = {}));
//# sourceMappingURL=securityRouteResolver.js.map
var ServerProcessModule;
(function (ServerProcessModule) {
    var app = angular.module("serverProcess", [
        "configuration",
        "common",
        "core",
        "session",
        "security",
        "ngRoute"
    ]).config(config).run(run);
    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider.when("/serverProcess", {
            templateUrl: "app/serverProcess/templates/list.html",
            resolve: {
                routeData: [
                    "serverProcessRouteResolver",
                    function (serverProcessRouteResolver) {
                        return serverProcessRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true
        });
        $routeProvider.when("/serverProcess/add", {
            templateUrl: "app/serverProcess/templates/add.html",
            resolve: {
                routeData: [
                    "serverProcessRouteResolver",
                    function (serverProcessRouteResolver) {
                        return serverProcessRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true
        });
        $routeProvider.when("/serverProcess/run", {
            templateUrl: "app/serverProcess/templates/runserverProcess.html",
            resolve: {
                routeData: [
                    "serverProcessRouteResolver",
                    function (serverProcessRouteResolver) {
                        return serverProcessRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true
        });
    }
    function run() {
    }
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=module.js.map
angular.module("serverProcess").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/serverProcess/components/runningServerProcessList/runningServerProcessList.html", "<div></div>");
}]);
//# sourceMappingURL=runningServerProcessList.html.js.map
var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    var RunningServerProcessList = (function () {
        function RunningServerProcessList(serverProcessService) {
            this.serverProcessService = serverProcessService;
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "/app/serverProcess/components/runningServerProcessList/runningServerProcessList.html";
            this.link = function (scope, element, attributes) {
                scope.save = function (form) {
                };
            };
            this.$inject = ["serverProcessService"];
        }
        RunningServerProcessList.componentId = "runningServerProcessList";
        return RunningServerProcessList;
    })();
    angular.module("serverProcess").directive(RunningServerProcessList.componentId, function (serverProcessService) { return new RunningServerProcessList(serverProcessService); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=runningServerProcessList.js.map
var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    var RunServerProcessForm = (function () {
        function RunServerProcessForm(serverProcessService) {
            var _this = this;
            this.serverProcessService = serverProcessService;
            this.restrict = "E";
            this.replace = true;
            this.scope = {};
            this.templateUrl = "/app/serverProcess/components/runServerProcessForm/runServerProcessForm.html";
            this.link = function (scope, element, attributes) {
                scope.tryToRun = function (form) {
                    return _this.serverProcessService.run({ model: scope.entity }).then(function () {
                    });
                };
            };
            this.$inject = ["serverProcessService"];
        }
        RunServerProcessForm.componentId = "runServerProcessForm";
        return RunServerProcessForm;
    })();
    angular.module("serverProcess").directive(RunServerProcessForm.componentId, function (serverProcessService) { return new RunServerProcessForm(serverProcessService); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=runServerProcessForm.js.map
var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    var ServerProcessEditor = (function () {
        function ServerProcessEditor(serverProcessUow) {
            this.serverProcessUow = serverProcessUow;
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "/app/serverProcess/components/serverProcessEditor/serverProcessEditor.html";
            this.link = function (scope, element, attributes) {
                scope.save = function (form) {
                };
            };
            this.$inject = ["serverProcessUow"];
        }
        ServerProcessEditor.componentId = "serverProcessEditor";
        return ServerProcessEditor;
    })();
    angular.module("serverProcess").directive(ServerProcessEditor.componentId, function (serverProcessUow) { return new ServerProcessEditor(serverProcessUow); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=serverProcessEditor.js.map
angular.module("serverProcess").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/serverProcess/components/serverProcessList/serverProcessList.html", "<div>" + "" + "    <hgroup>" + "        <h1>Server Processes</h1>" + "    </hgroup>" + "" + "    <a href=\"#/serverProcess/add\">Add</a>" + "" + "    <table>" + "        <thead>" + "            <tr>" + "                <th>Id</th>" + "                <th>Name</th>" + "                <th>Actions</th>" + "            </tr>" + "        </thead>" + "        <tbody>" + "            <tr data-ng-repeat=\"entity in vm.entities\">" + "                <td><a>{{ entity.id }}</a></td>" + "                <td><a>{{ entity.name }}</a></td>" + "                <td><a href=\"#/serverprocess/edit/{{ entity.id }}\">edit</a>&nbsp;|&nbsp;<a data-ng-click=\"vm.remove(entity)\">delete</a></td>" + "            </tr>" + "        </tbody>" + "    </table>" + "</div>");
}]);
//# sourceMappingURL=serverProcessList.html.js.map
var ServerProcessModule;
(function (ServerProcessModule) {
    var ServerProcessList = (function () {
        function ServerProcessList(serverProcessService) {
            var _this = this;
            this.serverProcessService = serverProcessService;
            this.replace = true;
            this.restrict = "E";
            this.templateUrl = "/app/serverProcess/components/serverProcessList/serverProcessList.html";
            this.scope = {};
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.remove = function (entity) {
                    return _this.serverProcessService.remove({ id: entity.id }).then(function () {
                        for (var i = 0; i < scope.vm.entities.length; i++) {
                            if (scope.vm.entities[i].id == entity.id) {
                                scope.vm.entities.splice(i, 1);
                            }
                        }
                    }).catch(function (error) {
                    });
                };
                return _this.serverProcessService.getAll().then(function (results) {
                    return scope.vm.entities = results;
                });
            };
            this.$inject = ["serverProcessService"];
        }
        ServerProcessList.componentId = "serverProcessList";
        return ServerProcessList;
    })();
    angular.module("serverProcess").directive(ServerProcessList.componentId, function (serverProcessService) { return new ServerProcessList(serverProcessService); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=serverProcessList.js.map
angular.module("serverProcess").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/serverProcess/components/serverProcessMenu/serverProcessMenu.html", "<div id=\"server-process-menu\" class=\"sub-menu\">" + "" + "" + "    <entity-admin-menu entity-name-pluralized=\"Server Processes\" entity-name=\"Server Process\"></entity-admin-menu>" + "" + "" + "</div>");
}]);
//# sourceMappingURL=serverProcessMenu.html.js.map
var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    var ServerProcessMenu = (function () {
        function ServerProcessMenu() {
            this.$inject = [];
            this.restrict = "E";
            this.replace = true;
            this.scope = {};
            this.templateUrl = "/app/serverProcess/components/serverProcessMenu/serverProcessMenu.html";
            this.link = function (scope, element, attributes) {
            };
        }
        ServerProcessMenu.componentId = "serverProcessMenu";
        return ServerProcessMenu;
    })();
    angular.module("serverProcess").directive(ServerProcessMenu.componentId, function () { return new ServerProcessMenu(); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=serverProcessMenu.js.map
var ServerProcessModule;
(function (ServerProcessModule) {
    var ExecutionState;
    (function (ExecutionState) {
        ExecutionState[ExecutionState["created"] = 0] = "created";
        ExecutionState[ExecutionState["inProgress"] = 1] = "inProgress";
        ExecutionState[ExecutionState["stopped"] = 2] = "stopped";
        ExecutionState[ExecutionState["paused"] = 3] = "paused";
        ExecutionState[ExecutionState["killed"] = 4] = "killed";
    })(ExecutionState || (ExecutionState = {}));
    angular.module("serverProcess").value("executionState", ExecutionState);
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=executionState.js.map
//# sourceMappingURL=IRunningServerProcess.js.map
//# sourceMappingURL=IServerProcessService.js.map
//# sourceMappingURL=IServerProcessUow.js.map
//# sourceMappingURL=ISystemJobService.js.map
//# sourceMappingURL=ISystemJobUow.js.map
var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    var RunningServerProcessService = (function () {
        function RunningServerProcessService($http, $q, $rootScope, configurationService) {
            var _this = this;
            this.$http = $http;
            this.$q = $q;
            this.$rootScope = $rootScope;
            this.configurationService = configurationService;
            this.dataStore = {
                getAll: null,
                getById: null,
                pages: []
            };
            this.clearDataStore = function () {
                _this.dataStore = {
                    getAll: null,
                    getById: null,
                    pages: []
                };
            };
            this.getBaseUri = function () {
                if (_this.$rootScope.configuration && _this.$rootScope.configuration.apiVersion) {
                    return "api/" + _this.$rootScope.configuration.apiVersion + "/runningServerProcess/";
                }
                else {
                    return "api/runningServerProcess/";
                }
            };
            this.getAll = function () {
                var deferred = _this.$q.defer();
                if (_this.dataStore.getAll) {
                    deferred.resolve(_this.dataStore.getAll);
                    return deferred.promise;
                }
                _this.$http({ method: "GET", url: _this.getBaseUri() + "getAll" }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.getById = function (id) {
                var deferred = _this.$q.defer();
                if (_this.dataStore.getById && _this.dataStore.getById.id == id) {
                    deferred.resolve(_this.dataStore.getById);
                    return deferred.promise;
                }
                _this.$http({ method: "GET", url: _this.getBaseUri() + "getbyid?id=" + id }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.getPage = function (offset, setSize) {
                var deferred = _this.$q.defer();
                if (_this.dataStore.getAll) {
                    deferred.resolve(_this.dataStore.getAll);
                    return deferred.promise;
                }
                ;
                _this.$http({ method: "GET", url: _this.getBaseUri() + "getAll" }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.restart = function (options) {
                var deferred = _this.$q.defer();
                _this.$http({ method: "POST", url: _this.getBaseUri() + "restart", data: { guid: options.guid } }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.kill = function (options) {
                var deferred = _this.$q.defer();
                _this.$http({ method: "POST", url: _this.getBaseUri() + "kill", data: { guid: options.guid } }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.pause = function (options) {
                var deferred = _this.$q.defer();
                _this.$http({ method: "POST", url: _this.getBaseUri() + "pause", data: { guid: options.guid } }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.stop = function (options) {
                var deferred = _this.$q.defer();
                _this.$http({ method: "POST", url: _this.getBaseUri() + "stop", data: { guid: options.guid } }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.$rootScope.$on("$locationChangeStart", function () {
                _this.clearDataStore();
            });
        }
        RunningServerProcessService.serviceId = "runningServerProcessService";
        RunningServerProcessService.$inject = ["$http", "$q", "$rootScope", "configurationService"];
        return RunningServerProcessService;
    })();
    ServerProcessModule.RunningServerProcessService = RunningServerProcessService;
    angular.module("serverProcess").service(RunningServerProcessService.serviceId, function ($http, $q, $rootScope, configurationService) { return new RunningServerProcessService($http, $q, $rootScope, configurationService); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=runningServerProcessService.js.map
var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    var serviceId = "serverProcessRouteResolver";
    angular.module("serverProcess").service(serviceId, ["$location", "$q", "$route", "configurationService", "securityUow", "serverProcessUow", service]);
    function service($location, $q, $route, configurationService, securityUow, serverProcessUow) {
        var self = this;
        self.resolveRoute = function () {
            return configurationService.get().then(function () {
                return securityUow.identity.getCurrentUser().then(function () {
                    return true;
                });
            });
        };
        return self;
    }
    ;
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=serverProcessRouteResolver.js.map
var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    var ServerProcessService = (function () {
        function ServerProcessService($http, $q, $rootScope, configurationService) {
            var _this = this;
            this.$http = $http;
            this.$q = $q;
            this.$rootScope = $rootScope;
            this.configurationService = configurationService;
            this.dataStore = {
                getAll: null,
                getById: null,
                pages: []
            };
            this.clearDataStore = function () {
                _this.dataStore = {
                    getAll: null,
                    getById: null,
                    pages: []
                };
            };
            this.getBaseUri = function () {
                if (_this.$rootScope.configuration && _this.$rootScope.configuration.apiVersion) {
                    return "api/" + _this.$rootScope.configuration.apiVersion + "/serverProcess/";
                }
                else {
                    return "api/serverProcess/";
                }
            };
            this.getAll = function () {
                var deferred = _this.$q.defer();
                if (_this.dataStore.getAll) {
                    deferred.resolve(_this.dataStore.getAll);
                    return deferred.promise;
                }
                _this.$http({ method: "GET", url: _this.getBaseUri() + "getAll" }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.getById = function (id) {
                var deferred = _this.$q.defer();
                if (_this.dataStore.getById && _this.dataStore.getById.id == id) {
                    deferred.resolve(_this.dataStore.getById);
                    return deferred.promise;
                }
                _this.$http({ method: "GET", url: _this.getBaseUri() + "getbyid?id=" + id }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.getPage = function (offset, setSize) {
                var deferred = _this.$q.defer();
                if (_this.dataStore.getAll) {
                    deferred.resolve(_this.dataStore.getAll);
                    return deferred.promise;
                }
                ;
                _this.$http({ method: "GET", url: _this.getBaseUri() + "getAll" }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.add = function (options) {
                var deferred = _this.$q.defer();
                _this.$http({ method: "POST", url: _this.getBaseUri() + "add", data: options.entity }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.run = function (options) {
                var deferred = _this.$q.defer();
                _this.$http({ method: "POST", url: _this.getBaseUri() + "run", data: { name: options.name, step: options.step } }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.remove = function (options) {
                var deferred = _this.$q.defer();
                _this.$http({ method: "POST", url: _this.getBaseUri() + "remove", data: options.serverProcessId }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.$rootScope.$on("$locationChangeStart", function () {
                _this.clearDataStore();
            });
        }
        ServerProcessService.serviceId = "serverProcessService";
        ServerProcessService.$inject = ["$http", "$q", "$rootScope", "configurationService"];
        return ServerProcessService;
    })();
    ServerProcessModule.ServerProcessService = ServerProcessService;
    angular.module("serverProcess").service(ServerProcessService.serviceId, function ($http, $q, $rootScope, configurationService) { return new ServerProcessService($http, $q, $rootScope, configurationService); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=serverProcessService.js.map
var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    angular.module("serverProcess").service("serverProcessSignalRService", function ($rootScope, $) { return new ServerProcessSignalRService($rootScope, $); });
    var ServerProcessSignalRService = (function () {
        function ServerProcessSignalRService($rootScope, $) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.$ = $;
            this.connection = null;
            this.hub = null;
            this.run = function (name, step) {
                _this.hub.invoke("run", name, step);
            };
            this.runStart = function () {
                _this.$rootScope.$broadcast("serverProcessRunStart");
            };
            this.$inject = ["$rootScope", "$"];
            this.connection = this.$.hubConnection();
            this.hub = this.connection.createHubProxy("serverProcessHub");
            this.hub.on("serverProcessRunStart", function (update) {
                _this.runStart();
            });
            this.connection.start(function () {
            });
            this.$rootScope.$on("serverProcessRunRequest", function (event, object) {
                _this.run(object.entity.name, object.entity.step);
            });
        }
        ServerProcessSignalRService.serviceId = "serverProcessSignalRService";
        return ServerProcessSignalRService;
    })();
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=serverProcessSignalRService.js.map
var ServerProcessModule;
(function (ServerProcessModule) {
    var ServerProcessUow = (function () {
        function ServerProcessUow(serverProcessService) {
            this.serverProcessService = serverProcessService;
            this.serverProcesss = this.serverProcessService;
            this.$inject = ["serverProcessService"];
        }
        ServerProcessUow.serviceId = "serverProcessUow";
        return ServerProcessUow;
    })();
    angular.module("serverProcess").service(ServerProcessUow.serviceId, function (serverProcessService) { return new ServerProcessUow(serverProcessService); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=serverProcessUow.js.map
var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    var serviceId = "serverProcessRouteResolver";
    angular.module("serverProcess").service(serviceId, ["$location", "$q", "$route", "configurationService", "securityUow", "serverProcessUow", service]);
    function service($location, $q, $route, configurationService, securityUow, serverProcessUow) {
        var self = this;
        self.resolveRoute = function () {
            return configurationService.get().then(function () {
                return securityUow.identity.getCurrentUser().then(function () {
                    return true;
                });
            });
        };
        return self;
    }
    ;
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=systemJobRouteResolver.js.map
var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    var ServerProcessService = (function () {
        function ServerProcessService($http, $q, $rootScope, configurationService) {
            var _this = this;
            this.$http = $http;
            this.$q = $q;
            this.$rootScope = $rootScope;
            this.configurationService = configurationService;
            this.dataStore = {
                getAll: null,
                getById: null,
                pages: []
            };
            this.clearDataStore = function () {
                _this.dataStore = {
                    getAll: null,
                    getById: null,
                    pages: []
                };
            };
            this.getBaseUri = function () {
                if (_this.$rootScope.configuration && _this.$rootScope.configuration.apiVersion) {
                    return "api/" + _this.$rootScope.configuration.apiVersion + "/serverProcess/";
                }
                else {
                    return "api/serverProcess/";
                }
            };
            this.getAll = function () {
                var deferred = _this.$q.defer();
                if (_this.dataStore.getAll) {
                    deferred.resolve(_this.dataStore.getAll);
                    return deferred.promise;
                }
                _this.$http({ method: "GET", url: _this.getBaseUri() + "getAll" }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.getById = function (id) {
                var deferred = _this.$q.defer();
                if (_this.dataStore.getById && _this.dataStore.getById.id == id) {
                    deferred.resolve(_this.dataStore.getById);
                    return deferred.promise;
                }
                _this.$http({ method: "GET", url: _this.getBaseUri() + "getbyid?id=" + id }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.getPage = function (offset, setSize) {
                var deferred = _this.$q.defer();
                if (_this.dataStore.getAll) {
                    deferred.resolve(_this.dataStore.getAll);
                    return deferred.promise;
                }
                ;
                _this.$http({ method: "GET", url: _this.getBaseUri() + "getAll" }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.$rootScope.$on("$locationChangeStart", function () {
                _this.clearDataStore();
            });
        }
        ServerProcessService.serviceId = "serverProcessService";
        ServerProcessService.$inject = ["$http", "$q", "$rootScope", "configurationService"];
        return ServerProcessService;
    })();
    ServerProcessModule.ServerProcessService = ServerProcessService;
    angular.module("serverProcess").service(ServerProcessService.serviceId, function ($http, $q, $rootScope, configurationService) { return new ServerProcessService($http, $q, $rootScope, configurationService); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=systemJobService.js.map
var ServerProcessModule;
(function (ServerProcessModule) {
    var ServerProcessSignalRService = (function () {
        function ServerProcessSignalRService($rootScope, $) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.$ = $;
            this.connection = null;
            this.hub = null;
            this.run = function (name, step) {
                _this.hub.invoke("run", name, step);
            };
            this.runStart = function () {
                _this.$rootScope.$broadcast("serverProcessRunStart");
            };
            this.$inject = ["$rootScope", "$"];
            this.connection = this.$.hubConnection();
            this.hub = this.connection.createHubProxy("serverProcessHub");
            this.hub.on("serverProcessRunStart", function (update) {
                _this.runStart();
            });
            this.connection.start(function () {
            });
            this.$rootScope.$on("serverProcessRunRequest", function (event, object) {
                _this.run(object.entity.name, object.entity.step);
            });
        }
        return ServerProcessSignalRService;
    })();
    angular.module("serverProcess").service("serverProcessSignalRService", function ($rootScope, $) { return new ServerProcessSignalRService($rootScope, $); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=systemJobSignalRService.js.map
var ServerProcessModule;
(function (ServerProcessModule) {
    var ServerProcessUow = (function () {
        function ServerProcessUow(serverProcessService) {
            this.serverProcessService = serverProcessService;
            this.serverProcesss = this.serverProcessService;
            this.$inject = ["serverProcessService"];
        }
        ServerProcessUow.serviceId = "serverProcessUow";
        return ServerProcessUow;
    })();
    angular.module("serverProcess").service(ServerProcessUow.serviceId, function (serverProcessService) { return new ServerProcessUow(serverProcessService); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=systemJobUow.js.map
(function () {
    "use strict";
    var app = angular.module("session", ["configuration", "common", "core"]);
})();
//# sourceMappingURL=module.js.map
//# sourceMappingURL=ISession.js.map
var SessionModule;
(function (SessionModule) {
    var serviceId = "session";
    angular.module("session").service(serviceId, ["$location", "$http", "$q", "configuration", "configurationService", "currentUser", "token", service]);
    function service($location, $http, $q, configuration, configurationService, currentUser, token) {
        var self = this;
        self.isLoggedIn = function () {
            if (self.getCurrentUser() != null && self.getCurrentUser() != "") {
                return (self.getCurrentUser().username);
            }
        };
        self.isUserInRole = function (roleName) {
            if (self.isLoggedIn()) {
                var user = self.getCurrentUser();
                for (var i = 0; i < user.roles.length; i++) {
                    if (roleName == user.roles[i].name) {
                        return true;
                    }
                }
            }
            return false;
        };
        self.getCurrentUser = function () {
            return currentUser.get();
        };
        self.signOut = function () {
            $http({ method: "GET", url: "api/identity/signout" }).then(function () {
            });
            token.set({ data: null });
            currentUser.set({ data: null });
            $location.path("/");
        };
        self.setConfigurationAsync = function () {
            if (configuration.get()) {
                return $q.when(configuration.get());
            }
            return configurationService.get().then(function (results) {
                configuration.set({ data: results });
                return configuration.get();
            });
        };
        self.getConfiguration = function () {
            return configuration.get();
        };
        return self;
    }
    var Session = (function () {
        function Session($location, $http, $q, configuration, configurationService, currentUser, token) {
            this.$location = $location;
            this.$http = $http;
            this.$q = $q;
            this.configuration = configuration;
            this.configurationService = configurationService;
            this.currentUser = currentUser;
            this.token = token;
            this.isLoggedIn = function () {
                return true;
            };
            this.isUserInRole = function (roleName) {
                return true;
            };
            this.getCurrentUser = function () {
                return {};
            };
            this.signOut = function () {
            };
            this.setConfigurationAsync = function () {
            };
            this.getConfiguration = function () {
                return {};
            };
        }
        Session.ServiceId = "session";
        return Session;
    })();
    SessionModule.Session = Session;
})(SessionModule || (SessionModule = {}));
//# sourceMappingURL=session.js.map
var SessionModule;
(function (SessionModule) {
    "use strict";
    var serviceId = "configuration";
    angular.module("session").service(serviceId, ["$rootScope", "storage", service]);
    function service($rootScope, storage) {
        var self = this;
        var data = null;
        var name = "configuration";
        self.get = function get() {
            if (data) {
                return data;
            }
            try {
                data = storage.getByName({ name: name }).value;
            }
            catch (error) {
            }
            return data;
        };
        self.set = function set(params) {
            data = params.data;
            storage.put({ name: name, value: params.data });
        };
        $rootScope.$on("$routeChangeStart", function routeChange(event, newUrl, oldUrl) {
            if (newUrl.originalPath == "/signin") {
                data = null;
                self.set({ data: null });
            }
        });
        return self;
    }
})(SessionModule || (SessionModule = {}));
//# sourceMappingURL=configuration.js.map
var SessionModule;
(function (SessionModule) {
    angular.module("session").service("currentUser", function ($rootScope, storage) { return new CurrentUser($rootScope, storage); });
    var CurrentUser = (function () {
        function CurrentUser($rootScope, storage) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.storage = storage;
            this.name = "currentUser";
            this.get = function () {
                if (_this.data) {
                    return _this.data;
                }
                try {
                    _this.data = _this.storage.getByName({ name: name }).value;
                }
                catch (error) {
                }
                return _this.data;
            };
            this.set = function (value) {
                _this.data = value.data;
                _this.storage.put({ name: name, value: value.data });
            };
            $rootScope.$on("$routeChangeStart", function (event, newUrl, oldUrl) {
                if (newUrl.originalPath == "/signin") {
                    _this.data = null;
                    _this.set({ data: null });
                }
            });
        }
        CurrentUser.$inject = ["$rootScope", "storage"];
        return CurrentUser;
    })();
})(SessionModule || (SessionModule = {}));
//# sourceMappingURL=currentUser.js.map
var SessionModule;
(function (SessionModule) {
    var serviceId = "token";
    angular.module("session").service(serviceId, ["$rootScope", "storage", service]);
    function service($rootScope, storage) {
        var self = this;
        var data = null;
        var name = "token";
        self.get = function () {
            if (data) {
                return data;
            }
            try {
                data = storage.getByName({ name: name }).value;
            }
            catch (error) {
            }
            return data;
        };
        self.set = function (params) {
            data = params.data;
            storage.put({ name: name, value: params.data });
        };
        $rootScope.$on("$routeChangeStart", function (event, newUrl, oldUrl) {
            if (newUrl.originalPath == "/signin") {
                data = null;
                self.set({ data: null });
            }
        });
        return self;
    }
    ;
})(SessionModule || (SessionModule = {}));
//# sourceMappingURL=token.js.map
var UserModule;
(function (UserModule) {
    var app = angular.module("user", [
        "configuration",
        "common",
        "core",
        "group",
        "role",
        "session",
        "ngRoute"
    ]).config(config);
    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider.when("/signin", {
            templateUrl: "/app/user/templates/signin.html",
        }).when("/", {
            templateUrl: "/app/user/templates/preferences.html",
            controller: "preferencesController",
            controllerAs: "vm",
            resolve: {
                preferencesData: [
                    "preferencesService",
                    function (preferencesService) {
                        return preferencesService.getClientPreferences();
                    }
                ],
                routeData: [
                    "userRouteResolver",
                    function (userRouteResolver) {
                        return userRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: false
        }).when("/user/add", {
            templateUrl: "/app/user/templates/edit.html",
            resolve: {
                routeData: [
                    "userRouteResolver",
                    function (userRouteResolver) {
                        return userRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true
        }).when("/admin/user/edit/:id", {
            templateUrl: "/app/user/templates/edit.html",
            resolve: [
                "userRouteResolver",
                function (userRouteResolver) {
                    return userRouteResolver.resolveRoute({ route: "/admin/user/edit/:id" });
                }
            ],
            authorizationRequired: true
        }).when("/admin/users", {
            templateUrl: "/app/user/templates/list.html",
            resolve: [
                "userRouteResolver",
                function (userRouteResolver) {
                    return userRouteResolver.resolveRoute({ route: "/admin/users" });
                }
            ],
            authorizationRequired: true
        }).when("/register", {
            templateUrl: "/app/user/templates/register.html",
            resolve: {
                routeData: [
                    "userRouteResolver",
                    function (userRouteResolver) {
                        return userRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: false
        }).when("/preferences", {
            templateUrl: "/app/user/templates/preferences.html",
            controller: "preferencesController",
            controllerAs: "vm",
            resolve: {
                routeData: [
                    "userRouteResolver",
                    function (userRouteResolver) {
                        return userRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true
        });
    }
})(UserModule || (UserModule = {}));
//# sourceMappingURL=module.js.map
angular.module("user").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/user/components/changePasswordForm/changePasswordForm.html", "<div id=\"change-password\">" + "    " + "    <hgroup>" + "        <h1>Change Password: {{ vm.firstname + ' ' + vm.lastname }}</h1>" + "    </hgroup>" + "" + "    <form name=\"changePasswordForm\" id=\"change-password-form\" data-ng-submit=\"tryToChangePassword(changePasswordForm)\" novalidate>" + "        " + "        <div class=\"form-group\">" + "            <label>" + "                Old Password" + "            </label>" + "            <input data-ng-model=\"vm.oldPassword\" type=\"password\" class=\"form-control\" />" + "        </div>" + "" + "        <div class=\"form-group\">" + "            <label>" + "                New Password" + "            </label>" + "            <input data-ng-model=\"vm.newPassword\" type=\"password\" class=\"form-control\" />" + "        </div>" + "" + "        <div class=\"form-group\">" + "            <label>" + "                Confirm Password" + "            </label>" + "            <input data-ng-model=\"vm.confirmPassword\" type=\"password\" class=\"form-control\" />" + "        </div>" + "" + "        <p>" + "            <input type=\"submit\" value=\"Change Password\" class=\"btn btn-lg\" />" + "        </p>" + "" + "    </form>" + "</div>");
}]);
//# sourceMappingURL=changePasswordForm.html.js.map
var UserModule;
(function (UserModule) {
    "use strict";
    var ChangePasswordForm = (function () {
        function ChangePasswordForm(identityService, userService, $location, $routeParams) {
            var _this = this;
            this.identityService = identityService;
            this.userService = userService;
            this.$location = $location;
            this.$routeParams = $routeParams;
            this.templateUrl = "/app/user/components/changePasswordForm/changePasswordForm.html";
            this.restrict = "E";
            this.scope = {};
            this.replace = true;
            this.link = function (scope) {
                scope.vm = {};
                scope.tryToChangePassword = function (form) {
                    return _this.userService.changePassword({ model: scope.vm }).then(function (results) {
                        _this.$location.path("/user/list");
                    }).catch(function (error) {
                    });
                };
                if (_this.$routeParams.changepasswordid) {
                    return _this.userService.getById({ id: _this.$routeParams.changepasswordid }).then(function (results) {
                        scope.vm = results;
                    });
                }
                else {
                    return _this.identityService.getCurrentUser().then(function (results) {
                        scope.vm = results;
                    });
                }
            };
            this.$inject = ["identityService", "userService", "$location", "$routeParams"];
        }
        ChangePasswordForm.componentId = "changePasswordForm";
        return ChangePasswordForm;
    })();
    angular.module("user").directive(ChangePasswordForm.componentId, function (identityService, userService, $location, $routeParams) { return new ChangePasswordForm(identityService, userService, $location, $routeParams); });
})(UserModule || (UserModule = {}));
//# sourceMappingURL=changePasswordForm.js.map
//# sourceMappingURL=preferences.html.js.map
//# sourceMappingURL=preferences.js.map
(function () {
    "use strict";
    var componentId = "registrationForm";
    angular.module("user").directive(componentId, ["$location", "identityService", component]);
    function component($location, identityService) {
        return {
            templateUrl: "/app/user/components/registrationForm/registrationForm.html",
            restrict: "EA",
            replace: true,
            scope: {},
            link: function (scope) {
                scope.submit = function () {
                    identityService.register({ model: scope.model }).then(function () {
                        $location.path("/signin");
                    });
                };
            }
        };
    }
})();
//# sourceMappingURL=registrationForm.js.map
angular.module("user").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/user/components/signinForm/signinForm.html", "<div>" + "    <hgroup><h1>Sign In</h1></hgroup>" + "" + "    <form name=\"signInForm\" id=\"sign-in-form\" data-ng-submit=\"tryToSignIn()\" novalidate>" + "        <div class=\"form-group\">" + "            <label>" + "                Username" + "            </label>" + "            <input data-ng-model=\"vm.username\" type=\"text\" class=\"form-control\" />" + "        </div>" + "" + "        <div class=\"form-group\">" + "            <label>" + "                Password" + "            </label>" + "            <input data-ng-model=\"vm.password\" type=\"password\" class=\"form-control\" />" + "        </div>" + "" + "        <p>" + "            <input type=\"submit\" value=\"sign in\" class=\"btn btn-lg\" />" + "        </p>" + "" + "        <div class=\"form-group\">" + "            <input type=\"checkbox\" data-ng-model=\"model.rememberMe\" />" + "            <label>Keep me signed in</label>" + "        </div>" + "    </form>" + "</div>");
}]);
//# sourceMappingURL=signinForm.html.js.map
var UserModule;
(function (UserModule) {
    "use strict";
    var SignInForm = (function () {
        function SignInForm(identityService, token, $location) {
            var _this = this;
            this.identityService = identityService;
            this.token = token;
            this.$location = $location;
            this.templateUrl = "/app/user/components/signInForm/signInForm.html";
            this.restrict = "E";
            this.scope = {};
            this.replace = true;
            this.link = function (scope) {
                scope.vm = {
                    username: "System",
                    password: "password"
                };
                scope.tryToSignIn = function (form) {
                    return _this.identityService.signIn({ model: scope.vm }).then(function (results) {
                        _this.token.set({ data: results });
                        _this.$location.path("/");
                    }).catch(function (error) {
                    });
                };
            };
            this.$inject = ["identityService", "token", "$location"];
        }
        SignInForm.componentId = "signInForm";
        return SignInForm;
    })();
    angular.module("user").directive(SignInForm.componentId, function (identityService, token, $location) { return new SignInForm(identityService, token, $location); });
})(UserModule || (UserModule = {}));
//# sourceMappingURL=signinForm.js.map
(function () {
    "use strict";
    var componentId = "userAdminMenu";
    angular.module("user").directive(componentId, ["$location", "$routeParams", "session", component]);
    function component($location, $routeParams, session) {
        return {
            templateUrl: "/app/user/components/userAdminMenu/userAdminMenu.html",
            restrict: "EA",
            replace: true,
            scope: {},
            link: function (scope) {
            }
        };
    }
})();
//# sourceMappingURL=userAdminMenu.js.map
var UserModule;
(function (UserModule) {
    var UserDropDownList = (function () {
        function UserDropDownList() {
            this.templateUrl = "/app/user/components/userDropDownList/userDropDownList.html";
            this.restrict = "E";
            this.scope = {
                currentuser: "="
            };
            this.replace = true;
            this.link = function (scope) {
                scope.users = [
                    { id: 0, name: "John" },
                    { id: 1, name: "Quinn" },
                    { id: 2, name: "Richard" }
                ];
            };
        }
        UserDropDownList.componentId = "userDropDownList";
        return UserDropDownList;
    })();
    UserModule.UserDropDownList = UserDropDownList;
    angular.module("user").directive(UserDropDownList.componentId, [function () { return new UserDropDownList(); }]);
})(UserModule || (UserModule = {}));
//# sourceMappingURL=userDropDownList.js.map
angular.module("user").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/user/components/userList/userList.html", "<div>" + "" + "    <hgroup>" + "        <h1>Users</h1>" + "    </hgroup>" + "" + "    <a href=\"#/user/add\">Add</a>" + "" + "    <table>" + "        <thead>" + "            <tr>" + "                <th>Id</th>" + "                <th>Username</th>" + "                <th>First Name</th>" + "                <th>Last Name</th>" + "                <th>Actions</th>" + "            </tr>" + "        </thead>" + "        <tbody>" + "            <tr data-ng-repeat=\"entity in vm.entities\">" + "                <td><a>{{ entity.id }}</a></td>" + "                <td><a>{{ entity.username }}</a></td>" + "                <td><a>{{ entity.firstname }}</a></td>" + "                <td><a>{{ entity.lastname }}</a></td>" + "                <td>" + "                    <a href=\"#/user/edit/{{ entity.id }}\">edit</a>&nbsp;|&nbsp;" + "                    <a href=\"#/user/changepassword/{{ entity.id }}\">change password</a>&nbsp;|&nbsp;" + "                    <a data-ng-click=\"vm.remove(entity)\">delete</a>" + "                </td>" + "            </tr>" + "        </tbody>" + "    </table>" + "</div>");
}]);
//# sourceMappingURL=userList.html.js.map
var UserModule;
(function (UserModule) {
    var UserList = (function () {
        function UserList(userService) {
            var _this = this;
            this.userService = userService;
            this.replace = true;
            this.restrict = "E";
            this.templateUrl = "/app/user/components/userList/userList.html";
            this.scope = {};
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.remove = function (entity) {
                    return _this.userService.remove({ id: entity.id }).then(function () {
                        for (var i = 0; i < scope.vm.entities.length; i++) {
                            if (scope.vm.entities[i].id == entity.id) {
                                scope.vm.entities.splice(i, 1);
                            }
                        }
                    }).catch(function (error) {
                    });
                };
                return _this.userService.getAll().then(function (results) {
                    return scope.vm.entities = results;
                });
            };
            this.$inject = ["userService"];
        }
        UserList.componentId = "userList";
        return UserList;
    })();
    angular.module("user").directive(UserList.componentId, function (userService) { return new UserList(userService); });
})(UserModule || (UserModule = {}));
//# sourceMappingURL=userList.js.map
(function () {
    "use strict";
    function preferencesController($scope, dataService, preferencesData) {
        var vm = this;
        vm = {
            pageTitle: "Preferences",
            startScreen: preferencesData.Client.StartScreen,
            poDisplayLimit: preferencesData.Client.PoDisplayLimit
        };
        vm.update = function (clientPreferences) {
            vm.startScreen = clientPreferences.startScreen;
            vm.poDisplayLimit = clientPreferences.poDisplayLimit;
            dataService.updateClientPreferences({
                "StartScreen": vm.startScreen,
                "PoDisplayLimit": vm.poDisplayLimit
            }).then(function () {
            }).catch(function (error) {
            });
        };
        return vm;
    }
    preferencesController.$inject = ["$scope", "dataService", "preferencesData"];
    angular.module("user").controller("preferencesController", preferencesController);
})();
//# sourceMappingURL=preferencesController.js.map
//# sourceMappingURL=IPreferencesService.js.map
var UserModule;
(function (UserModule) {
    var serviceId = "identityService";
    angular.module("user").service(serviceId, ["$http", "currentUser", service]);
    function service($http, currentUser) {
        var self = this;
        self.signIn = function (params) {
            return $http({ method: "POST", url: "api/identity/signin", data: JSON.stringify(params.model) }).then(function (results) {
                return results.data.token;
            }).catch(function () {
            });
        };
        self.register = function (params) {
            return $http({ method: "POST", url: "api/identity/register", data: JSON.stringify(params.model) }).then(function (results) {
                return results.data.token;
            }).catch(function () {
            });
        };
        self.getCurrentUser = function () {
            return $http({ method: "GET", url: "api/user/getCurrentUser" }).then(function (results) {
                currentUser.set({ data: results.data });
                return currentUser.get();
            }).catch(function () {
            });
        };
        return self;
    }
})(UserModule || (UserModule = {}));
//# sourceMappingURL=identityService.js.map
//# sourceMappingURL=identityService.spec.js.map
(function () {
    "use strict";
    function preferencesService($http, $q, configuration) {
        var _this = this;
        var self = this;
        this.$q = $q;
        self.getClientPreferences = function () {
            var deferred = _this.$q.defer();
            deferred.resolve({ "Server": { "RecentPoLimit": 5 }, "Client": { "PlaceCallUse": "Skype", "StartScreen": "Dashboard", "PoDisplayLimit": "15", "PoOrderBy": "Due Date", "PoOrder": "Descending", "RecentPoLimit": "5" } });
            return deferred.promise;
        };
        return self;
    }
    preferencesService.$inject = ["$http", "$q", "configuration"];
    angular.module("user").service("preferencesService", preferencesService);
})();
//# sourceMappingURL=preferencesService.js.map
var UserModule;
(function (UserModule) {
    var serviceId = "userRouteResolver";
    angular.module("user").service(serviceId, ["$q", "$route", "configurationService", "userService", service]);
    function service($q, $route, configurationService, userService) {
        var self = this;
        self.resolveRoute = function (params) {
            return configurationService.get().then(function () {
                if (params) {
                    switch (params.route) {
                        case "/admin/users":
                            return userService.getAll().then(function () {
                            });
                            break;
                        case "/admin/user/edit/:id":
                            return userService.getById({ id: $route.params.id }).then(function () {
                            });
                            break;
                    }
                }
            }).catch(function (error) {
                console.log(error);
            });
        };
        return self;
    }
    ;
})(UserModule || (UserModule = {}));
//# sourceMappingURL=userRouteResolver.js.map
var UserModule;
(function (UserModule) {
    var dataServiceId = "userService";
    angular.module("user").service(dataServiceId, ["$http", "$q", "$rootScope", dataService]);
    function dataService($http, $q, $rootScope) {
        var self = this;
        self.getBaseUri = function () {
            if ($rootScope.configuration && $rootScope.configuration.apiVersion) {
                return "api/" + $rootScope.configuration.apiVersion + "/user/";
            }
            else {
                return "api/user/";
            }
        };
        self.cache = {
            getAll: null,
            getById: null
        };
        $rootScope.$on("$locationChangeStart", function () {
            self.clearCache();
        });
        self.clearCache = function () {
            self.cache = {
                getAll: null,
                getById: null
            };
        };
        self.getAll = function (params) {
            if (self.cache.getAll) {
                var deferred = $q.defer();
                deferred.resolve(self.cache.getAll);
                return deferred.promise;
            }
            ;
            return $http({ method: "GET", url: self.getBaseUri() + "getAll", params: params }).then(function (results) {
                self.cache.getAll = results.data;
                return results.data;
            }).catch(function (error) {
            });
        };
        self.getById = function (params) {
            if (self.cache.getById && self.cache.getById.id == params.id) {
                var deferred = $q.defer();
                deferred.resolve(self.cache.getById);
                return deferred.promise;
            }
            return $http({ method: "GET", url: self.getBaseUri() + "getbyid?id=" + params.id }).then(function (results) {
                self.cache.getById = results.data;
                return results.data;
            }).catch(function (error) {
            });
        };
        self.remove = function (params) {
            return $http({ method: "DELETE", url: self.getBaseUri() + "remove?id=" + params.id }).then(function (results) {
                self.clearCache();
                return results;
            }).catch(function (error) {
            });
        };
        self.changePassword = function (params) {
            return $http({ method: "POST", url: self.getBaseUri() + "changePassword", data: JSON.stringify(params.model) }).then(function (results) {
                self.clearCache();
                return results;
            }).catch(function (error) {
            });
        };
        self.add = function (params) {
            return $http({ method: "POST", url: self.getBaseUri() + "add", data: JSON.stringify(params.model) }).then(function (results) {
                self.clearCache();
                return results;
            }).catch(function (error) {
            });
        };
        self.update = function (params) {
            return $http({ method: "PUT", url: self.getBaseUri() + "update", data: JSON.stringify(params.model) }).then(function (results) {
                self.clearCache();
                return results;
            }).catch(function (error) {
                console.log("user service error:" + error);
            });
        };
        return self;
    }
})(UserModule || (UserModule = {}));
//# sourceMappingURL=userService.js.map
angular.module("user").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/user/templates/signin.html", "<div>" + "" + "    " + "" + "    <sign-in-form></sign-in-form>" + "</div>");
}]);
//# sourceMappingURL=signin.html.js.map
