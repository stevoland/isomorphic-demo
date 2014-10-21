'use strict';
require('node-jsx').install({ extension: '.jsx' });

var http = require('http'),
    path = require('path'),
    express = require('express'),
    expressState = require('express-state'),
    bodyParser = require('body-parser'),
    debug = require('debug')('App'),
    React = require('react/addons'),
    Router = require('react-router'),
    App = require('./App'),
    Routes = require('./Routes.jsx'),
    PageMetaStore = require('./stores/PageMetaStore');

var app = express();
expressState.extend(app);
app.set('state namespace', 'App');
app.set('views', __dirname);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static(path.join(__dirname, '..', 'static')));

app.use(bodyParser.json());

app.use(function reactRouterMiddleware(req, res, next) {
  var app = new App({});

  var routes = Routes(app.context.getComponentContext());

  debug('Rendering');

  Router.renderRoutesToString(routes, req.path, function (err, abortReason, markup) {
    debug('rendered');
    debug(arguments);
    if (err) {
      if (err.status && err.status === 404) {
        next();
      } else {
        next(err);
      }
      return;
    }
    debug(markup);

    debug(app.context.dehydrate());
    res.expose(app.context.dehydrate(), 'Context');
    res.render('layout', {
      markup: markup,
      title: app.context.getActionContext().getStore(PageMetaStore).getTitle()
    }, function (err, html) {
      debug(err);
      if (err) {
        next(err);
      }
      debug('Sending markup');
      debug(html);
      res.send(html);
    });
  })
});

var port = process.env.PORT || 3000;
http.createServer(app).listen(port);
console.log('Listening on port ' + port);
