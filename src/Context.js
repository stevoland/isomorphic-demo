var Dispatcher = require('dispatchr')();

function Context(options) {
    options = options || {};
    this.dispatcher = new Dispatcher({});
    //this.fetcher = options.fetcher || null;
    this.actionContext = this.getActionContext();
    this.componentContext = this.getComponentContext();
}

Context.registerStore = Dispatcher.registerStore.bind(Dispatcher);

Context.prototype.getComponentContext = function () {
    var self = this;
    return {
        executeAction: function (actionController, payload) {
            actionController(self.actionContext, payload, function (err) {
                if (err) {
                    console.error(err);
                }
            });
        },
        getStore: self.dispatcher.getStore.bind(self.dispatcher)
    }
};

Context.prototype.getActionContext = function () {
    var self = this;
    return {
        dispatch: self.dispatcher.dispatch.bind(self.dispatcher),
        executeAction: function (actionController, payload, done) {
            actionController(self.actionContext, payload, done);
        },
        //fetcher: self.fetcher,
        getStore: self.dispatcher.getStore.bind(self.dispatcher)
    }
};

Context.prototype.dehydrate = function () {
    return {
        dispatcher: this.dispatcher.dehydrate()
    };
};

Context.prototype.rehydrate = function (obj) {
    this.dispatcher.rehydrate(obj.dispatcher || {});
};

module.exports = Context;
