/*global document, window */
'use strict';
var React = require('react/addons'),
    debug = require('debug'),
    appDebug = require('debug')('App'),
    App = require('./App'),
    Routes = require('./Routes.jsx'),
    ReactStyle = require('react-style')

if (typeof window !== 'undefined') {
    window.React = React; // For chrome dev tool support
    debug.enable('*');

    appDebug('rehydrating app');
    var app = new App({
        initialState: window.App && window.App.Context // Bootstrapped from server
    });
    window.context = app.context;

    appDebug('React Rendering');
    var routes = Routes(app.context.getComponentContext());
    window.__ReactStyle__ = undefined; // Hack
    ReactStyle.inject();
    React.renderComponent(routes, document.getElementById('Mount'), function () {
        appDebug('React Rendered');
    });
}