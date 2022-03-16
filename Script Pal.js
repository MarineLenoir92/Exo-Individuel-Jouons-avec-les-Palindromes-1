//regexp ou expression singulière permet de vérifier que la date entrée respecte bien dd/mm/yy
const formatDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/; 



function ask() {
    let question = prompt("Quel est ta date de naissance", "dd/mm/yyyy")
    console.log(question);
    return question;
}

function isValidDate(date) {

// date match avec formatDate DD/MM/YYYY et que elle respecte bien nombre jours (28,30,31) (fonction maxDayMonth) return true sinon false
if (date.match(formatDate) && maxDayMonth(date)){
    console.log("True");
} else{
    console.log("False");
}
return date

}



function maxDayMonth(date) {

    //substring() => extraire des caractères d'une chaine de caractères à partir de leur indice, retourne une chaine de caractère
 let checkDay = date.substring(0,2);
 let checkMonth = date.substring(3,5);

   //parseInt() => examine une chaine de caractères et renvoie un entier ex "20"=> 20
 checkDay = parseInt(checkDay, 10);
 checkMonth = parseInt(checkMonth, 10);
 console.log(checkDay, checkMonth); 

 //si le mois a une valeur de 2 (février), on bloque le nombre de jour à 28
 if (checkMonth == 2 && checkDay <= 28 ){
     console.log("ok1");
     return true;  
 }
 
 //si le mois a une valeur de 4, 6, 9, 11, on bloque le nombre de jour à 30
 else if ((checkMonth == 4 || checkMonth == 6 || checkMonth == 9 || checkMonth == 11)   && checkDay <= 30) {
    console.log("ok2");
    return true;  
 }

 //si le mois a une valeur de 1, 3, 5, 7, 8, 10, 12, on bloque le nombre de jour à 31
 else if ((checkMonth == 1 || checkMonth == 3 || checkMonth == 5 || checkMonth == 7 || checkMonth == 8 || checkMonth == 10 || checkMonth == 12  )   && checkDay <= 31 ) {
    console.log("ok3");
    return true;
    
}

//sinon on retourne faux
 else{
     console.log("faux");
    return false; 
 }

}

//Vérification que la date entrée est palindrome ou non => [0][1]/[3][4]/[6][7][8][9]

function isPalindrome(date){
    if ((date[0] === date[9]) && (date[1] === date[8]) && (date[3] === date[7]) && (date[4] === date[6])) {
        console.log("palindrome");
        return true;
    }
    else{
        console.log("wrong");
        return false;
    }
    
}


function getNextPalindromes(){
    //année de départ
    let anneeUn = "2022";
    //split() transforme string "2022" en array ["2","0","2","2"]
    let anneeUnSplit = anneeUn.split("");
    //reverse() inverse les élèments du array ["2", "2", "0", "2"]
    let anneeReverse = anneeUnSplit.reverse();
    //join() retranfor le array en string "2202"
    let anneeDeux = anneeReverse.join("")
    console.log(anneeDeux);
    //crée un palindrome en addition anneeDeux "2202" + anneeUn "2022" 
    let palindrome = anneeDeux  + anneeUn;
    console.log(palindrome);
}



let date = ask();
isValidDate(date);
isPalindrome(date);
getNextPalindromes()

//-----//


function getNextPalindromesDeux(){

let yearMin = "2022";  
let yearMax = 2050;
let i = yearMin;

for (i; i <= yearMax; i++){

    //**Transforme iteration de i ex: 2023 en string "2023"**//
    let iString = i.toString();

    //**split() transforme string "2022" en array ["2","0","2","2"]**//
    let anneeUnSplitBis = iString.split("");

    //**reverse() inverse les élèments du array ["2", "2", "0", "2"]**//
    let anneeReverseBis = anneeUnSplitBis.reverse();

    //**join() retranforme le array en string "2202"**//
    let anneeDeuxBis = anneeReverseBis.join("")
    console.log(anneeDeuxBis);

        if (anneeDeuxBis != iString){

        //**crée un palindrome en addition anneeDeux "2202" + anneeUn "2022" **//
        let palindromeBis = (anneeDeuxBis  + iString).split("");
       
        //***Réintégre "/" dans la date ***//
        palindromeBis.splice(2,0,"/");
        palindromeBis.splice(5,0,"/");
        
        //***Retransforme palindromeBis en string et on supprime les "," entre chaque chiffre en format DD/MM/YYYY***//
        let dateFormat = palindromeBis.toString().replace(/,/g," ");
        console.log(dateFormat);
    

        }else{
        return false
        }


   
     }       
}


getNextPalindromesDeux()
