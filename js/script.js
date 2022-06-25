const container = document.getElementById("contenitore");

function newElementSquare (){
    const newElement = document.createElement("div");
    newElement.classList.add("square_normale");
    return newElement;
};

function numberGenerator(blacklist, numberMin, numberMax){
    let numberRandom;
 
    let validNumber = false;
 
    while (validNumber === false){
        numberRandom = Math.round(Math.random() * (numberMax - numberMin) + numberMin);
 
        if( !blacklist.includes(numberRandom)){
         validNumber = true;
        }
    }
 
    return numberRandom;
}

let blacklistNumber = [];
console.log(blacklistNumber)




const play = document.getElementById("button");
const select = document.getElementById("difficolta");

play.addEventListener('click', function(){
    container.innerHTML = "";

    let livello = select.value;
    let dimensione; 
    if(livello === "Normale"){
        dimensione = 100; 
    } else if( livello === "Difficile"){
        dimensione = 81;
    } else if(livello === "Ultra-difficile"){
        dimensione = 49;
    }
    console.log(livello) 
    blacklistNumber = [];
    

    for (let i = 1; i <= dimensione; i++){
        let number = numberGenerator(blacklistNumber, 1, 100);
        blacklistNumber.push(number); 
        if (number <= 16){
            let newBoomSquare = newElementSquare ();
            if(dimensione === 81){
                newBoomSquare.classList.add("square_difficile");
            }else if(dimensione === 49) {
                newBoomSquare.classList.add("square_ultra_difficile");
            }
            blacklistNumber.push(number);
            newBoomSquare.addEventListener('click', function(){
                newBoomSquare.classList.add("boom")
                console.log(`hai cliccato una bomba`)

                if(newBoomSquare === newBoomSquare){
                    container.innerHTML = "Hai perso. Per rigiocare premi play"
                    console.log(container)
                }
            });
            newBoomSquare.innerHTML = i;
            container.append(newBoomSquare);
        
        }else if(number > 16){
            let newSquare = newElementSquare ();
            if(dimensione === 81){
                newSquare.classList.add("square_difficile");
            }else if(dimensione === 49) {
                newSquare.classList.add("square_ultra_difficile");
            }
            
            blacklistNumber.push(number);
            newSquare.addEventListener('click', function(){
                newSquare.classList.add("active")
                console.log(`hai cliccato ${i}`)
            });
            newSquare.innerHTML = i
            container.append(newSquare);
    
        }
        
    
        

    }
 
})



        


