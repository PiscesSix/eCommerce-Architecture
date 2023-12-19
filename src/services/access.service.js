'use strict'

const shopModel = require("../models/shop.model")
const bycrypt = require('bcrypt')
const crypto = require('crypto')

const RoleShop = {
    SHOP: 'SHOP',
    WRITER: 'WRITE',
    EDITOR: 'EDITOR',
    ADMIN: 'ADMIN'
}

class AccessService {
    static signUp = async ({ name, email, password }) => {
        try {
            // step1: check email exists??
            const holderShop = await shopModel.find({ email }).lean()
            if (holderShop){
                return {
                    code: 'xxxx',
                    message: 'Shop alraedy registered!!'
                }
            }
            
            const passwordHash = await bycrypt.hash(password, 10)
            const newShop = await shopModel.create({
                name, email, password: passwordHash, roles: [RoleShop.SHOP]
            })

            if(newShop){
                // created privateKey, publicKey
                const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
                    modulusLength: 4096
                })

                console.log({ privateKey, publicKey })
            }

        } catch(error) {
            return {
                code: 'xxx',
                message: error.message,
                status: 'error'
            }
        }
    }
} 

module.exports = AccessService
// dùng static để khỏi dùng new cho việc tạo class