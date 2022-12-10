const Users = require('../models/users.models')
const uuid = require('uuid')
const { hashPassword } = require('../utils/crypto')

const findAllUsers = async () => {
    const data = await Users.findAll()
    return data
}

const findUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createUser = async (obj) => { // Encrypt password
    const data = await Users.create({
        id: uuid.v4(),
        first_name: obj.first_name,
        last_name: obj.last_name,
        user_name: obj.user_name,
        email: obj.email,
        password: hashPassword(obj.password),
        age: obj.age,
        country: obj.country
    })
    return data
}

const updateUser = async (id, obj) => {
    const data = await Users.update(obj, {
        where: {
            id: id
        }
    })
    return data[0]   // Returns an array, this array can look like these 2 ways [1], [0]
}

const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id: id
        }
    })
    return data // Returns 1 in case it has been deleted, or 0 in case the id does not exist
}

const getUserByEmail = async (email) => {
    const data = await Users.findOne({
        where: { email: email }
    })
    return data
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserByEmail
}