export const gameBoard = (() => {
    const make = () => {
        const gameBoardDiv = document.createElement("div");
        gameBoardDiv.id = "gameBoard";
        let row;
        let squareContainer;
        for (let i = 0; i < 6; i++) {
            row = document.createElement("div");
            row.classList.add("gameBoardRow");
            gameBoardDiv.append(row);
            for (let x = 0; x < 5; x++) {
                squareContainer = document.createElement("div");
                squareContainer.classList.add("squareContainer");
                row.append(squareContainer);
                squareContainer.append(makeSquare(i, x));
            }
        }
        return gameBoardDiv;
    }
    
    const makeSquare = (i, x) => {
        const square = document.createElement("div");
        square.id = `${i},${x}`
        square.classList.add("square");
        return square;
    }

    const updateSquare = (i, x, state, char) => {
        const square = document.getElementById(`${i},${x}`);
        square.className = `square ${state}`;
        square.textContent = char;
    }

    return { make, updateSquare }
})();
