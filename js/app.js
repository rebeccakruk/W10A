// Function 1
function math(num1, num2) {
    let result = (num1 + num2) * 5;
    return result;
}
// calling function 1
console.log(math(2, 4));
console.log(math(6, 2));
console.log(math(10, 10));

// Function 2
// This function contains an 'if' statement. The result will log true or false based on the number of characters in the string.
function checkLetters(str) {
    if (str.length > 10) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// calling function 2, various name lengths give true or false based on if statement in function code
checkLetters(`Featherstonehaugh`);
checkLetters("Kruk");
checkLetters("MacDonald-Anderson");

// Function 3

function phonics(list) {
    // I defined a new array here, called phWords, so that I could index it and get the first one to log. The first instance of the array would be [0]
    let phWords = []
    for (let i = 0; i < list.length; i++) {
        // the starts with is what resulted in the Ph words appearing, but there were two of them, which was a problem because we only want one.
        if (list[i].startsWith(`Ph`)){
            // I created a new array using 'push'.
            phWords.push(list[i]);
        }
    }
    //this is the index, which will print out only the first. Had I done 'console.log(phWords[1]);, Phony would print, because it's the second word of the array.
    console.log(phWords[0]);
}

//calling function 3
phonics([`Toyota`, `Subaru`, `Phake`, `Acura`, `Audi`, `Phony`]);


// I had this working but it didn't come up in class, so I kept going. Breaks are bad, right?
// function phonics(list) {
//     for (let i = 0; i < list.length; i++) {
//         if (list[i].startsWith(`Ph`)){
//             console.log(list[i]);
//             break;
//         }
//     }
// }
// phonics([`Toyota`, `Subaru`, `Phake`, `Acura`, `Audi`, `Phony`]);