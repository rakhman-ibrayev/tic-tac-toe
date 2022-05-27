function Player (figure) {
    // private properties
    _playerFigure = figure;
    _isPlayerWinner = false;

    // public methods

    function setPlayerFigure(figure) {
        _playerFigure = figure;
    }

    function getPlayerFigure() {
        return _playerFigure;
    }

    function setIsPlayerWinner(isWinner) {
        _isPlayerWinner = isWinner;
    }

    function getIsPlayerWinner() {
        return _isPlayerWinner;
    }

    // public method makes a move by putting this' figure
    // to a box inside @code{gameBoard} at a specified index.
    // Sets this as a winner if the figure is aligned 
    // according the to tic tac toe game's rules.
    // @param gameBoard - game board where players play
    // @param index - index of a box at which player makes a move
    function attack(gameBoard, index) {
        if (gameBoard.isFigureAligned(_playerFigure)) _isPlayerWinner = true;
        else gameBoard.populateBox(_playerFigure, index);
    }

    return {
        setPlayerFigure,
        getPlayerFigure,
        setIsPlayerWinner,
        getIsPlayerWinner,
        attack
    }
}