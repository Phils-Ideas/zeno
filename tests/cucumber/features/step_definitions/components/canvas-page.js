module.exports = function () {
    this.Before(function (done) {

        var client = this.client;
        //var server = this.server;

        this.CanvasPage = {

            checkCards: function (table) {
                //Hooked up to component from drag drop phase.
                return client.
                    waitForExist('body');
            }
        };
        done();
    });
};
