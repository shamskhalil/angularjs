(() => {
    angular.module('lexMod')
        .controller('AddUserCtrl', function ($scope, $state, LexClassService) {
            $scope.user = {};

            $scope.saveUser = function () {
                if ($scope.password1 === $scope.password2 && $scope.password1 != '') {
                    $scope.user.password = $scope.password1;

                    LexClassService.addNewUser($scope.user)
                        .success((user) => {
                            alert(user.message);
                            $state.go('home.dashboard');
                        })
                        .catch((err) => {
                            alert(err.data.message);
                        })
                } else {
                    alert('Password mismatch!');
                }
            }


        })

})();

