'use-strict'



class Positions {
    constructor() {
        this.positions = {}
        this.default = 1
    }

    static cordenations() {
        this.positions = {
            'N': {
                left: 'W',
                right: 'E'
            },
            'W': {
                left: 'S',
                right: 'N'
            },
            'S': {
                left: 'E',
                right: 'W'
            },
            'E': {
                left: 'N',
                right: 'S'
            }
        }

        return this.positions
    }
    static commands() {

    }

    static move() {

    }
}

module.exports  =  Positions 