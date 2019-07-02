window.onload = function(){
    //criam-se duas variáveis com o ID de cada dado
    let dice1ID = "#dice1";
    let dice2ID = "#dice2";

    //"rola o dado" e recebe o valor desse dado
    let value1 = rollDice(dice1ID);
    let value2 = rollDice(dice2ID);

    let result = "";
    //caso o valor do dado 1 seja maior, o dado 1 ganha
    if(value1 < value2){
        result = "Dice 1 wins";
    }
    //caso o valor do dado 2 seja maior, o dado 2 ganha
    else if(value1 > value2){
        result = "Dice 2 wins";
    }
    //caso o valor seja o mesmo, então empate
    else if(value1 == value2){
        result = "Draw";
    }
    //e no final, o resultado é inserido no HTML
    setResult(result);
}
function rollDice(id){
    //retorna um número aleatório de 1 a 6
    let value = randomValue(6);
    //retorna o caminho da imagem já com o número escolhido
    let randomDiceSrc = getDicePath(value);
    //insere a imagem no HTML    
    document.querySelector(id + " .random-dices__dice--image").src = randomDiceSrc;
    //e retorna o valor pra conferir o resultado
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
