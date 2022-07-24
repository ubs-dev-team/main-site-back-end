// 🌹oddFEELING

const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const { log } = require('../utils/customLogger.utils');

/**
 * Used to apply all pre-route middlewares
 *
 * @constructor
 * @category Middlewares
 * @param {*} app - Instance of express app
 *
 * @property {Middleware} helmet - For Basic http method security
 * @property {middleware} cors - For Cross origin resource sharing
 * @property {Middleware} morgan - For logging API call info
 * @property {Middleware} express.json - For parsing JSON objects in request body
 *
 * @returns {void}
 * @example <caption>Usage</caption>
 * const App = express() // express app instance
 * pre_route(App) // Wrap app in pre_route to apply middlewares
 */
const pre_routes = (app) => {
  if (!app)
    return log.error(
      'pre_routes middleware expocts 1 argument but got nothing'
    );

  app
    .use(helmet())
    .use(cors())
    .use(morgan('[:status] :method :url'))
    .use(express.json());
};

module.exports = pre_routes;
