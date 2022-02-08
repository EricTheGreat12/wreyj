import { game } from "./game";
import { gameBoard } from "./gameBoard";
import { makeHeader } from "./header";
import { keyboard } from "./keyboard";
import "./style.css"
const page = (() => {
    const make = () => {
        document.body.append(
            makeHeader(), gameBoard.make(), keyboard.make());
    }

    const reset = () => {
        while (document.body.firstChild.nextSibling) {
            document.body.firstChild.nextSibling.remove();
        }
        make();
    }

    return { reset }
})();

page.reset();
game.resetAll();
