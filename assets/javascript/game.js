/*words for hangman*/

var theWords =[
['C', 'A', 'R'],
['H', 'O', 'U', 'S', 'E'],
['C', 'O', 'D', 'I', 'N', 'G'],
['T', 'R', 'U', 'C', 'K'],
['A'],
['B'],
['C'],
['D','O','C','U','M','N','E','N','T'],
]
//console.log(words);



var random = Math.floor((Math.random()*(theWords.length-1)));
var word = theWords[random]; // the word to guess will be chosen from the array above
var blankWord = new Array(word.length);
console.log(word + " is the word array");
var error = 0;

//here we set up the underscores for the random word picked from the list
for (var i = 0; i < blankWord.length; i++){
    blankWord[i] = "_ ";
}

// Sets up the area where the word is going to be but first you will see the underscores
function printRateword(){
    for (var i = 0; i < blankWord.length; i++){
    var ratefield = document.getElementById("ratefield");
    //console.log("this is the letter " + letter) // used for debugging
    var letter = document.createTextNode(blankWord[i]);
    //console.log(letter) // used for debugging
    ratefield.appendChild(letter);
    //console.log(letter)// used for debugging
    }
}

//checks if the the letter pickd by the user is = to one or more of the letters in the word
var certMark = function(){
    var f = document.rateForm; 
    var b = f.elements["signs"]; 
    var character = b.value; // the letter provided by the user
    character = character.toUpperCase();
    for (var i = 0; i < word.length; i++){
        if(word[i] === character){
            blankWord[i] = character + " ";
            var hits = true;
            console.log(hits) // used for debugging
          }
    b.value = "";
    }

        //resets the the dahes and letters
    var ratefield = document.getElementById("ratefield");
    ratefield.innerHTML=""; 
    printRateword();
    
    // if a letter that is picked but not in the word, the letter will be put here in the "wrong letters"-list
    if(!hits){ 
        var wrongLetter = document.getElementById("wrongLetter");
        console.log("here is the wrong letter "+ character);
        var letter = document.createTextNode(" " + character);
        console.log(letter)
        wrongLetter.appendChild(letter);
        error++;
        var hangman = document.getElementById("hangman");
    hangman.src = "assets/images/hangman" + error + ".png"; 
    }// here is the hangman "function" ^ as the errors count up it replaces part of the address to add the hanged man


    //checks if all letters have been found
    var finish = true;
    for (var i = 0; i < blankWord.length; i++){
        if(blankWord[i] === "_ "){
            finish = false;
        }
    }
    if(finish){
        window.alert("You win!");
    }
    
    //once you got six wrong letters, you lose
    if(error === 6){
        window.alert("Sorry you have failed to guess the word.");
    }
}

function init(){
    printRateword();
}
window.onload = init;