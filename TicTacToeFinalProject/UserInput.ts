
class UserInput {
    private NumInput: number;

    set _NumInput(v: number) {
        if ((v < 10 && v > 0) && (numArray[v - 1] != 'X') && (numArray[v - 1] != 'O') && v == Math.floor(v)) {
            this.NumInput = v;
            numArray[v - 1] = 'X';
            WrongInput = false;

        }
        else {
            ((isNaN(v)) || (v != Math.floor(v))) ? alert("Please enter only integers numbers") :
                (numArray[v - 1] == 'X') || (numArray[v - 1] == 'O') ? alert("This number has already been selected. Please select another number") :
                    alert("please insert number between 1 - 9");
            WrongInput = true;
        }
    }
    get _NumInput(): number {
        return this.NumInput;
    }
}
