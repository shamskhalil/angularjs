(() => {
    angular.module('lexMod')
        .controller('LoginCtrl', function ($scope, $state, LexClassService, AuthService) {
            const t = AuthService.getToken();
            if (t && t.length > 5) {
                $state.go('home.dashboard');
            }

            $scope.username = 'micro@micro.com';
            $scope.password = 'secret';
            $scope.login = function () {
                LexClassService.doLogin($scope.username, $scope.password)
                    .success((obj) => {
                        AuthService.saveCredentials(obj.payload.user, obj.payload.token);
                        $state.go('home.dashboard');
                    })
                    .catch((err) => {
                        console.log(err);
                        alert(err.data.message);
                    })
            }
        })

})();

