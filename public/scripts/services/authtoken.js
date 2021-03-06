'use strict';

angular.module('psJwtApp').factory('authToken', function($window) {
    var storage = $window.localStorage;
    var cachedToken;
    var cachedSlug;
    var cachedVoted;
    var cachedUserName;
    var userName = "";
    var userToken = 'userToken';
    var isAuthenticated = false;
    var authToken = {
        setToken: function(token) {
            cachedToken = token;
            storage.setItem("userToken", token);
            isAuthenticated = true;
        },     
        getToken: function() {
            if (!cachedToken)
                cachedToken = storage.getItem(userToken);

            return cachedToken;
        },
        setUserName: function(userName){
            cachedUserName = userName;
            storage.setItem("user_name", userName);
            isAuthenticated = true;
        },
        getUserName: function(){
            if (!cachedUserName)
                cachedUserName = storage.getItem("user_name");

            return cachedUserName;
        },
        setSlug: function(slug){
            cachedSlug = slug;
            storage.setItem("user_slug", slug);
        },
        getSlug: function(){
            if(!cachedSlug)
                cachedSlug = storage.getItem("user_slug");
            return cachedSlug;
        },
        setVoted: function(id){
            cachedVoted = cachedVoted + " " + id;
            storage.setItem("user_voted", cachedVoted)
        },
        getVoted: function(){
            if (!cachedVoted)
                cachedVoted = storage.getItem("user_voted");
            return cachedVoted;
        },
        isAuthenticated: function() {
            return !!authToken.getToken();
        },
        removeToken: function() {
            cachedToken = null;
            storage.removeItem(userToken);
            isAuthenticated = false;
        }
    }

    return authToken;
});
