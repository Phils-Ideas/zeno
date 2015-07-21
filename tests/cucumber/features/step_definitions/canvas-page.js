(function () {

    'use strict';
    module.exports = function () {

        this.Given(/^I navigate to the default page of the zeno canvas site$/, function (callback) {
            // Write code here that turns the phrase above into concrete actions
            callback.pending();
        });

        this.Then(/^I will see the following cards$/, function (table, callback) {
            return this.CanvasPage.checkCards(table);
        });
    };

})();
