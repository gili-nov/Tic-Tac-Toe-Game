/*************************************************************/
/*   This program plays with the user the game "Tic-Tac-Toe" */
/*                         By Gili Nov                       */
/*********************************************************** */

// Show introduction 
alert("\n Welcome to the Tic-Tac-Toe game!" + "\n it's you against the computer! \n");

// Define Basic Array & Check-Var For The Game
var numArray: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var WrongInput: boolean = true;

// First Input From User
let UsertIn: UserInput = new UserInput();
do {
    let FirstIn: number = +prompt("please select a number berween 1 - 9! \n |  1  |  2  |  3  |  \n |  4  |  5  |  6  |  \n |  7  |  8  |  9  | ");

    UsertIn._NumInput = FirstIn;
}
while (WrongInput == true);

var ShowGameStat: GameChecks = new GameChecks();

// Keep On Going Untill The Game Is Over With Tie Or Win
while (CheckGameStatus(ShowGameStat.WinLoseTie()) == 'continue') { // if the game not fhinished
    ShowGameStat._OrigArray = numArray;
    alert(ShowGameStat.ShowBoard()); // show game status

    let ComputerIn: ComputerInput = new ComputerInput();
    ComputerIn._ArrayForComp = ShowGameStat.WinLoseTie();
    ComputerIn._OrigArray = numArray;

    numArray[ComputerIn.CompMove()] = 'O'; // computer move
    if (CheckGameStatus(ShowGameStat.WinLoseTie()) == 'continue') {
        ShowGameStat._OrigArray = numArray;
        alert(ShowGameStat.ShowBoard()); // show game status

        do {
            let UserNextMove: number = +prompt("enter your move"); // user move
            UsertIn._NumInput = UserNextMove;

        }
        while ((CheckGameStatus(ShowGameStat.WinLoseTie()) == 'continue') && (WrongInput == true));
    }

}
ShowGameStat._OrigArray = numArray;

// Show Final MSG To User - Game Is Over With Tie Or Win
alert("\n" + "The game is over!" + "\n" + (CheckGameStatus(ShowGameStat.WinLoseTie())) + "\n\n" + ShowGameStat.ShowBoard());



// check game status For Print
function CheckGameStatus(array: any[]): string {

    let GameStat: string = 'continue';

    for (var i = 0; i < 8; i++) {
        if (array[i] == -3) {
            GameStat = 'Computer Is The Winner!!';
        }

        else if
            (array[i] == 3) {
            GameStat = 'You Won!';
        }
    }


    if (CheckForTie(numArray) == true) {
        GameStat = 'Its A tie Between You And The Computer!';
    }

    return GameStat;
}

// Check For tie
function CheckForTie(array: any[]): boolean {

    let tie: boolean = true;
    let i: number = 0;
    while (tie == true && i < 9) {
        tie = (array[i] != i + 1 ? true : false);
        i++;
    }

    return tie;
}