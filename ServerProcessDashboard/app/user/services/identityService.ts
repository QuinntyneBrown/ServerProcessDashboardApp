module UserModule {

    var serviceId = "identityService";

    angular.module("user").service(serviceId, ["$http", "currentUser", service]);

    function service($http, currentUser) {

        var self = this;

        self.signIn = (params) => {
            return $http({ method: "POST", url: "api/identity/signin", data: JSON.stringify(params.model) }).then((results) => {
                return results.data.token;
            }).catch(() => {

            });
        };

        self.register = (params) => {
            return $http({ method: "POST", url: "api/identity/register", data: JSON.stringify(params.model) }).then((results) => {
                return results.data.token;
            }).catch(() => {

            });
        };

        self.getCurrentUser = () => {
            return $http({ method: "GET", url: "api/user/getCurrentUser" }).then((results) => {
                currentUser.set({ data: results.data });
                return currentUser.get();
            }).catch(() => {

            });
        };

        return self;
    }

}