import "./style.css"
const page = (() => {
    const _makeHeader = () => {
        const header = document.createElement("header");
        const title = document.createElement("div");
        title.textContent = "WREYJL";
        header.append(title);
        return header;
    }

    const _makeGameBoard = () => {
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
                square.id = `square${i}${x}`
                square.classList.add("square");
                square.textContent = "";
                squareContainer.append(square);

                //for testing styles
                if (i == 0) {
                    square.classList.add("absent");
                    square.textContent = "T"
                }
                else if (i == 1) {
                    square.classList.add("present");
                    square.textContent = "W"
                }
                else if (i == 2) {
                    square.classList.add("correct");
                    square.textContent = "C"
                }
                else if (i == 3) {
                    square.classList.add("unchecked");
                    square.textContent = "H";
                }
            }
        }
        return gameBoard;
    }

    const _chars = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
            ['spacer', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'spacer'],
            ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']];

    const _makeKeyboard = () => {
        const keyBoard = document.createElement("div");
        keyBoard.id = "keyboard";
        for (let i in _chars) {
            let row = document.createElement("div");
            row.classList.add("keyboardRow");
            keyBoard.append(row);
            for (let x in _chars[i]) {
                row.append(_makeKey(_chars[i][x]));
            }
        }
        return keyBoard;
    }

    const _makeKey = (char) => {
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
        else if (char == 'DEL') {
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
        document.body.append(
            _makeHeader(), _makeGameBoard(), _makeKeyboard());
    }

    const reset = () => {
        while (document.body.firstChild.nextSibling) {
            document.body.firstChild.nextSibling.remove();
        }
        make();
    }

    return { make, reset }
})();

page.make();