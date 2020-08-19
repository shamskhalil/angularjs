(() => {

    const app = angular.module('lexMod');

    app.service('LexClassService', function ($http, ENDPOINT) {
        function doLogin(username, password) {
            return $http.post(ENDPOINT + '/auth/login', { username, password });
        }

        function fetchUsers(token) {
            return $http.get(ENDPOINT + '/user/?token=' + token);
        }

        function deleteUser(token, id) {
            return $http.delete(ENDPOINT + '/user/' + id + '?token=' + token);
        }

        function addNewUser(userObj) {
            return $http.post(ENDPOINT + '/auth/register', userObj);
        }

        return {
            doLogin,
            fetchUsers,
            deleteUser,
            addNewUser
        }
    })


})();
