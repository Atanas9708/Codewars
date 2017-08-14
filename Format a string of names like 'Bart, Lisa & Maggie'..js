/*
 Given: an array containing hashes of names

 Return: a string formatted as a list of names separated by commas except for the last two names,
 which should be separated by an ampersand.

 Example:

 list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
 // returns 'Bart, Lisa & Maggie'

 list([ {name: 'Bart'}, {name: 'Lisa'} ])
 // returns 'Bart & Lisa'

 list([ {name: 'Bart'} ])
 // returns 'Bart'

 list([])
 // returns ''
 Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
 */

function list(names){
    let arr = [];
    for (let line of names){
        for (let name in line){
            arr.push(line[name]);
        }
    }
    let lastTwoNames = [];
    let lastName = arr[arr.length - 1];
    let halfPast = arr[arr.length - 2];
    if (arr.length > 2){
        lastTwoNames.push(halfPast, lastName);
        return arr.slice(0, arr.length - 2).join(', ') + ', ' + lastTwoNames.join(' & ');
    } else if (arr.length === 2){
        lastTwoNames.push(halfPast, lastName);
        return lastTwoNames.join(' & ');
    } else if (arr.length <= 1){
        return arr.join('');
    }
}