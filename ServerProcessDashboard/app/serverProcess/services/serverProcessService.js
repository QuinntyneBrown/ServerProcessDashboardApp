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