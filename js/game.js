let game = (function() {
    // private properties
    let _gameBoard = GameBoard();
    let _player1 = Player('X');
    let _player2 = Player('O');
    let _isGameEnded = false;
    let _currentPlayer = _player1;

    // cache DOM elements
    let _currentPlayerMessage = document.querySelector('.which-player');
    let _oponentChoice = document.querySelector('.checkbox');
    let _domBoxes = document.querySelectorAll('.box-content');
    let _winnerMessage = document.querySelector('.announce-winner');
    let _btnRestart = document.querySelector('.game-restart');

    // add event listeners
    for (let i = 0; i < _domBoxes.length; i++) {
        _domBoxes[i].addEventListener('click', () => _play(i));
    }
    _btnRestart.addEventListener('click', _reset);

    // private methods
    function _playRound(boxIndex) {
        if (_isGameEnded) {
            return;
        }

        if (_domBoxes[boxIndex].textContent !== '') {
            return;
        }

        _currentPlayer.attack(_gameBoard, boxIndex);
        _render(_domBoxes[boxIndex], _currentPlayer.getFigure());

        if (_gameBoard.isFigureAligned(_currentPlayer.getFigure())) {
            _isGameEnded = true;
            _announceWinner(_currentPlayer);
            _showWinningCombination();
            return;
        }

        _switchCurrentPlayer();
        _setCurrentPlayerMessage(_currentPlayer);
    }

    function _getRandomIndex() {
        return Math.floor(Math.random() * (_domBoxes.length - 1));
    }

    function _getEmptyBoxIndices(board) {
        return board.filter(box => box === '');
    }

    function _play(boxIndex) {
        _playRound(boxIndex);

        if (_oponentChoice.checked && _getEmptyBoxIndices(_gameBoard.getBoxes()).length > 1) {
            let randomIndex = _getRandomIndex();

            while (_domBoxes[randomIndex].textContent !== '') {
                randomIndex = _getRandomIndex();
            }

            _playRound(randomIndex);
        }
    }

    function _render(box, figure) {
        box.textContent = figure;
    }

    function _announceWinner(winner) {
        _winnerMessage.textContent = 'Player ' + winner.getFigure() + ' is a winner!!!';
    }

    function _showWinningCombination() {
        let winningCombination = _gameBoard.getWinningCombination();

        _domBoxes[winningCombination[0]].style.backgroundColor = 'var(--purple)';
        _domBoxes[winningCombination[1]].style.backgroundColor = 'var(--purple)';
        _domBoxes[winningCombination[2]].style.backgroundColor = 'var(--purple)';
    }

    function _reset() {
        _isGameEnded = false;
        _currentPlayer = _player1;
        _setCurrentPlayerMessage(_currentPlayer);
        _winnerMessage.textContent = '';
        for (let i = 0; i < _domBoxes.length; i++) {
            _domBoxes[i].textContent = '';
            _domBoxes[i].style.background = 'none';
            _gameBoard.getBoxes()[i] = '';
        }
    }

    function _switchCurrentPlayer() {
        if (_currentPlayer === _player1) {
            _currentPlayer = _player2;
        } else {
            _currentPlayer = _player1;
        }
    }

    function _setCurrentPlayerMessage(currentPlayer) {
        _currentPlayerMessage.textContent = currentPlayer.getFigure();
    }
})();