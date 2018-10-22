'use strict';
var bunbun = angular.module('bunbun', ["ngRoute"]);

bunbun.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html",
        controller: "HomeCtrl"
    })
    .when("/product-view?:name", {
        templateUrl : "product-view.html",
        controller: "ProductCtrl"
    });
});

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/