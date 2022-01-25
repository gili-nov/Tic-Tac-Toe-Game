var TieWinLose = /** @class */ (function () {
    function TieWinLose() {
    }
    Object.defineProperty(TieWinLose.prototype, "_ArrayToCheck", {
        get: function () {
            return this.ArrayToCheck;
        },
        set: function (val) {
            this.ArrayToCheck = val;
        },
        enumerable: false,
        configurable: true
    });
    // Check If Game Ends Or Continue
    TieWinLose.prototype.CheckGameStatus = function () {
        var GameStat = 'continue';
        for (var i = 0; i < 8; i++) {
            if (this.ArrayToCheck[i] == -3) {
                GameStat = 'Computer Is The Winner!!';
            }
            else if (this.ArrayToCheck[i] == 3) {
                GameStat = 'You Won!';
            }
        }
        if (this.CheckForTie() == true) {
            GameStat = 'Its A tie Between You And The Computer!';
        }
        return GameStat;
    };
    TieWinLose.prototype.CheckForTie = function () {
        var tie = true;
        var i = 0;
        while (tie == true && i < 9) {
            tie = (this.ArrayToCheck[i] != i + 1 ? true : false);
            i++;
        }
        return tie;
    };
    return TieWinLose;
}());
//# sourceMappingURL=TieWinLose.js.map