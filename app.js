const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const zeroZero_div = document.getElementById("00");
const zeroOne_div = document.getElementById("01");
const zeroTwo_div = document.getElementById("02");
const oneZero_div = document.getElementById("10");
const oneOne_div = document.getElementById("11");
const oneTwo_div = document.getElementById("12");
const twoZero_div = document.getElementById("20");
const twoOne_div = document.getElementById("21");
const twoTwo_div = document.getElementById("22");

var btn00 = true;
var btn01 = true;
var btn02 = true;
var btn10 = true;
var btn11 = true;
var btn12 = true;
var btn20 = true;
var btn21 = true;
var btn22 = true;

var scoreComp = 0;
var scoreUser = 0;
var user = 1;
var comp = 0;
var board = [];
const choicesAtStart = ['00','01','02','10','11','12','20','21','22'];
var compRow = 0;
var compCol = 0;
var bestVal = 0;

// 0, 1, 2, 3, 4, 5, 6, 7, 8
//[R  R  R][R  R  R][R  R  R] 

function endGame() {
    btn00 = false;
    btn01 = false;
    btn02 = false;
    btn10 = false;
    btn11 = false;
    btn12 = false;
    btn20 = false;
    btn21 = false;
    btn22 = false;
}
function bringBackButtons() {
    if(btn00 === true) {
        document.getElementById('00').style.pointerEvents = 'auto'; 
    }
    if(btn01 === true) {
        document.getElementById('01').style.pointerEvents = 'auto'; 
    }
    if(btn02 === true) {
        document.getElementById('02').style.pointerEvents = 'auto'; 
    }
    if(btn10 === true) {
        document.getElementById('10').style.pointerEvents = 'auto'; 
    }
    if(btn11 === true) {
        document.getElementById('11').style.pointerEvents = 'auto'; 
    }
    if(btn12 === true) {
        document.getElementById('12').style.pointerEvents = 'auto'; 
    }
    if(btn20 === true) {
        document.getElementById('20').style.pointerEvents = 'auto'; 
    }
    if(btn21 === true) {
        document.getElementById('21').style.pointerEvents = 'auto'; 
    }
    if(btn22 === true) {
        document.getElementById('22').style.pointerEvents = 'auto'; 
    }
}
function disableAllButtons() {
    document.getElementById('00').style.pointerEvents = 'none'; 
    document.getElementById('01').style.pointerEvents = 'none'; 
    document.getElementById('02').style.pointerEvents = 'none'; 
    document.getElementById('10').style.pointerEvents = 'none'; 
    document.getElementById('11').style.pointerEvents = 'none'; 
    document.getElementById('12').style.pointerEvents = 'none'; 
    document.getElementById('20').style.pointerEvents = 'none'; 
    document.getElementById('21').style.pointerEvents = 'none'; 
    document.getElementById('22').style.pointerEvents = 'none'; 
    
}

async function theyWon(who) {
    if(who === 0) {
        endGame();
        disableAllButtons();
        console.log("Computer won!");
        scoreComp++;
        result_div.innerHTML = "You lost, sucks. Restarting Game";
        computerScore_span.innerHTML = scoreComp;
        await new Promise(resolve => setTimeout(resolve, 2000));
        init();
    } else if(who === 1) {
        endGame();
        disableAllButtons();
        scoreUser++;
        result_div.innerHTML = "Congrats, you beat the computer. Restarting Game";
        userScore_span.innerHTML = scoreUser;
        await new Promise(resolve => setTimeout(resolve, 2000));
        init();
    } else {
        endGame();
        disableAllButtons();
        result_div.innerHTML = "Cat's Game! Restarting Game...";
        await new Promise(resolve => setTimeout(resolve, 2000));
        init();
        console.log("Cat's Game!");
    }
}


function isMovesLeft(theBoard) {
    for(var i = 0; i < 3; i++) 
        for(var j = 0; j < 3; j++) 
            if(theBoard[i][j] === '')
                return true;
    return false;
}

function checkWinner(choice) {
    var check = isMovesLeft(board);
    if(check === true) {
        var totalScore = 0;
        for(var i = 0; i < 3; i++) {
                if(board[i][i] === choice) {
                    totalScore++;
                }
        }
        if(totalScore === 3) {
            theyWon(choice);
            return;
        } else {
            totalScore = 0;
        }
        // 02, 11, 20
        if(board[0][2] === choice && board[1][1] === choice && board[2][0] === choice) {
            totalScore = 3;
        }
        if(totalScore === 3) {
            theyWon(choice);
            return;
        } else {
            totalScore = 0;
        }
        for(var i = 2; i > -1; i--) {
                if(board[i][i] === choice) {
                    totalScore++;
                }
        }
        if(totalScore === 3) {
            theyWon(choice);
            return;
        } else {
            totalScore = 0;
        }

        for(var i = 0; i < 3; i++) {
            if(board[0][i] === choice) {
                totalScore++;
            }
        }
        if(totalScore === 3) {
            theyWon(choice);
            return;
        } else {
            totalScore = 0;
        }

        for(var i = 0; i < 3; i++) {
            if(board[1][i] === choice) {
                totalScore++;
            }
        }
        if(totalScore === 3) {
            theyWon(choice);
            return;
        } else {
            totalScore = 0;
        }

        for(var i = 0; i < 3; i++) {
            if(board[2][i] === choice) {
                totalScore++;
            }
        }
        if(totalScore === 3) {
            theyWon(choice);
            return;
        } else {
            totalScore = 0;
        }

        for(var i = 0; i < 3; i++) {
            if(board[i][0] === choice) {
                totalScore++;
            }
        }
        if(totalScore === 3) {
            theyWon(choice);
            return;
        } else {
            totalScore = 0;
        }

        for(var i = 0; i < 3; i++) {
            if(board[i][1] === choice) {
                totalScore++;
            }
        }
        if(totalScore === 3) {
            theyWon(choice);
            return;
        } else {
            totalScore = 0;
        }

        for(var i = 0; i < 3; i++) {
            if(board[i][2] === choice) {
                totalScore++;
            }
        }
        if(totalScore === 3) {
            theyWon(choice);
            return;
        } else {
            totalScore = 0;
        }
    } else {
        theyWon(-1);
    }
}



function evaluate(theBoard) {
    for(var row = 0; row < 3; row++) {
        if(theBoard[row][0] === theBoard[row][1] && theBoard[row][1] === theBoard[row][2]){
            if(theBoard[row][0] === comp) {
                return 10;
            } else if(theBoard[row][0] === user) {
                return -10;
            }
        }
    }

    for(var col = 0; col < 3; col++) {
        if(theBoard[0][col] === theBoard[1][col] && theBoard[1][col] === theBoard[2][col]) {
            if(theBoard[0][col] === comp) {
                return 10;
            } else if(theBoard[0][col] === user) {
                return -10;
            }
        }
    }

    if(theBoard[0][0] === theBoard[1][1] && theBoard[1][1] === theBoard[2][2]) {
        if(theBoard[0][0] === comp) {
            return 10;
        } else if(theBoard[0][0] === user) {
            return -10;
        }
    }

    if(theBoard[0][2] === theBoard[1][1] && theBoard[1][1] === theBoard[2][0]){
        if(theBoard[0][2] === comp) {
            return 10;
        } else if(theBoard[0][2] === user) {
            return -10;
        }
    }
    return 0;
}


function minmax(theBoard, depth, isMax) {
    var score = evaluate(board);

    if(score === 10) 
        return score;
    
    if(score === -10)
        return score;
    
    if(isMovesLeft(board) === false) {
        return 0;
    }

    if(isMax) {
        var theBest = -1000;

        for(var i = 0; i < 3; i++) {
            for(var j = 0; j < 3; j++) {
                if(theBoard[i][j] === '') {
                    theBoard[i][j] = comp;

                    theBest = Math.max(theBest, minmax(theBoard, depth + 1, !isMax));

                    board[i][j] = '';
                }
            }
        }

        return theBest;
    } else {
        var theBest = 1000;

        for(var i = 0; i < 3; i++) {
            for(var j = 0; j < 3; j++) {
                if(theBoard[i][j] === '') {
                    theBoard[i][j] = user;

                    theBest = Math.min(theBest, minmax(theBoard, depth + 1, !isMax));

                    board[i][j] = '';
                }
            }
        }
        return theBest;
    }
}
function getComputerChoice() {
    bestVal = -1000;
    compRow = -1;
    compCol = -1;
    for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
            if(board[i][j] === '') {
                board[i][j] = comp;

                var moveVal = minmax(board, 0, false);

                board[i][j] = '';

                if(moveVal > bestVal) {
                    compRow = i;
                    compCol = j;
                    bestVal = moveVal;
                }
            }
        }
    }

    console.log("The best move is "+ compRow + " and " + compCol);
    if(compRow > -1 && compCol > -1) {
        console.log(board);
        board[compRow][compCol] = comp;
        if(compRow === 0 && compCol === 0) {
            btn00 = false;
            zeroZero_div.innerHTML = "O";
        }
        if(compRow === 0 && compCol === 1) {
            btn01 = false;
            // document.getElementById('01').style.pointerEvents = 'none';
            zeroOne_div.innerHTML = "O";
        }
        if(compRow === 0 && compCol === 2) {
            btn02 = false;
            // document.getElementById('02').style.pointerEvents = 'none';
            zeroTwo_div.innerHTML = "O";
        }
        if(compRow === 1 && compCol === 0) {
            btn10 = false;
            // document.getElementById('10').style.pointerEvents = 'none';
            oneZero_div.innerHTML = "O";
        }
        if(compRow === 1 && compCol === 1) {
            btn11 = false;
            // document.getElementById('11').style.pointerEvents = 'none';
            oneOne_div.innerHTML = "O";
        }
        if(compRow === 1 && compCol === 2) {
            btn12 = false;
            // document.getElementById('12').style.pointerEvents = 'none';
            oneTwo_div.innerHTML = "O";
        }
        if(compRow === 2 && compCol === 0) {
            btn20 = false;
            // document.getElementById('20').style.pointerEvents = 'none';
            twoZero_div.innerHTML = "O";
        }
        if(compRow === 2 && compCol === 1) {
            btn21 = false;
            // document.getElementById('21').style.pointerEvents = 'none';
            twoOne_div.innerHTML = "O";
        }
        if(compRow === 2 && compCol === 2) {
            btn22 = false;
            // document.getElementById('22').style.pointerEvents = 'none';
            twoTwo_div.innerHTML = "O";
        }
        disableAllButtons();
        checkWinner(comp);
    }
    

    //Could update board here
    
}
async function game(r, c) {
    board[r][c] = user;
    checkWinner(user);
    await new Promise(resolve => setTimeout(resolve, 500));
    getComputerChoice();
    bringBackButtons();
}
function init() {
    btn00 = true;
    btn01 = true;
    btn02 = true;
    btn10 = true;
    btn11 = true;
    btn12 = true;
    btn20 = true;
    btn21 = true;
    btn22 = true;
    document.getElementById('00').style.pointerEvents = 'auto'; 
    document.getElementById('01').style.pointerEvents = 'auto'; 
    document.getElementById('02').style.pointerEvents = 'auto'; 
    document.getElementById('10').style.pointerEvents = 'auto'; 
    document.getElementById('11').style.pointerEvents = 'auto'; 
    document.getElementById('12').style.pointerEvents = 'auto'; 
    document.getElementById('20').style.pointerEvents = 'auto'; 
    document.getElementById('21').style.pointerEvents = 'auto'; 
    document.getElementById('22').style.pointerEvents = 'auto'; 
    result_div.innerHTML = "_____";
    zeroZero_div.innerHTML = "";
    zeroOne_div.innerHTML = "";
    zeroTwo_div.innerHTML = "";
    oneZero_div.innerHTML = "";
    oneOne_div.innerHTML = "";
    oneTwo_div.innerHTML = "";
    twoZero_div.innerHTML = "";
    twoOne_div.innerHTML = "";
    twoTwo_div.innerHTML = "";
     board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
        ];
}


// INIT!!!!!!!!!!!!!!!!! TRUE
function main() {
    // Check if [][] is taken, if it is, just don't take it, call function again, and return to user *Spot already chosen, pick somewehre else* if I can't figure out how to disable buttons
zeroZero_div.addEventListener('click', function() {
    btn00 = false;
    disableAllButtons();
    // document.getElementById('00').style.pointerEvents = 'none';
    game(0,0);
    zeroZero_div.innerHTML = "X";
    

    // console.log("You clicked 00 (Zero Zero)");
})

zeroOne_div.addEventListener('click', function() {
    btn01 = false;
    disableAllButtons();
    // document.getElementById('01').style.pointerEvents = 'none';
    game(0,1);
    zeroOne_div.innerHTML = "X";
    // console.log("You clicked 01 (Zero One)");
})

zeroTwo_div.addEventListener('click', function() {
    btn02 = false;
    disableAllButtons();
    // document.getElementById('02').style.pointerEvents = 'none';
    game(0,2);
    zeroTwo_div.innerHTML = "X";
    // console.log("You clicked 02 (Zero Two)");
})

oneZero_div.addEventListener('click', function() {
    btn10 = false;
    disableAllButtons();
    // document.getElementById('10').style.pointerEvents = 'none';
    game(1,0);
    oneZero_div.innerHTML = "X";
    // console.log("You clicked 10 (One Zero)");
})

oneOne_div.addEventListener('click', function() {
    btn11 = false;
    disableAllButtons();
    // document.getElementById('11').style.pointerEvents = 'none';
    game(1,1);
    oneOne_div.innerHTML = "X";
    // console.log("You clicked 11 (One One)");
})

oneTwo_div.addEventListener('click', function() {
    btn12 = false;
    disableAllButtons();
    // document.getElementById('12').style.pointerEvents = 'none';
    game(1,2);
    oneTwo_div.innerHTML = "X";
    // console.log("You clicked 12 (One Two)");
})

twoZero_div.addEventListener('click', function() {
    btn20 = false;
    disableAllButtons();
    // document.getElementById('20').style.pointerEvents = 'none';
    game(2,0);
    twoZero_div.innerHTML = "X";
    // console.log("You clicked 20 (Two Zero)");
})

twoOne_div.addEventListener('click', function() {
    btn21 = false;
    disableAllButtons();
    // document.getElementById('21').style.pointerEvents = 'none';
    game(2,1);
    twoOne_div.innerHTML = "X";
    // console.log("You clicked 21 (Two One)");
})

twoTwo_div.addEventListener('click', function() {
    btn22 = false;
    disableAllButtons();
    // document.getElementById('22').style.pointerEvents = 'none';
    game(2,2);
    twoTwo_div.innerHTML = "X";
    // console.log("You clicked 22 (Two Two)");
})
}
init();
main();

//document.getElementById('id').style.pointerEvents = 'auto'; 