import "./style.css"
const page = (() => {
    const makeHeader = () => {
        const header = document.createElement("header");
        const title = document.createElement("div");
        title.textContent = "WREYJL";
        header.append(title);
        return header;
    }

    const makeGameBoard = () => {
        const gameBoard = document.createElement("div");
        gameBoard.id = "gameBoard";
        let row;
        let squareContainer;
        let square;
        for (let i = 0; i < 6; i++) {
            row = document.createElement("div");
            row.classList.add("gameBoardRow");
            gameBoard.append(row);
            for (let x = 0; x < 5; x++) {
                squareContainer = document.createElement("div");
                squareContainer.classList.add("squareContainer");
                row.append(squareContainer);

                square = document.createElement("div");
                square.textContent = "W";
                square.classList.add("square");
                squareContainer.append(square);

                if (i == 1) {
                    square.classList.add("present");
                }
                if (i == 3) {
                    square.classList.add("correct");
                }
            }
        }
        return gameBoard;
    }

    const chars = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
                    ['spacer', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'spacer'],
                    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE']];

    const makeKeyboard = () => {
        const keyBoard = document.createElement("div");
        keyBoard.id = "keyboard";
        for (let i in chars) {
            let row = document.createElement("div");
            row.classList.add("keyboardRow");
            keyBoard.append(row);
            for (let x in chars[i]) {
                row.append(makeKey(chars[i][x]));
            }
        }
        return keyBoard;
    }

    const makeKey = (char) => {
        let key;
        if (char == 'spacer') {
            key = document.createElement("div");
            key.classList.add(char);
        }
        else if (char == 'ENTER') {
            key = document.createElement("button");
            key.id = char;
            key.textContent = char;
            key.classList.add("key", "bigKey");
        }
        else if (char == 'DELETE') {
            key = document.createElement("button");
            key.id = char;
            key.textContent = char;
            key.classList.add("key", "bigKey");
        }
        else {
            key = document.createElement("button");
            key.id = char;
            key.textContent = char;
            key.classList.add("key");
        }
        
        return key;
    }

    const make = () => {
        document.body.append(makeHeader(), makeGameBoard(), makeKeyboard());
    }

    return { make }
})();

page.make();