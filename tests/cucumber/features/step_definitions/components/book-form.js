/**
 * Created by PhilBeadle on 4/08/15.
 */
module.exports = function () {
    this.Before(function (done) {
        var client = this.client;
        this.BookForm = {
            setTitle: function (title) {
                return client.waitForExist('input[name="title"]').setValue('input[name="title"]', title);
            },
            setAuthor: function (author) {
                return client.waitForExist('input[name="author"]').setValue('input[name="author"]', author);
            },
            setCopies: function (copies) {
                return client.waitForExist('input[name="copies"]').setValue('input[name="copies"]', copies);
            },
            setSummary: function (summary) {
                return client.waitForExist('input[name="summary"]').setValue('input[name="summary"]', summary);
            }
        };
        done();
    });
};
