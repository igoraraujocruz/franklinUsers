'use strict'

const uuid = require('uuid');

const UserHook = exports = module.exports = {}

UserHook.uuid = async (user) => {
  user.id = uuid.v4()
}
