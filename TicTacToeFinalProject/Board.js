/* -10 defind for user, -20 defind for computer */
var Board = /** @class */ (function () {
    function Board() {
    }
    Object.defineProperty(Board.prototype, "_NumInput", {
        get: function () {
            return this.NumInput;
        },
        set: function (v) {
            if ((v < 10 && v > 0) && (numArray[v] != -10) && (numArray[v] != -20)) {
                this.NumInput = v;
                numArray[v - 1] = -10;
            }
            else {
                (isNaN(v)) ? alert("please insert numbers only") :
                    (numArray[v] == -10) || (numArray[v] == -20) ? alert("This number has already been selected. Please select another number") :
                        alert("please insert number between 1 - 9");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Board;
}());
//# sourceMappingURL=Board.js.map