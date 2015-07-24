/**
 * Created by PhilBeadle on 24/07/15.
 */
(function () {
    'use strict';
    module.exports = function () {
        this.Then(/^I will see the A & D editor$/, function (callback) {
            this.EditorPage.title().should.become('zeno').and.notify(callback);
        });
    };
})();
