var CheckWinLoseTie = /** @class */ (function () {
    function CheckWinLoseTie() {
        this.CheckWinLoseTie = [];
    }
    Object.defineProperty(CheckWinLoseTie.prototype, "_CheckWinLoseTie", {
        get: function () {
            return this.CheckWinLoseTie;
        },
        set: function (val) {
            this.CheckWinLoseTie = val;
        },
        enumerable: false,
        configurable: true
    });
    // if sum is -3 computer win, if sum is 3, user win
    CheckWinLoseTie.prototype.WinLoseTie = function () {
        var score = [];
        var scoreArray = [];
        for (var i = 0; i < 9; i++) {
            switch (this.CheckWinLoseTie[i]) {
                case 'X':
                    scoreArray[i] = 1;
                    break;
                case 'O':
                    scoreArray[i] = -1;
                    break;
                default:
                    scoreArray[i] = 0;
                    break;
            }
        }
        score[0] = scoreArray[0] + scoreArray[1] + scoreArray[2];
        score[1] = scoreArray[3] + scoreArray[4] + scoreArray[5];
        score[2] = scoreArray[6] + scoreArray[7] + scoreArray[8];
        score[3] = scoreArray[0] + scoreArray[3] + scoreArray[6];
        score[4] = scoreArray[1] + scoreArray[4] + scoreArray[7];
        score[5] = scoreArray[2] + scoreArray[5] + scoreArray[8];
        score[6] = scoreArray[0] + scoreArray[4] + scoreArray[8];
        score[7] = scoreArray[2] + scoreArray[4] + scoreArray[6];
        return score;
    };
    CheckWinLoseTie.prototype.CheckForTie = function () {
        var tie = true;
        var i = 0;
        while (tie == true && i < 9) {
            tie = (this.CheckWinLoseTie[i] != i + 1 ? true : false);
            i++;
        }
        return true;
    };
    return CheckWinLoseTie;
}());
//# sourceMappingURL=CheckWinLoseTie.js.map