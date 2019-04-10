window.onload = function(){
    let dice1ID = "#dice1";
    let dice2ID = "#dice2";

    let value1 = rollDice(dice1ID);
    let value2 = rollDice(dice2ID);

    let result = "";
    if(value1 < value2){
        result = "Dice 1 wins";
    }
    else if(value1 > value2){
        result = "Dice 2 wins";
    }
    else if(value1 == value2){
        result = "Draw";
    }
    setResult(result);
}
function rollDice(id){
    let value = randomValue(5);
    let randomDiceSrc = getDicePath(value);
    document.querySelector(id + " .random-dices__dice--image").src = randomDiceSrc;
    return value;
}
function randomValue(max){
    return Math.floor(Math.random() * max) + 1; 
}
function getDicePath(number){
    return randomDiceSrc = "img/" + number + ".svg";
}
function setResult(result){
    document.querySelector(".random-dices__response--text").innerHTML = result;
}
