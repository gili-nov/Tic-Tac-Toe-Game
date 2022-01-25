var ComputerInput = /** @class */ (function () {
    function ComputerInput() {
        this.ArrayForComp = [];
        this.OrigArray = [];
    }
    Object.defineProperty(ComputerInput.prototype, "_ArrayForComp", {
        get: function () {
            return this.ArrayForComp;
        },
        set: function (v) {
            {
                this.ArrayForComp = v;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ComputerInput.prototype, "_OrigArray", {
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
    // Computer Move 
    ComputerInput.prototype.CompMove = function () {
        var Cmove = -1;
        /* Check if the computer can win  */
        for (var i = 0; i < 8; i++) {
            if (this.ArrayForComp[i] == -2) {
                Cmove = this.BlockOrWin(i);
            }
        }
        /* Check if the computer needs to block  */
        if (Cmove == -1) {
            for (var i = 0; i < 8; i++) {
                if (this.ArrayForComp[i] == 2) {
                    Cmove = this.BlockOrWin(i);
                }
            }
        }
        /* Choose a random number */
        if (Cmove == -1) {
            var FreeNumber = [];
            var m = 0;
            for (var i = 0; i < 8; i++) {
                if ((this.OrigArray[i] != 'O') && (this.OrigArray[i] != 'X')) {
                    FreeNumber[m] = i;
                    m++;
                }
            }
            Cmove = FreeNumber[Math.floor(Math.random() * FreeNumber.length)];
        }
        return Cmove;
    };
    ComputerInput.prototype.BlockOrWin = function (caseNum) {
        var cell;
        switch (caseNum) {
            case 0:
                cell = (this.OrigArray[0] == 1 ? 0 : this.OrigArray[1] == 2 ? 1 : 2);
                break;
            case 1:
                cell = (this.OrigArray[3] == 4 ? 3 : this.OrigArray[4] == 5 ? 4 : 5);
                break;
            case 2:
                cell = (this.OrigArray[6] == 7 ? 6 : this.OrigArray[7] == 8 ? 7 : 8);
                break;
            case 3:
                cell = (this.OrigArray[0] == 1 ? 0 : this.OrigArray[3] == 4 ? 3 : 6);
                break;
            case 4:
                cell = (this.OrigArray[1] == 2 ? 1 : this.OrigArray[4] == 5 ? 4 : 7);
                break;
            case 5:
                cell = (this.OrigArray[2] == 3 ? 2 : this.OrigArray[5] == 6 ? 5 : 8);
                break;
            case 6:
                cell = (this.OrigArray[0] == 1 ? 0 : this.OrigArray[4] == 5 ? 4 : 8);
                break;
            case 7:
                cell = (this.OrigArray[2] == 3 ? 2 : this.OrigArray[4] == 5 ? 4 : 6);
                break;
        }
        return cell;
    };
    return ComputerInput;
}());
//# sourceMappingURL=ComputerInput.js.map