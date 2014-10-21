'use strict';

var actionTypes = require('../constants/actionTypes');

module.exports = {
    setPageMeta: function (context, payload, done) {
        context.dispatch(actionTypes.SET_PAGE_META, payload);
        done();
    }
};
