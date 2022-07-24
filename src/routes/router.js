// 🌹oddFEELING

const { Router } = require('express');
const ResponseMiddleware = require('../middlewares/response.middleware');
const MessageRouter = require('./messages.routes');

const AppRouter = Router();
ResponseMiddleware(AppRouter);

AppRouter.route('/').get((req, res) => {
  res.status(200).json({ msg: 'UBS Backend server' });
});

AppRouter.use(MessageRouter);

module.exports = AppRouter;
