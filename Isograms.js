/*
 An isogram is a word that has no repeating letters, consecutive or non-consecutive.
 Implement a function that determines whether a string that contains only letters is an isogram.
 Assume the empty string is an isogram. Ignore letter case.

 isIsogram( "Dermatoglyphics" ) == true
 isIsogram( "aba" ) == false
 isIsogram( "moOse" ) == false // -- ignore letter case
 */

function isIsogram(str){
    let input = str.split('');
    input = input.map(x => x.toLowerCase());
    let occurrence = [];

    for (let letter of input){
        let currentLetter = input.filter(x => x === letter);
        occurrence.push(currentLetter.length);
    }

    if (occurrence.every(x => x === 1) === true){
        return true;
    } else {
        return false;
    }
}