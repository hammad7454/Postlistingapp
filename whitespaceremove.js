

let string = 'Hello      Wor    ld';
let stringWithoutSpaces = '';

for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
        stringWithoutSpaces += string[i];
    }
}

console.log(stringWithoutSpaces); 