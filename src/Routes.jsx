/** @jsx React.DOM */
'use strict';

var Router = require('react-router'),
    Routes = Router.Routes,
    Route = Router.Route,
    App = require('./handlers/App.jsx'),
    Root = require('./handlers/Root.jsx'),
    Detail = require('./handlers/Detail.jsx');

module.exports = function (context) {
  if (!context) {
    throw new Error('Must pass in a context');
  }

  return (
    <Routes location="history">
      <Route handler={App(context)}>
        <Route name="root" path="/" handler={Root(context)} />
        <Route name="detail" path="/detail" handler={Detail(context)} />
      </Route>
    </Routes>
  );
};