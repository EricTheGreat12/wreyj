import { gameBoard } from "./gameBoard";

export const game = (() => {
    let row = 0;
    let col = 0;

    const gameArray = new Array(6);
    for (let i = 0; i < gameArray.length; i++) {
        gameArray[i] = new Array(5);
    }

    const resetAll = () => {
        row = 0;
        col = 0;
        for (let i = 0; i < gameArray.length; i++) {
            for (let x = 0; x < gameArray[i].length; x++) {
                gameArray[i][x] = { char: "", state: ""};
            }
        }
    }

    const playChar = (char) => {
        if (col < 5) {
            gameArray[row][col].char = char;
            gameArray[row][col].state = "unchecked";
            gameBoard.updateSquare(row, col, gameArray[row][col]);
            col++;
        }
    }

    const del = () => {
        if (col > 0) {
            col--
            gameArray[row][col].char = "";
            gameArray[row][col].state = "";
            gameBoard.updateSquare(row, col, gameArray[row][col]);
        }
    }

    //game.enter()
    //game.checkWord()
    

    //game.del()

    return { resetAll, playChar, del }
})();