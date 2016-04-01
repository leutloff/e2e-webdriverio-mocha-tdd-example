/* global browser */
'use strict';

var assert = require('chai').assert;

suite('Run web app \'page test\' using webdriverio/Selenium.', function() {

    setup(function() {
        //console.log('--setup--');
        // Navigate to the home page for each test
        browser.url('/');
    });

    test('checks the title only', function() {
        var title = browser.getTitle();
        //console.log('Title was: ' + title);
        assert.strictEqual(title, 'Library');
    });

    test('should be able to navigate between the pages', function() {
        var title = browser.getTitle();
        //console.log('Title was: ' + title);
        assert.strictEqual(title, 'Library');

        browser.click('#authors').waitForExist('#back', 10000);
        title = browser.getTitle();
        //console.log('Title was: ' + title);
        assert.strictEqual(title, 'Authors');
        var author = browser.getText('#author1');
        //console.log('#author1: ' + author);
        assert.include(author, 'Patrick Rothfuss', 'assert that the author is Patrick');

        browser.click('#back').waitForExist('#books', 1000);
        title = browser.getTitle();
        assert.strictEqual(title, 'Library');

        browser.click('#books').waitForExist('#back', 1000);
        title = browser.getTitle();
        //console.log('Title was: ' + title);
        assert.strictEqual(title, 'Books');
        var book = browser.getText('#book1');
        //console.log('#book1: ' + book);
        assert.strictEqual(book, 'Wise Man\'s Fear');

        browser.click('#back').waitForExist('#authors', 1000);
        title = browser.getTitle();
        //console.log('Title was: ' + title);
        assert.strictEqual(title, 'Library');
    });

});
