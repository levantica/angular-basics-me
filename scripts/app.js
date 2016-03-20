angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){

  $scope.learningNgChange = function(){
    console.log("The input changed!")
  };
  $scope.todos = [

    {"name": "scooby do0"},
    {"name": "scooby do1"},
    {"name": "scooby do2"},
    {"name": "scooby do3"},
    {"name": "scooby do4"}
  ];

});
