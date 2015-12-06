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