/** @jsx React.DOM */

var React = require('react');
var ReactStyle = require('react-style');

var Box = React.createClass({

    style: ReactStyle({
      backgroundColor: 'red',
      height: '100px',
      width: '100px'
    }),

    render: function() {
      return (
        <div styles={[this.style]}>
          {this.props.children}
        </div>
      );
    }

});

module.exports = Box;