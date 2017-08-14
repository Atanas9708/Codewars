/*
 Given the triangle of consecutive odd numbers:

            1
         3     5
      7     9    11
   13    15    17    19
21    23    25    27    29

Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

 rowSumOddNumbers(1); // 1
 rowSumOddNumbers(2); // 3 + 5 = 8
 */

function rowSumOddNumbers(n) {
    let firstDigit = (n * n) - (n - 1);
    let count = 0;
    let result = 0;
    while (count < n){
        if (firstDigit % 2 !== 0){
            result += firstDigit;
            count++;
        }
        firstDigit++;
    }
    return result;
}