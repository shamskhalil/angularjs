(() => {

    const app = angular.module('lexMod');

    app.service('AuthService', function () {
        const USERKEY = 'USEROBJ';
        const TOKENKEY = 'TOKENOBJ';

        let _loggedIn = false;

        function saveCredentials(user, token) {
            _loggedIn = true;
            window.localStorage.setItem(USERKEY, JSON.stringify(user));
            window.localStorage.setItem(TOKENKEY, token);
        }

        function getToken() {
            let token = window.localStorage.getItem(TOKENKEY);
            if (token) {
                return token;
            } else {
                return null;
            }
        }

        function getUser() {
            let user = window.localStorage.getItem(USERKEY);
            if (user) {
                user = JSON.parse(user);
                return user;
            } else {
                return null;
            }
        }

        function isUserLoggedIn() {
            return _loggedIn;
        }
        function clearCredentials() {
            _loggedIn = false;
            window.localStorage.removeItem(USERKEY)
            window.localStorage.removeItem(TOKENKEY);
        }

        return {
            saveCredentials,
            getToken,
            getUser,
            isUserLoggedIn,
            clearCredentials
        }
    })


})();
