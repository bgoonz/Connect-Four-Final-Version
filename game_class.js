import {
    Column
} from './column_class.js'

export class Game {
    constructor( player1, player2 ) {
        this.player1 = player1
        this.player2 = player2
        this.currentPlayer = 1
        this.columns = Array.from( Array( 7 ), () => new Column )
    }

    getName() {
        return `${this.player1} vs. ${this.player2}`
    }

    playInColumn( colNum ) {

        this.columns[ colNum ].add( this.currentPlayer );

        if ( this.currentPlayer === 1 ) {
            this.currentPlayer = 2
        } else {
            this.currentPlayer = 1
        }
    }

    getTokenAt( rowNum, colNum ) {
        const column = this.columns[ colNum ]
        return column.getTokenAt( rowNum )

    }

    isColumnFull( colNum ) {
        const column = this.columns[ colNum ]
        return column.isFull()

    }
}