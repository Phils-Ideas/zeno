/**
 * Created by PhilBeadle on 24/07/15.
 */
(function () {
    'use strict';
    module.exports = function () {
        this.Then(/^I will see the A & D editor$/, function (callback) {
            return this.EditorPage.heading().should.become('zeno-editor');
        });

        this.Then(/^the formatted output$/, function (callback) {
            this.EditorPage.renderedEditorContent().should.become('').and.notify(callback);
        });
    };
})();
