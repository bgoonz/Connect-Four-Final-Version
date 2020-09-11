// get the Game class from specified file
import {
    Game
} from './game_class.js'
// game variable will instantiate the Game class which sets the player names, player numbers where their tokens are etc....
let game; // initializes to undefined until it is assigned a different value


window.addEventListener( 'DOMContentLoaded', e => {
    const player1Input = document.getElementById( 'player-1-name' ) //Player-1-Name.png
    const player2Input = document.getElementById( 'player-2-name' ) //Player-2-Name.png
    const newGameButton = document.getElementById( 'new-game' ) //New-Game-Btn.png
    const boardHolder = document.getElementById( 'board-holder' ) //Board-Holder.png
    const gameName = document.getElementById( 'game-name' ) //game_name.png
    const clickTargets = document.getElementById( 'click-targets' ) //Click-Targets.png

    //function to update (after each DOM event) the HTML page the user interfaces with

    const updateUI = () => {
        if ( !game ) { // if a game is not in play hide the board
            boardHolder.classList.add( 'is-invisible' )
        } else {
            boardHolder.classList.remove( 'is-invisible' )
            gameName.innerHTML = game.getName()
        }

        if ( game.currentPlayer === 1 ) { // player 1 (who goes first) plays red tokens
            clickTargets.classList.add( 'red' )
            clickTargets.classList.remove( 'black' ) //token_colors.png
        } else {
            clickTargets.classList.add( 'black' )
            clickTargets.classList.remove( 'red' )
        }

        for ( let row = 0; row < 6; row++ ) {
            for ( let col = 0; col < 7; col++ ) {

                //interpolate to select a specific square on the board using ID
                // this is the current element (often refered to as el in week 1 and 2)
                const square = document.getElementById( `square-${row}-${col}` ) //board_squares.png


                const val = game.getTokenAt( row, col ) // game is an instance of Game class and we are calling the getTokenAt method 
                //Game_methods.png
                square.innerHTML = '' // until a token is placed the square defaults to being empty
                if ( val === 1 ) { // if player 1 has a token at the square currently being iterated through 
                    const div = document.createElement( 'div' ) //create a new HTML element 
                    div.classList.add( 'red', 'token' ) // assign it the CSS properties of red color and token shape
                    square.appendChild( div ) // add the red token to the current square
                } else if ( val === 2 ) {
                    const div = document.createElement( 'div' )
                    div.classList.add( 'black', 'token' )
                    square.appendChild( div )
                }

            }
        }
        // search columns to determine if any are full 
        for ( let colNum = 0; colNum < 7; colNum++ ) {
            let col = document.getElementById( `column-${colNum}` ) //Click-Targets.png
            if ( game.isColumnFull( colNum ) ) { // 
                col.classList.add( 'full' ) //elementClassList.png
            } else {
                col.classList.remove( 'full' ) // full.png
            }
        }


    }


    //enable new game when both players have input a name

    const checkInputValues = () => {
        if ( player1Input.value && player2Input.value ) {
            newGameButton.disabled = false
        } else {
            newGameButton.disabled = true
        }
    }

    player1Input.addEventListener( 'keyup', checkInputValues ) // using the checkInputValues function above as our event listener callback
    player2Input.addEventListener( 'keyup', checkInputValues )

    // reset game
    newGameButton.addEventListener( 'click', e => {
        game = new Game( player1Input.value, player2Input.value )
        player1Input.value = ''
        player2Input.value = ''
        newGameButton.disabled = true
        updateUI(); //update_UI.png

    } )

    clickTargets.addEventListener( 'click', e => {
        if ( !e.target.id.startsWith( 'column-' ) ) return
        if ( e.target.classList.contains( 'full' ) ) return
        const colNum = parseInt( e.target.id[ e.target.id.length - 1 ] )
        console.log( colNum )
        game.playInColumn( colNum )
        updateUI()
    } )

} )