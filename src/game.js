import { gameBoard } from "./gameBoard";
import { keyboard } from "./keyboard";

export const game = (() => {
    let word = "QWACK";
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

    const enter = () => {
        if (col == 5) {
            checkWord();
        }
        else {
            gameBoard.shakeRow(row);
        }
    }
    
    const checkWord = () => {
        let guess = "";
        for (let i in gameArray[row]) {
            guess += gameArray[row][i].char;
        }
        let i = 0;
        function loop() {
            checkChar(i);
            setTimeout(function() {
                i++;
                if (i < 5) {
                    loop();
                }
                else if (i == 5 && row < 5) {
                    col = 0
                    row++;
                }
            }, 100)
        }
        loop();
    }

    const checkChar = (i) => {
        if (gameArray[row][i].char == word[i]) {
            gameArray[row][i].state = "correct";
            keyboard.updateKey(gameArray[row][i])
            gameBoard.updateSquare(row, i, gameArray[row][i]);
        }
        else if (word.includes(gameArray[row][i].char)) {
            gameArray[row][i].state = "present";
            keyboard.updateKey(gameArray[row][i])
            gameBoard.updateSquare(row, i, gameArray[row][i]);
        }
        else {
            gameArray[row][i].state = "absent";
            keyboard.updateKey(gameArray[row][i])
            gameBoard.updateSquare(row, i, gameArray[row][i]);

        }
    }

    return { resetAll, playChar, del, enter }
})();
