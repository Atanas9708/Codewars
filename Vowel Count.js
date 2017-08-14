/*
 Return the number (count) of vowels in the given string.

 We will consider a, e, i, o, and u as vowels for this Kata.
 */

function getCount(str) {
    let count = 0;
    for (let word of str){
        switch (word){
            case 'a':
                count++;
                break;
            case 'e':
                count++;
                break;
            case 'o':
                count++;
                break;
            case 'i':
                count++;
                break;
            case 'u':
                count++;
                break;
        }
    }

    return count;
}