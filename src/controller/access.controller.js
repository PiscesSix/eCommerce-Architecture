'use strict'

class AccessController {
    signUp = async ( req, res, next ) => {
        try {
            console.log(`[P]::signUp::`, req.body)
            return res.status(201).json({
                code: '20001', // code riêng trong team lập trình
                metadata: {userid: 1}
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new AccessController()