// Its Computer Turn - First Check If Can win, Then Block, Then Random Number
var ComputerMove = /** @class */ (function () {
    function ComputerMove() {
        this.ComputerArrTurn = [];
    }
    Object.defineProperty(ComputerMove.prototype, "_ComputerArrTurn", {
        get: function () {
            return this.ComputerArrTurn;
        },
        set: function (val) {
            this.ComputerArrTurn = val;
        },
        enumerable: false,
        configurable: true
    });
    // Computer Move 
    ComputerMove.prototype.CompMove = function () {
        var Cmove = -1;
        /* Check if the computer can win  */
        var CheckForWin = new CheckWinLoseTie();
        for (var i = 0; i < 9; i++) {
            if (CheckForWin.WinLoseTie[i] == -2) {
                Cmove = BlockOrWin(i);
            }
        }
        /* Check if the computer needs to block  */
        if (Cmove == -1) {
            for (var i = 0; i < 9; i++) {
                if (CheckForWin.WinLoseTie[i] == 2) {
                    Cmove = BlockOrWin(i);
                }
            }
        }
        /* Choose a random number */
        if (Cmove == -1) {
            var FreeNumber = [];
            var m = 0;
            for (var i = 0; i < 9; i++) {
                if ((this.ComputerArrTurn[i] != 'O') && (this.ComputerArrTurn[i] != 'X')) {
                    FreeNumber[m] = i;
                    m++;
                }
            }
            Cmove = FreeNumber[Math.floor(Math.random() * FreeNumber.length)];
        }
        return Cmove;
    };
    return ComputerMove;
}());
function BlockOrWin(caseNum) {
    var cell;
    switch (caseNum) {
        case 0:
            cell = (this._ComputerArrTurn[0] == 1 ? 0 : this._ComputerArrTurn[1] == 2 ? 1 : 2);
            break;
        case 1:
            cell = (this._ComputerArrTurn[3] == 4 ? 3 : this._ComputerArrTurn[4] == 5 ? 4 : 5);
            break;
        case 2:
            cell = (this._ComputerArrTurn[6] == 7 ? 6 : this._ComputerArrTurn[7] == 8 ? 7 : 8);
            break;
        case 3:
            cell = (this._ComputerArrTurn[0] == 1 ? 0 : this._ComputerArrTurn[3] == 4 ? 3 : 6);
            break;
        case 4:
            cell = (this._ComputerArrTurn[1] == 2 ? 1 : this._ComputerArrTurn[4] == 5 ? 4 : 7);
            break;
        case 5:
            cell = (this._ComputerArrTurn[2] == 3 ? 2 : this._ComputerArrTurn[5] == 6 ? 5 : 8);
            break;
        case 6:
            cell = (this._ComputerArrTurn[0] == 1 ? 0 : this._ComputerArrTurn[4] == 5 ? 4 : 8);
            break;
        case 7:
            cell = (this._ComputerArrTurn[2] == 3 ? 2 : this._ComputerArrTurn[4] == 5 ? 4 : 6);
            break;
    }
    return cell;
}
//# sourceMappingURL=ComputerMove.js.map