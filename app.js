"use strict";

App_wat.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
         templateUrl : './index.html'
    })
    .when('/page_main', {
         templateUrl : './view/page_main.html'
    })
    .when('/page_category/:page_type', {
         templateUrl : './view/page_category.html',
         controller : 'ctr_pageType'
    })
    /* page_category.html을 template으로 공용하고 _learn, _teach에 따라 해당 키워드 페이지로 분류. */
    .when('/page_category_learn', {
        templateUrl : './view/page_category.html'
    })
    .when('/page_category_teach', {
        templateUrl : './view/page_category.html'
    })
    .otherwise({redirectTo : '/'});
});

App_wat.controller('ctr_pageType', function($scope, $route, $routeParams) {
    var pageType = $routeParams.page_type;
    // console.log(pageType);
    if (pageType === "page_learn") {
        $scope.TYPE = {
            name : 'Learn'
        }   
    } else if (pageType === "page_teach") {
        $scope.TYPE = {
            name : 'Teach'
        }
    } else {
        $scope.TYPE = {
            name : 'not found this'
        }
    }
});

App_wat.directive('bindCategory', function(){
    // console.log(pageType);
    return {
        restrict : 'EA',
        // scope : "@",
        template : '<div>{{TYPE.name}} page</div>',
        transclude: true, // index.html에 추가된 내용도 포함 시 true
        replace: true // template 적용 시 true
        // replace : false
    };
});

