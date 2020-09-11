export class Column { // make available to other modules for use
    constructor() {
        //each element in the array (that serves as the value to this property) represents one row of a given column 
        // each null represents one grid square in in a specific row for the column to be replaced by a number that represents whichever player has a pice on that square
        this.rows = [
            null, //r0
            null,
            null,
            null,
            null,
            null //r5
        ]

    }

    // a Column method to populate the rows array (who's elements collectively comprise a single column) with player numbers 
    // //as those spots are occupied by player pieces (tokens)
    add( playerNum ) {
        for ( let i = this.rows.length - 1; i >= 0; i-- ) { // iterate through the column's rows starting at 5
            if ( !this.rows[ i ] ) { // if the value at rows[i] is null
                this.rows[ i ] = playerNum // assign that element a value of playerNum
                break // if a player number is added to a square exit the method
            }
        }
    }

    getTokenAt( rowNum ) { // returns either null, 1, or 2
        return this.rows[ rowNum ]
    }

    isFull() { // returns bool
        return this.rows[ 0 ] !== null; // if the top row of the column has a token the row is full
    }



}