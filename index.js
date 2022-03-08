const Positions = require('./src/class/position')
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout })

var input;
var stdin = 1;
var output;
;(() => {
    readline.on('line', (data) => {
        if (stdin == 1) {
            var payload = data.split(" ");
            input = new Positions(payload[0], payload[1]);
            stdin++;
        } else if (stdin == 2) {
            var payload = data.split(" ");
            input.whichPosition(payload[0], payload[1], payload[2]);
            stdin++;
        } else if (stdin == 3) {
            input.commands(data);
            output = input.getPosition();
            stdin++;
        } else if (stdin == 4) {
            var payload = data.split(" ");
            input.whichPosition(payload[0], payload[1], payload[2]);
            stdin++;
        } else if (stdin == 5) {
            input.commands(data);
            console.log('\n')
            console.log(output);
            console.log(input.getPosition());
            process.exit();
        }
    })
})()