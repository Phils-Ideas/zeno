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
                var completeUrl = url.resolve(process.env.ROOT_URL, '/zeno-editor');
                return client.url(completeUrl);

            },
            heading: function(){
                return client.waitForExist('h1').getText('.zeno-editor h1');
            },
            title: function(){
                return client.waitForExist('body').getTitle();
            },
            editorContent: function(){
                return client.waitForExist('body').getTitle();
            },
            renderedEditorContent: function(){
                return client.waitForExist('body').getText('.zeno-editor-content');
            }
        };
        done();
    });
};
