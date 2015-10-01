// section_category
App_wat.controller("ctl_category", function($scope) {
	$scope.select = function(tagName) {
		$scope.selected = tagName;
	};
	/* json 파일로 카테고리 생성 및 삭제 용의하도록 수정. */
	$scope.list = [{
		name: "C",
		songs: ["#/page_learn"]
	}, {
		name: "C++",
		songs: ["Ruby Tuesday", "Satisfaction", "Jumpin' Jack Flash"]
	}, {
		name: "JAVA",
		songs: ["Ruby Tuesday", "Satisfaction", "Jumpin' Jack Flash"]
	}, {
		name: "PHP",
		songs: ["Ruby Tuesday", "Satisfaction", "Jumpin' Jack Flash"]
	}, {
		name: "C#",
		songs: ["Ruby Tuesday", "Satisfaction", "Jumpin' Jack Flash"]
	}, {
		name: "RUBY",
		songs: ["Ruby Tuesday", "Satisfaction", "Jumpin' Jack Flash"]
	}, {
		name: "PYTHON",
		songs: ["Ruby Tuesday", "Satisfaction", "Jumpin' Jack Flash"]
	}, {
		name: "JAVASCRIPT",
		songs: ["Ruby Tuesday", "Satisfaction", "Jumpin' Jack Flash"]
	}, {
		name: "LINUX",
		songs: ["Ruby Tuesday", "Satisfaction", "Jumpin' Jack Flash"]
	}];
});