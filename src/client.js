/*global document, window */
'use strict';
var React = require('react/addons'),
    debug = require('debug'),
    appDebug = require('debug')('App'),
    App = require('./App'),
    Routes = require('./Routes.jsx'),
    dehydratedState = window.App && window.App.Context; // Bootstrapped from server

window.React = React; // For chrome dev tool support
debug.enable('*');

appDebug('rehydrating app');
var app = new App({
    initialState: dehydratedState
});
window.context = app.context;

appDebug('React Rendering');
var routes = Routes(app.context.getComponentContext());
React.renderComponent(routes, document.getElementById('Mount'), function () {
    appDebug('React Rendered');
});
