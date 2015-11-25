var app = angular.module("lab1",["ngRoute"])

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'view1.html',
		controller: "enter"
	});
	$routeProvider.when('/view2', {
		templateUrl: 'view2.html',
		controller: "disp"
	});
});

app.controller("enter",function($scope, viewf){
	$scope.sub = function (){
		viewf.setData($scope.input1, $scope.input2)

	}


})

app.controller("disp",function($scope, viewf){
	$scope.display1 = viewf.input1;
	$scope.display2 = viewf.input2;
})

app.factory("viewf",function(){
var container = {};
container.setData = function(inp1infactory, inp2infactory){
	container.input1 = inp1infactory;
	container.input2 = inp2infactory;

}
return container;
});


