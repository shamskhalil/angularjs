(() => {
    const app = angular.module('lexMod');

    app.controller('MainCtrl', function ($scope, LexClassService) {
        $scope.selectedItem = null;

        var obj = {};



        var itemIndex;
        $scope.items = [];
        $scope.addItem = function () {
            $scope.items.push($scope.newItem);
            $scope.newItem = '';
        }

        $scope.deleteItem = function (idx) {
            $scope.items.splice(idx, 1);
        }

        $scope.setSelectedItem = function (item, idx) {
            $scope.selectedItem = item;
            itemIndex = idx;
        }

        $scope.updateItem = function () {
            $scope.items[itemIndex] = $scope.selectedItem;
            $scope.selectedItem = null;
        }

    })


})();

