App_wat.controller("layout_section", function($scope) {
  $scope.div_section = {
  	div : '<input type="button" value="learn"/>'
  };
});

App_wat.directive("sectionMain", function() {
  return {
      restrict: 'EA',
      // template 속성은 하나의 태그(ex, div)에 감싼 태그들의 집합만 부를 수 있음.
      template: '',
      replace: true, // template 적용 시 true
      transclude: true // index.html에 추가된 내용도 포함 시 true
  };
});