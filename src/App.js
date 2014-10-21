'use strict';
var Context = require('./Context'),
    PageMetaStore = require('./stores/PageMetaStore'),
    // ThreadStore = require('./stores/ThreadStore'),
    // Application = require('./components/ChatApp.jsx'),
    debug = require('debug');
    //bootstrapDebug = debug('Example');

Context.registerStore(PageMetaStore);
// Context.registerStore(ThreadStore);

function App (options) {
    options = options || {};
    var fetcher = options.fetcher,
        initialState = options.initialState;

    debug('Creating context');
    this.context = new Context({
        //fetcher: fetcher
    });
    if (initialState) {
        this.context.rehydrate(initialState);
    }
}

// App.prototype.getComponent = function () {
//     debug('Creating Application component');
//     var appComponent = Application({context: this.context.getComponentContext()});
//     debug('Rendering Application component');
//     return appComponent;
// };

module.exports = App;
