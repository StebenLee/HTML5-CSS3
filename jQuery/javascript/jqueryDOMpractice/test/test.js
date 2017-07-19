console.log = function() {};
global.$ = window.$ = require('jquery');
var rewire = require('rewire'),
    jsdom = require('jsdom').jsdom,
  	appModule = rewire('../js/main.js');

global.document = jsdom('<body></body>');

describe('', function() {
  it ('Did you attach the next function to $(this) to select the projects element?', function() {
    expect(appModule.__get__('main')).to.match(/\$\( *[\'"].projects-button[\'"] *\).on\( *[\'"]click[\'"], *function *\( *\) \{((\n|.)*)\$\( *this *\).next\(.*\)((\n|.)*)\}\)/);
  });

  it ('Did you attach slideToggle to next, and make it last 400 milliseconds?', function() {
    expect(appModule.__get__('main')).to.match(/\$\( *[\'"].projects-button[\'"] *\).on\( *[\'"]click[\'"], *function *\( *\) \{((\n|.)*)\$\( *this *\).next\( *\).slideToggle\( *400 *\)((\n|.)*)\}\)/);
  });
});