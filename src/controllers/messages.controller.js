// 🌹oddFEELING

const msgService = require('../services/messages.service');
const CustomError = require('../utils/customError.utils');
const { log } = require('../utils/customLogger.utils');

/**
 * msg controller for route handling
 * @category Controllers
 * @example <caption>Using the controller for sample route</caption>
 * const msg_ctrl = require('path/to/controller')
 *
 * const msgRoute = express.Router()
 * msgRoute
 * .route('/api/messages')
 * .use(msg_ctrl.CREATE)
 */
class msg_ctrl {
  /**
   *
   * @param {req} req - request Object
   * @param {res} res - response Object
   * @returns Newly created msg
   */
  async CREATE(req, res) {
    const msgData = req.body;
    console.log(req.body);
    const queryData = await msgService.CREATE(msgData);
    log.data(queryData);
    res.created(queryData, 'New msg');
  }

  /**
   *
   * @param {*} req - request Object
   * @param {*} res - Response Object
   * @returns List of all messages
   */
  async GET(req, res) {
    const queryData = await msgService.GET();
    res.found(queryData, 'All messages');
  }

  /**
   *
   * @param {*} req - request Object
   * @param {*} res - Response Object
   * @returns Single msg by ID
   */
  async GET_BY_ID(req, res, next) {
    const msgId = req.params.id;
    const queryData = await msgService.GET_BY_ID(msgId);

    // ======= check for null data -->
    queryData === null
      ? next(new CustomError(`No msg found with ID ${msgId}`, 404))
      : res.found(queryData, `msg with id ${msgId || null}`);
  }

  /**
   *
   * @param {*} req - request Object
   * @param {*} res - Response Object
   * @returns update stats of all messages
   */
  async UPDATE(req, res) {
    const updateData = req.body;
    const queryData = await msgService.UPDATE(updateData);
    res.updated(queryData, 'All messages');
  }

  /**
   *
   * @param {*} req - request Object
   * @param {*} res - Response Object
   * @returns Updated msg
   */
  async UPDATE_BY_ID(req, res) {
    const msgId = req.params.id;
    const updateData = req.body;
    const queryData = await msgService.UPDATE_BY_ID(msgId, updateData);
    res.updated(queryData, 'Single msg');
  }

  /**
   *
   * @param {*} req - request Object
   * @param {*} res - Response Object
   * @returns Delete details of deleted msg
   */
  async DELETE(req, res, next) {
    const msgId = req.params.id;
    const queryData = await msgService.DELETE(msgId);

    // ======= check if delete count is more than 0 -->
    queryData === null
      ? next(new CustomError('No found document to be deleted', 404))
      : res.deleted(queryData, msgId || 'Single msg');
  }

  async REPAIR_REQUEST(req, res) {
    const msgId = req.params.id;
  }
}

module.exports = new msg_ctrl();
