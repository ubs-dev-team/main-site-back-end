// 🌹oddFEELING

const { Router } = require('express');
const asyncHandler = require('../utils/asyncHandler.utils');
const msg_ctrl = require('../controllers/messages.controller');

const MessageRouter = Router();

MessageRouter.route('/messages')
  .get(asyncHandler(msg_ctrl.GET))
  .post(asyncHandler(msg_ctrl.CREATE))
  .patch(asyncHandler(msg_ctrl.UPDATE));

MessageRouter.route('/messages/:id')
  .get(asyncHandler(msg_ctrl.GET_BY_ID))
  .patch(asyncHandler(msg_ctrl.UPDATE_BY_ID))
  .delete(asyncHandler(msg_ctrl.DELETE));

module.exports = MessageRouter;
