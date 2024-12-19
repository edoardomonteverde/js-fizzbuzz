/* Cicle from 1 to 100 */
for (i=1; i<=100; i++) {
    /* Check if Number is divisible by 3 and print "Fizz" */
    if (i % 3 === 0) {
        console.log("Fizz");
    }
    /* Check if Number is divisible by 5 and print "Buzz" */
    if (i % 5 === 0) {
        console.log("Buzz");
    }
    /* Check if Number is divisible by both 3 and 5, and print "FizzBuzz" */
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
/*If the Number is not divisible by 3 or 5, print simple number  */
    else {
        console.log(i);
    }
}

