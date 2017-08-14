/*
 This kata is to practice simple string output. Jamie is a programmer, and James' girlfriend.
 She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

 ###Task:

 You need to return a string that displays a diamond shape on the screen using asterisk ("*") characters.
 Please see provided test cases for exact output format.

 The shape that will be returned from print method resembles a diamond,
 where the number provided as input represents the number of *’s printed on the middle line.
 The line above and below will be centered and will have 2 less *’s than the middle line.
 This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure.

 Return null if input is even number or negative (as it is not possible to print diamond with even number or negative number).

 Please see provided test case(s) for examples.

 JS students, like Python ones, must implement the diamond(n) method, and return null for invalid input.
 */

function diamond(n){
    // Return if the given number is less than 3 or even.
    if (n < 3 || n % 2 === 0){
        return null;
    }

    let diam = '';

    // Draw upper body.
    let upperLeftSide = (n - 1) / 2;
    let upperStart = 1;
    let upperRightSide = 0;
    for (let i = 0; i <= (n - 1) / 2; i++){
        let upperBody = ' '.repeat(upperLeftSide) + '*'.repeat(upperStart) + '*'.repeat(upperRightSide);
        diam += upperBody + '\n';
        upperStart++;
        upperLeftSide--;
        upperRightSide++;
    }
    // Draw lower body.
    let lowerLeftSide = 1;
    let lowerStart = n - 2;
    let lowerRightSide = n - ((n - 2) + 1);
    for (let j = (n - 1) / 2; j > 0; j--){
        let lowerBody = ' '.repeat(lowerLeftSide) + '*'.repeat(lowerStart);
        diam += lowerBody + '\n';
        lowerStart-= 2;
        lowerLeftSide++;
    }
    return diam
}