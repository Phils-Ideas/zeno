/**
 * Created by PhilBeadle on 24/07/15.
 */
module.exports = function () {
    this.Before(function (done) {

        var client = this.client;
        //var server = this.server;
        var url = require('url');

        this.EditorPage = {

            navigateTo: function () {
                var completeUrl = url.resolve(process.env.ROOT_URL, '/zenoEditor');
                return client.url(completeUrl);
            },
            title: function(){
                //Hooked up to component from drag drop phase.
                return client.
                    waitForExist('body').getTitle();
            }
        };
        done();
    });
};
