module.exports = function () {
    this.Before(function (done) {

        var client = this.client;
        var server = this.server;

        this.CanvasPage = {

            checkCards: function () {
                return client.
                    waitForExist('body');
            },

            logout: function () {
                return client.executeAsync(function (done) {
                    Meteor.logout(done);
                });
            },

            createAccount: function (profile) {
                profile = profile || {
                        periodEnd: Math.floor(new Date().getTime() / 1000)
                    };

                return server.call('fixtures/createAccount', {
                    email: 'me@example.com',
                    password: 'letme1n',
                    profile: profile
                });
            },

            createAccountAndLogin : function(profile) {
                var self = this;
                return self.createAccount(profile).then(function() {
                    return self.login();
                });
            }

        };

        done();

    });
};
