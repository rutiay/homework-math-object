//! 1

function getRendomNumberUpTo99(){
    return Math.random() * 100;
}

//! -----------------------------------------------------------------
//! 2

function getRendomNumberUpTo9999(){
    return Math.random() * 10000;
}

//! -----------------------------------------------------------------
//! 3

function getRendomNumberUpTo54(){
    return Math.random() * 55;
}

//! -----------------------------------------------------------------
//! 4

function getRendomNumberUpToUserNumber(userNumber){
    return Math.random() * Number(userNumber);
}

//! -----------------------------------------------------------------
//! 5

function guessRendomNumberUpTo9(userNumber){
    if(Number(userNumber) == Math.floor(Math.random() * 10)){
        console.log("Congrats! You're right.");
        return;
    }
    console.log("Wrong. Better luck next time.");
}

//! -----------------------------------------------------------------
//! 6

function guessRendomNumberUpTo99(userNumber){
    if(Number(userNumber) == Math.floor(Math.random() * 100)){
        console.log("Congrats! You're right.");
        return;
    }
    console.log("Wrong. Better luck next time.");
}

//! -----------------------------------------------------------------
//! 7

function printIfUserIsRight(userNumber, userName){
    if(Number(userNumber) == Math.floor(Math.random() * 10)){
        console.log(`Congrats ${userName}! You're right. The winning number is: ${userNumber}.`);
        return;
    }
    console.log("Wrong. Better luck next time.");
}
