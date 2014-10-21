'use strict';

var util = require('util'),
    BaseStore = require('dispatchr/utils/BaseStore'),
    debug = require('debug')('App'),
    actionTypes = require('../constants/actionTypes');

var setPageMeta = function (payload) {
    debug('title set in PageMetaStore ' + payload.title);
    this.title = payload.title;
    this.emitChange();
};

function PageMetaStore (dispatcher) {
    this.dispatcher = dispatcher;
    this.title = null;
}

PageMetaStore.storeName = 'PageMetaStore';
PageMetaStore.handlers = {};
PageMetaStore.handlers[actionTypes.SET_PAGE_META] = setPageMeta;

util.inherits(PageMetaStore, BaseStore);


PageMetaStore.prototype.getTitle = function () {
    return this.title;
};


PageMetaStore.prototype.dehydrate = function () {
    return {
        title: this.title
    };
};

PageMetaStore.prototype.rehydrate = function (state) {
    this.title = state.title;
};

module.exports = PageMetaStore;
