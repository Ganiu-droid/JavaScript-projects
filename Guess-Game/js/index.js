
function generateNum(){ 
    // let guessNum = document.getElementById('guess').innerHTML
}

let randomNum = Math.ceil(Math.random() * 3)
function guessNumber(){
    let guessNum = document.getElementById('guess').value

    if(guessNum > 3){
        document.getElementById("winOrLossAlert").innerHTML = "The Number too high";
        return;
    }
    else if(guessNum == randomNum){
        document.getElementById("winOrLossAlert").innerHTML = "Hurry!!! You guessed right";
        //console.log("Hurry!!! You guessed right")
    }
    else{
        document.getElementById("winOrLossAlert").innerHTML = "OOOPs!!! You are wrong, try again";
        //console.log("OOOPs!!! You are wrong, try again")

    }
    document.getElementById('guessedNum').innerHTML = "You guessed: " + guessNum
    document.getElementById('randomNum').innerHTML = "The number is: " + randomNum
    console.log("Guessed NUmber: " + guessNum)
    console.log("Random NUmber: " + randomNum)
}

//guessNumber()