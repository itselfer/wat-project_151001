var App_wat = angular.module("App_wat", ['ngRoute']);

App_wat.controller("layout_header", function($scope) {
  $scope.txt_header = "Who is a good Teacher?";
});

App_wat.filter("myUpperFilter", function() {
  return function(input) {
    return input.toUpperCase();
  }
});

App_wat.directive('divHeader', function() {
	return {
		restrict: 'EA',
		// template 속성은 하나의 태그(ex, div)에 감싼 태그들의 집합만 부를 수 있음.
		template: '<header class="cls_header">{{txt_header | myUpperFilter}}</header>',
		
	};
});