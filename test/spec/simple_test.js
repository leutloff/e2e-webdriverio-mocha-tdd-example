/* global browser */
'use strict';

var assert = require('chai').assert;

suite('Run a \'simple test\' using webdriverio/Selenium.', function() {

    test('Getting the home page', function() {
        //browser.url('http://localhost:3000');
        browser.url('/'); // baseurl 'http://localhost:3000' is pretended
        var title = browser.getTitle();
        //console.log('Title was: ' + title);
        assert.strictEqual(title, 'Library');
    });

});
