// Generates a random number and stores the value in a variable
const randomNumber = Math.floor(Math.random() * 20) + 1;

// Output the random number to the console
console.log(randomNumber);

//
// The two lines below, when uncommented, will write the random number to
// a text file using the 'fs' module (short for filesystem). This file will
// be written to the host directory you specified when bind-mounting the volume
//

// const fs = require('fs');
// fs.writeFileSync('random-number.txt', randomNumber);
