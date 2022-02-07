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
        gameBoard.textContent = "gameBoard";
        return gameBoard;
    }

    const makeKeyboard = () => {
        const keyBoard = document.createElement("div");
        keyBoard.textContent = "keyboard";
        return keyBoard;
    }

    const make = () => {
        document.body.append(makeHeader(), makeGameBoard(), makeKeyboard());
    }

    return { make }
})();

page.make();