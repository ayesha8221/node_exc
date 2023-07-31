// EXERCISE 1
var fs = require('fs');


// writing content to a file
fs.writeFile('data.txt', 'Hello Ayesha!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

//   Appending new content to file
  fs.appendFile('data.txt', 'Hello Asiphe!', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });

//  Answer: The new content was placed on a new line

// EXERCISE 2

function Person(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}

module.exports = Person;