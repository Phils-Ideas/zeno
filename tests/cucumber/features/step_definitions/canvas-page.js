(function () {

    'use strict';
    module.exports = function () {

        this.Then(/^I will see the following cards$/, function (table, callback) {
            return this.CanvasPage.checkCards(table);
        });

        this.When(/^I click on a tag on a canvas item$/, function (callback) {
            return this.EditorPage.navigateTo();
        });
    };
})();
