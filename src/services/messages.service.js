// 🌹oddFEELING

const CustomError = require('../utils/customError.utils');
const Msg = require('../database/models/message.model');

/**
 * Message service class
 * Handles all msg services
 * @category Services
 *
 * @example <caption>Creating a new msg</caption>
 * // calling in msg.controller.js
 * const msg_service = require('path/to/msg_service.js')
 *
 * const msgData = req.body
 * const newmsg = await msg_service.CREATE(msgData)
 * res.status(201).send(newmsg)
 */
class msg_service {
  /**
   * Creates a new msg
   * @method
   * @param {Object} msgData - New msg data
   * @returns {Msg}
   */
  async CREATE(msgData) {
    const newMsg = await Msg.create(msgData);
    return newMsg;
  }

  /**
   * Gets all Msg (no params needed)
   * @returns  {Msg[]}
   */
  async GET() {
    const allMsg = await Msg.find({}).lean();
    return allMsg;
  }

  /**
   *  Gets a single msg by ID
   * @param {String} msgId - ID of single msg to be fetched
   * @returns {Msg}
   */
  async GET_BY_ID(msgId) {
    const msg = await Msg.findById(msgId);
    return msg;
  }

  /**
   * Updates all msg
   * @param {Object} updateData - Object containing fields to be updated for all msg
   * @returns {Object} status object for the update operation
   */
  async UPDATE(updateData) {
    const updateMsg = await Msg.updateMany(
      {},
      { $set: updateData },
      { new: true }
    );
    return updateMsg;
  }

  /**
   *
   * @param {String} msgId - ID of msg to be updated
   * @param {Object} updateData - Object containing fields to be edited
   * @returns {Msg}
   */
  async UPDATE_BY_ID(msgId, updateData) {
    const updateMsg = await Msg.findOneAndUpdate(
      { _id: msgId },
      { $set: updateData },
      { new: true }
    );
    return updateMsg;
  }

  /**
   *
   * @param {String} msgId - ID of msg to be deletd
   * @returns {Msg}
   */
  async DELETE(msgId) {
    const deleteResponse = await Msg.findByIdAndDelete(msgId);
    return deleteResponse;
  }
}

module.exports = new msg_service();
