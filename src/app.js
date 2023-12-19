require('dotenv').config()
const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
// ghi log
const morgan = require('morgan')

const app = express()

console.log(`Process::`, process.env)
// init middlewares
/*
    Khi sử dụng product thì morgan("combined"), morgan("common"), morgan("short"), morgan("tiny")
*/
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

// init db
require('./dbs/init.mongodb')
const { countConnect, checkOverload } = require('./helpers/check.connect')
countConnect()
checkOverload()

// init router
app.use('', require('./routes'))

// handling error


module.exports = app