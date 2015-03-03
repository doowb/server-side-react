'use strict';

var React = require('react');
var transform = require('react-tools').transform;

var fs = require('fs');
var handlebars = require('handlebars');

var template = fs.readFileSync('./index.hbs', 'utf8');
var jsx = fs.readFileSync('./app.jsx', 'utf8');

// Wrap the source with code to resolve dependencies
// and export the Element
var src = [
  'var React = require(\'react\');',
  // transform the jsx to javascript
  transform(jsx),
  'module.exports = HelloWorld;'
].join('\n');

// eval the javascript to get the HelloWorld Element
var HelloWorld = eval(src);

// create a React Factory to be able to pass properties to the Element
var App = React.createFactory(HelloWorld);

// pass propertiers to the element and get a function back
var app = App({message: 'Hello Server World'});

// use the created function to render the app to an html string
var content = React.renderToStaticMarkup(app);

// use handlebars to populate the html file
var html = handlebars.compile(template)({ content: content, appjs: jsx });

fs.writeFileSync('./index.html', html);
