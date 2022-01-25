var GameChecks = /** @class */ (function () {
    function GameChecks() {
        this.OrigArray = [];
    }
    Object.defineProperty(GameChecks.prototype, "_OrigArray", {
        get: function () {
            return this.OrigArray;
        },
        set: function (v) {
            {
                this.OrigArray = v;
            }
        },
        enumerable: false,
        configurable: true
    });
    /* Show Board */
    GameChecks.prototype.ShowBoard = function () {
        var showBoard = '';
        for (var i = 0; i < 9; i++) {
            showBoard += ("     |     " + this._OrigArray[i] + (i == 2 || i == 5 ? "\n" : ''));
        }
        return showBoard;
    };
    // Calculate Array For Checks
    GameChecks.prototype.WinLoseTie = function () {
        var score = [];
        var scoreArray = [];
        for (var i = 0; i < 9; i++) {
            switch (this._OrigArray[i]) {
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
    return GameChecks;
}());
//# sourceMappingURL=GameChecks.js.map