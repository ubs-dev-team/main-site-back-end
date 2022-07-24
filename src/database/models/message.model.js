// 🌹oddFEELING

const mongoose = require('mongoose');

/**
 * @constructor
 * @category Schemas
 *
 * @property {String} [sender = 'Anonymous' ]- ASender of the message
 * @property {String} contact - Contact of the sender
 * @property {String} title - Message title
 * @property {String} content - Content of the message
 * @property {('read' | 'unread')}  status - read status of the message
 */
const MessageSchema = new mongoose.Schema(
  {
    sender: { type: String, required: true, default: 'Anonymous' },
    contact: String,
    title: { type: String, required: true, default: 'No title' },
    content: { type: String, required: true, default: 'No content' },
    status: {
      type: String,
      required: true,
      default: 'unread',
      enum: ['read', 'unread'],
    },
  },
  { collection: 'messages', timestamps: true }
);

const MsgModel = mongoose.model('messages', MessageSchema);

module.exports = MsgModel;
