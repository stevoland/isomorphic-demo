/** @jsx React.DOM */
'use strict';

var React = require('react'),
    Router = require('react-router'),
    pageMetaActionCreators = require('../actions/pageMetaActionCreators');

var Link = Router.Link;

var Root = function (context) {
      return React.createClass({

        componentWillMount: function () {
          context.executeAction(pageMetaActionCreators.setPageMeta, {
              title: 'Root'
          });
        },

        render: function() {
            return (
                <div>
                  <p>Root</p>
                  <Link to="detail">Detail</Link>
                </div>
            );
        }

    });
};

module.exports = Root;