const Positions = require('./src/class/position')
const Rovers = require('./src/class/rovers')

const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout })

;(() => {
    readline.on('line', (data) => {
        process.exit()
        
    })
})()