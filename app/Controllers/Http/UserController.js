'use strict'

const User = use("App/Models/User")

class UserController {
  async create ({ request }) {
    const {name, email} = request.only(["name", "email"])

    const user = await User.create({name, email})

    return user
  }

  async index({ request, response }) {

    if (!request.input('email')) {
      const user = await User.all()
      return user;
    }

    const user = await User.findBy('email', request.input('email'))
    if(!user) {
      response.status(400).send('email not found')
    }
    return user;
  }
}

module.exports = UserController
