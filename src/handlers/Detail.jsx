/** @jsx React.DOM */
'use strict';

var React = require('react'),
    Router = require('react-router'),
    debug = require('debug')('App'),
    Promise = require('es6-promise').Promise,
    pageMetaActionCreators = require('../actions/pageMetaActionCreators');

var Link = Router.Link;

var Detail = function (context) {
      return React.createClass({

        // statics: {
        //   willTransitionTo: function (transition) {
        //     var promise = new Promise(function (resolve, reject) {
        //       setTimeout(function () {
        //         resolve('yay');
        //       }, 200);
        //     });
        //     debug('willTransitionTo');
        //     transition.wait(promise);
        //   }
        //},

        componentWillMount: function () {
          context.executeAction(pageMetaActionCreators.setPageMeta, {
              title: 'Detail'
          });
        },

        render: function() {
            return (
                <div>
                  <p>Detail</p>
                  <Link to="root">root</Link>
                </div>
            );
        }

    });
};

module.exports = Detail;