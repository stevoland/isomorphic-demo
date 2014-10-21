/** @jsx React.DOM */
'use strict';

var React = require('react');
var PageMetaStore = require('../stores/PageMetaStore');
var Box = require('../components/Box.jsx');
var debug = require('debug')('App');

var App = function (context) {
  return React.createClass({

    componentDidMount: function() {
      this.PageMetaStore = context.getStore(PageMetaStore);
      this.PageMetaStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      this.PageMetaStore.removeChangeListener(this._onChange);
    },

    render: function() {
      debug('App.jsx render');

      return (
        <div id="App">
          <this.props.activeRouteHandler />
          <Box />
        </div>
      );
    },

    _onChange: function() {
      document.title = this.PageMetaStore.getTitle();
    }
  });
};

module.exports = App;