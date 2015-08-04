/**
 * Created by PhilBeadle on 4/08/15.
 */
module.exports = function () {
    this.Before(function (done) {

        var client = this.client;
        //var server = this.server;

        this.RegistrationForm = {
            getName: function () {
                return client.waitForExist('input[name="name"]').getText('input[name="name"]');
            },
            setName: function (name) {
                return client.waitForExist('input[name="name"]').setValue('input[name="name"]', name);
            },
            setEmail: function (email) {
                return client.waitForExist('input[name="email"]').setValue('input[name="email"]', email);
            },
            setMessage: function (message) {
                return client.waitForExist('input[name="message"]').setValue('input[name="message"]', message);
            }
        };
        done();
    });
};
