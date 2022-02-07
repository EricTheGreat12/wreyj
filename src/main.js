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
        let square;
        for (let i = 0; i < 6; i++) {
            row = document.createElement("div");
            row.classList.add("gameBoardRow");
            for (let x = 0; x < 5; x++) {
                square = document.createElement("div");
                square.textContent = "W";
                square.classList.add("gameBoardSquare");
                row.append(square);
            }
            gameBoard.append(row);
        }
        return gameBoard;
    }

    const makeKeyboard = () => {
        const keyBoard = document.createElement("div");
        keyBoard.id = "keyboard"
        keyBoard.textContent = "keyboard";
        return keyBoard;
    }

    const make = () => {
        document.body.append(makeHeader(), makeGameBoard(), makeKeyboard());
    }

    return { make }
})();

page.make();