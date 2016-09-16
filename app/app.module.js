var app = angular.module('todo', []);

app.controller('TodoController',function($scope){
    $scope.todos = [];
    $scope.show = 'All';
    $scope.add = function() {
        $scope.todos.push({text:$scope.action,done: false});
        $scope.action = '';
    }
    $scope.delete = function() {
        $scope.todos.splice(this.$index,1);
    }
    $scope.showFn = function(todo) {
        if($scope.show === 'All') {
            return true;
        }
        else if (todo.done && $scope.show === 'Complete') {
            return true;
        }
        else {return false;}
    }
});

