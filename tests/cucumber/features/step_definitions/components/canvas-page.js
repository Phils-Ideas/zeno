module.exports = function () {
    this.Before(function (done) {

        var client = this.client;
        //var server = this.server;

        this.CanvasPage = {

            checkCards: function (table) {
                return client.
                    waitForExist('body');
            }
        };
        done();
    });
};
