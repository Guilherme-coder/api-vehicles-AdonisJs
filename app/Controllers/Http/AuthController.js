'use strict'

const User = use('App/Models/User')

class AuthController {
    async register({ request }){
        const data = request.only(['username', 'email', 'password'])
        const user = await User.create(data)

        return user
    }

    async login({ request, auth }){
        const possibleUser = request.only(['email', 'password'])
        const token = await auth.attempt(possibleUser.email, possibleUser.password)
        let data = [token]
        return data
    }

    async loadSession({ request, auth }){
        return auth.user
    }
}

module.exports = AuthController
