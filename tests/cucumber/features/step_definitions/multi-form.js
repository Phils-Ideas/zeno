(function () {
    'use strict';
    module.exports = function () {
        this.Given(/^I fill out the registration form with valid data$/, function (callback) {
            this.RegistrationForm.setName('Phil');
            this.RegistrationForm.setEmail('Phil@odecee.com.au');
            this.RegistrationForm.setMessage('A message').then(callback);
        });

        this.When(/^I fill out the book form with valid data$/, function (callback) {
            this.BookForm.setTitle('Humans Create, Computers Automate');
            this.BookForm.setAuthor('Philip Beadle');
            this.BookForm.setCopies('5');
            this.BookForm.setSummary('A book about doing less').then(callback);
        });
    };
})();
