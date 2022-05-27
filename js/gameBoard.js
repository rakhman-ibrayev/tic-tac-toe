function GameBoard() {
    // private properties
    let _boxes = ['', '', '', '', '', '', '', '', ''];
    let _winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // public methods
    function populateBox(figure, index) {
        _boxes[index] = figure;
    }

    // public method checks if a figure is in a winning combination
    function isFigureAligned(figure) {
        for (let i = 0; i < _winningCombinations.length; i++) {
            let numWinningIndicesApps = 0;
            for (let j = 0; j < 3; j++) {
                let index = _winningCombinations[i][j];
                if (_boxes[index] === figure) {
                    numWinningIndicesApps++;
                }
                if (numWinningIndicesApps === 3) {
                    return true;
                }
            }
        }
        return false;
    }

    function getBoxes() {
        return _boxes;
    }

    return {
        populateBox,
        isFigureAligned,
        getBoxes
    }
}