var ComInput = /** @class */ (function () {
    function ComInput() {
    }
    Object.defineProperty(ComInput.prototype, "_NumInput", {
        get: function () {
            return this.NumInput;
        },
        set: function (v) {
            if (v != 1) {
                this.NumInput = 7;
            }
            else {
                (isNaN(v)) ? alert("please insert numbers only") :
                    (numArray[v - 1] == 'X') || (numArray[v - 1] == 'O') ? alert("This number has already been selected. Please select another number") :
                        alert("please insert number between 1 - 9");
            }
        },
        enumerable: false,
        configurable: true
    });
    return ComInput;
}());
//# sourceMappingURL=ComInput.js.map