// 🌹oddFEELING

const express = require('express');
const AppRouter = require('./routes/router');
const { PORT } = require('./config/env.config');
const { log } = require('./utils/customLogger.utils');
const errorMiddleware = require('./middlewares/error.middleware');
const mongoConnect = require('./database/connect');
const pre_routesMiddleware = require('./middlewares/pre_routes.middleware');

// ======= create app instance -->
const app = express();
pre_routesMiddleware(app);
app.use(AppRouter);
errorMiddleware(app);

// ======= start mongo connection -->
mongoConnect();
// ======= start server -->
app.listen(PORT, (err) => {
  if (err) return log.error('Error starting server');
  // ======= start server -->
  log.success('Server started!');
});

// ======= handle uncaught and unhandled errors -->
process.on('unhandledRejection', (error) => {
  console.log(error.message);
});

process.on('uncaughtException', (error) => {
  console.log(error.message);
});
