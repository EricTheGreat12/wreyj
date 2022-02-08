export const gameBoard = (() => {
    const make = () => {
        const gameBoardDiv = document.createElement("div");
        gameBoardDiv.id = "gameBoard";
        for (let i = 0; i < 6; i++) {
            const row = document.createElement("div");
            row.classList.add("gameBoardRow");
            gameBoardDiv.append(row);
            for (let x = 0; x < 5; x++) {
                const squareContainer = document.createElement("div");
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

    const updateSquare = (i, x, input) => {
        const square = document.getElementById(`${i},${x}`);
        square.className = `square ${input.state}`;
        square.textContent = input.char;
    }

    return { make, updateSquare }
})();
