'use-strict'

class Positions {
    constructor(pX, pY) {
        this.pX = pX;
        this.pY = pY;
        this.N = 1;
        this.E = 2;
        this.S = 3;
        this.W = 4;
        this.x = 0;
        this.y = 0;
        this.default = this.N;
    }

    whichPosition(x, y, char) {
        this.x = x;
        this.y = y;
        if (char == 'N') {
            this.default = 1;
        } else if (char == 'E') {
            this.default = 2;
        } else if (char == 'S') {
            this.default = 3;
        } else if (char == 'W') {
            this.default = 4;
        }
    }
    
    getPosition() {
        var char;
        if (this.default == 1) {
            char = 'N';
        } else if (this.default == 2) {
            char = 'E';
        } else if (this.default == 3) {
            char = 'S';
        } else if (this.default == 4) {
            char = 'W'
        }
        return (this.x + " " + this.y + " " + char)
    }
    
    Left() {
        this.default = (this.default - 1) < this.N ? this.W : this.default - 1;
    }
    
    Right() {
        this.default = (this.default + 1) > this.W ? this.N : this.default + 1;
    }
    
    toMove() {
        if (this.default == this.N) {
            this.y++;
        } else if (this.default == this.E) {
            this.x++;
        } else if (this.default == this.S) {
            this.y--;
        } else if (this.default == this.W) {
            this.x--;
        }
    }
    
    commands(commands) {
        for (var value = 0; value < commands.length; value++) {
            this.movement(commands.charAt(value));
        }
    }
    
    movement(command) {
        switch (command) {
            case 'L':
                this.Left()
                break;
            case 'R':
                this.Right()
                break;
            case 'M':
                this.toMove()
                break;
            default:
                break;
        }
    }
}

module.exports  =  Positions 