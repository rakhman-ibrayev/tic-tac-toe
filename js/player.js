function Player(figure) {
    // private properties
    let _figure = figure;

    // public methods
    function setFigure(figure) {
        _figure = figure;
    }

    function getFigure() {
        return _figure;
    }

    // public method makes a move by putting this' figure
    // to a box inside @code{gameBoard} at a specified index.
    // @param gameBoard - game board where players play
    // @param index - index of a box at which player makes a move
    function attack(gameBoard, index) {
        gameBoard.populateBox(_figure, index);
    }

    return {
        setFigure,
        getFigure,
        attack
    }
}