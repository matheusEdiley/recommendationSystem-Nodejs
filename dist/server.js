'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.server = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _serverConfig = require('./serverConfig');

require('./routes');

var _UserRoute = require('./Users/UserRoute');

var _RecommendationRoute = require('./Recommendations/RecommendationRoute');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import {routerTest} from './routes/testRoutes';
_serverConfig.server.use('/users', _UserRoute.UserRoute);
_serverConfig.server.use('/recommendations', _RecommendationRoute.RecommendationRoute);

exports.server = _serverConfig.server;