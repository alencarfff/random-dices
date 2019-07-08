var $ = document.querySelector.bind(document);

class RollingDices {

    constructor(){
        this.diceA = {
            element: $("#diceA")
                .classList.add("random-dices__dice--image"),
            value: 1,
            image: document.createElement("img")
        }

        this.diceB = {
            element: $("#diceB")
                .classList.add("random-dices__dice--image"),
            value: 1,
            image: document.createElement("img")
        } 

        this._result = $(".random-dices__response--text");
    }

    init() {
        this.throwDices();
        this.updateDices();

        this.showResult(
            this.getResult()
        );

        this.updateDOM();
    }

    updateDices() {
        this.showUniqueDice(this.diceA);
        this.showUniqueDice(this.diceB);
    }

    showUniqueDice(dice){       
        dice.image = this.getDiceImage(    
            dice.image, this.getDicePath(dice.value)
        );
    }

    updateDOM(){
        $("#diceA").appendChild(this.diceA.image);
        $("#diceB").appendChild(this.diceB.image);
    }

    getDiceImage(diceImage, diceImagePath){
        diceImage.setAttribute("src", diceImagePath);
        
        return diceImage;
    }

    throwDices(){
        this.throwUniqueDice(this.diceA);
        this.throwUniqueDice(this.diceB);
    }

    throwUniqueDice(dice){
        dice.value = this.getRandomValue(6);
    }

    getResult(){
        if(this.diceA.value < this.diceB.value){
            return "Dice 1 wins";
        }
        else if(this.diceA.value > this.diceB.value){
            return "Dice 2 wins";
        }
        return "Draw";
    } 

    getRandomValue(max) {
        return Math.floor(Math.random() * max) + 1; 
    }
    
    getDicePath(number){
        return "img/" + number + ".svg";
    }

    showResult(result){
        this._result.innerHTML = result;
    }
}

const game = new RollingDices();
game.init();

