var App_wat = angular.module("App_wat");

App_wat.controller("layout_footer", function($scope) {
	// ng-model="txt_footer"
	$scope.txt_footer = "copyright All rights reserved. ITselfer.";
});

App_wat.directive('divFooter', function() {
	return {
		restrict: 'EA',
		// template 속성은 하나의 태그(ex, div)에 감싼 태그들의 집합만 부를 수 있음.
		template: '<div class="cls_footer"><p class="footer_innerData">{{txt_footer}}</p></div>',
		
	};
});
