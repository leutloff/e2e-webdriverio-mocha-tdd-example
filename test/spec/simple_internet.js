/* global browser */
'use strict';

var assert = require('chai').assert;

suite('Run a \'simple internet\' test using webdriverio/Selenium.', function() {

    test('Assert access a page on internet by checking the title.', function() {
        browser.url('https://www.google.com');
        // uses property getTitle()
        var title = browser.getTitle();
        console.log('Title was: ' + title);
        assert.strictEqual(title, 'Google');
    });

});
