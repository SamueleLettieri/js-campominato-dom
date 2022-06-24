const container = document.getElementById("contenitore");

function newElementSquare (){
    const newElement = document.createElement("div");
    newElement.classList.add("square_normale");
    return newElement;
};



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
    for (let i = 1; i <= dimensione; i++){
        let newSquare = newElementSquare ();
        if(dimensione === 81){
            newSquare.classList.add("square_difficile");
        }else if(dimensione === 49) {
            newSquare.classList.add("square_ultra_difficile");
        }


        newSquare.addEventListener('click', function(){
            newSquare.classList.add("active")
            console.log(`hai cliccato ${i}`)
        });
    
        newSquare.innerHTML = i
    
        container.append(newSquare);
    };
})



function numberGenerator (blacklist, numberMin, numberMax){
   
}