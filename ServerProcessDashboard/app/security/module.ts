﻿module SecurityModule {

    angular.module("security", [
            "configuration",
            "common",
            "core",
            "session",
            "group",
            "role",
            "user",
            "ngRoute"
        ])
        .config(config);


    config.$inject = ["$routeProvider"];

    function config($routeProvider) {
        
        $routeProvider.when("/signin",
            {
                templateUrl: "app/security/templates/signin.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: false,
                caseInsensitiveMatch: true
            });

        $routeProvider.when("/security",
            {
                templateUrl: "app/security/templates/security.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/role/add",
            {
                templateUrl: "/app/security/templates/addrole.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/role/edit/:roleid",
            {
                templateUrl: "/app/security/templates/addrole.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/role/list",
            {
                templateUrl: "/app/security/templates/roles.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/user/changepassword/:changepasswordid",
            {
                templateUrl: "/app/security/templates/changepassword.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/user/add",
            {
                templateUrl: "/app/security/templates/adduser.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/user/edit/:userid",
            {
                templateUrl: "/app/security/templates/adduser.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/user/list",
            {
                templateUrl: "/app/security/templates/users.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/group/add",
            {
                templateUrl: "/app/security/templates/addgroup.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/group/edit/:groupid",
            {
                templateUrl: "/app/security/templates/addgroup.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/group/list",
            {
                templateUrl: "/app/security/templates/groups.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
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
} 