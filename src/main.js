import { gameBoard } from "./gameBoard";
import { makeHeader } from "./header";
import "./style.css"
const page = (() => {
    const chars = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
            ['spacer', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'spacer'],
            ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']];

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
            makeHeader(), gameBoard.make(), makeKeyboard());
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