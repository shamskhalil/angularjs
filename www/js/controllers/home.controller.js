(() => {
    angular.module('lexMod')
        .controller('HomeCtrl', function ($scope, AuthService, LexClassService) {
            $scope.user = AuthService.getUser();
            $scope.itemsArray = [];

            LexClassService.fetchUsers(AuthService.getToken())
                .success((users) => {
                    $scope.itemsArray = users.payload;
                })
                .catch((err) => {
                    alert(err.data.message);
                })

            $scope.deleteUser = function (id) {
                LexClassService.deleteUser(AuthService.getToken(), id)
                    .success((res) => {
                        let idx = -1;
                        for (let i = 0; i < $scope.itemsArray.length; i++) {
                            let obj = $scope.itemsArray[i];
                            if (obj._id === id) {
                                idx = i;
                            }
                        }
                        $scope.itemsArray.splice(idx, 1);
                        alert(res.message);
                    })
                    .catch((err) => {
                        alert(err.data.message);
                    })
            }
        })

})();

