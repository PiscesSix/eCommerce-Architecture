'user strict'

const mongoose = require('mongoose')
const os = require('os')
const process = require('process')

const _SECOND = 5000

// count connects
const countConnect = () => {
    const numConection = mongoose.connections.length
    return console.log(`Number of connections::${numConection}`)
    // return numConection
}

// check over load connects
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        // Example maxium number of connections based on number osf cores
        const maxConnections = numCores * 5

        console.log(`Active connections: ${numConnection}`)
        console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`)

        if (numConnection > maxConnections){
            console.log(`Connection overload detected!!`)
        }
    }, _SECOND); // Monitor every 5 seconds
}

module.exports = {
    countConnect,
    checkOverload
}
