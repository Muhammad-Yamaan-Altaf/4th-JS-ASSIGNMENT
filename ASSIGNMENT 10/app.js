// ! ASSIGNMNET 10
// ? CHAPTERS 17 - 20
// * Q.1
var multiArray = [];

//* Q.2
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// *Q.3
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// *Q.4
// Prompt the user to enter the number for the multiplication table
var number = parseInt(prompt("Enter the number for the multiplication table:"));
// Prompt the user to enter the length of the multiplication table
var length = parseInt(prompt("Enter the length of the multiplication table:"));
// Check if the input is a valid number
if (!isNaN(number) && !isNaN(length)) {
    // Use a for loop to generate and print the multiplication table
    for (var i = 1; i <= length; i++) {
        var result = number * i;
        console.log(number + " x " + i + " = " + result);
    }
} else {
    console.log("Please enter valid numbers for the number and length.");
}

//* Q.5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    console.log("Element at index " + i + " is " + fruits[i]);
}

// *Q.6
document.write("a. Counting: ");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br>b. Reverse counting: ");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br>c. Even: ");
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
document.write("<br>d. Odd: ");
for (var i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}
document.write("<br>e. Series: ");
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}

// *Q.7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to our bakery! What would you like to order today?");
var found = false;
for (var i = 0; i < A.length; i++) {
    if (userInput === A[i]) {
        found = true;
        break;
    }
}
if (found) {
    alert(userInput + " is available at our bakery. Enjoy!");
} else {
    alert("Sorry, " + userInput + " is not available at our bakery.");
}

// *Q.8
var A = [24, 53, 78, 91, 12];
var largest = A[0];
for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}
console.log("The largest number in the array is: " + largest);

// *Q.9
var A = [24, 53, 78, 91, 12];
var smallest = A[0];
for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}
console.log("The smallest number in the array is: " + smallest);

// *Q.10
for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

// ? CHAPTERS 21 - 25
// *Q.1
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome!");

// *Q.2
var favoritePhoneModel = prompt("Enter your favorite mobile phone model:");
var inputLength = favoritePhoneModel.length;
document.write("Length of your favorite mobile phone model input: " + inputLength);

// *Q.3
var word = "Pakistani";
var letterToFind = "n";
var indexOfLetter = word.indexOf(letterToFind);
document.write("The index of letter '" + letterToFind + "' in the word '" + word + "' is: " + indexOfLetter);

// *Q.4
var phrase = "Hello World";
var letterToFind = "l";
var lastIndex = phrase.lastIndexOf(letterToFind);
document.write("The last index of letter '" + letterToFind + "' in the phrase '" + phrase + "' is: " + lastIndex);

// *Q.5
var word = "Pakistani";
var characterAtIndex3 = word.charAt(3);
document.write("The character at the 3rd index in the word 'Pakistani' is: " + characterAtIndex3);

// *.6
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
alert("Hello, " + fullName + "! Welcome!");

// *Q.7
// Original word
var word = "Hyderabad";
// Replace "Hyder" with "Islam"
var newWord = word.replace("Hyder", "Islam");
// Display the result
document.write("Original Word: " + word + "<br>");
document.write("Replaced Word: " + newWord);

// *Q.8
var message = "Ali and Sami are best friends. They play cricket and football together.";
// Replace all occurrences of "and" with "&"
var newMessage = message.replace(/and/g, "&");
// Display the result
document.write("Original Message: " + message + "<br>");
document.write("New Message: " + newMessage);

// *.9
var strNumber = "472"; // A string containing "472"
var num = parseInt(strNumber); // Convert the string to a number
// Display the values and types
document.write("Original String: " + strNumber + "<br>");
document.write("Converted Number: " + num + "<br>");
document.write("Type of Original String: " + typeof strNumber + "<br>");
document.write("Type of Converted Number: " + typeof num);

// *Q.10
// Prompt the user for input
var userInput = prompt("Enter some text:");
// Convert the input to capital letters
var capitalizedText = userInput.toUpperCase();
// Display the capitalized text
document.write("Original Text: " + userInput + "<br>");
document.write("Capitalized Text: " + capitalizedText);

// *Q.11
//  Prompt the user for input
var userInput = prompt("Enter some text:");
// Function to convert a string to title case
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
// Convert the input to title case
var titleCaseText = toTitleCase(userInput);
// Display the title case text
document.write("Original Text: " + userInput + "<br>");
document.write("Title Case Text: " + titleCaseText);

// *Q.12
var num = 35.36;
// Convert the number to a string
var numString = num.toString();
// Remove the dot from the string
var withoutDot = numString.replace(".", "");
// Display the result
document.write("Original Number: " + num + "<br>");
document.write("Number as String: " + withoutDot);

// *Q.13
function isValidUsername(username) {
    // Define an array of special characters
    var specialCharacters = ['@', '.', ',', '!'];
    // Loop through each character in the username
    for (var i = 0; i < username.length; i++) {
        // Check if the character is a special character
        if (specialCharacters.indexOf(username[i]) !== -1) {
            return false; // Username contains a special character
        }
    }
    return true; // Username is valid
}
// Get user input for the username
var username = prompt("Enter your username:");
// Check if the username is valid
if (isValidUsername(username)) {
    alert("Username is valid: " + username);
} else {
    alert("Please enter a valid username without special characters [@, ., , !]");
}

// *Q.14
// Define an array of items
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// Function to perform case-insensitive search
function searchArray(input) {
input = input.toLowerCase(); // Convert input to lowercase for case-insensitive search
// Loop through the items array
for (var i = 0; i < items.length; i++) {
    if (items[i].toLowerCase() === input) {
        return true; // Item found
        }
    }
    return false; // Item not found
}
// Get user input for the item to search
var userInput = prompt("Enter an item to search:");
// Check if the item is found in the array
if (searchArray(userInput)) {
    alert(userInput + " is available in the list.");
} else {
    alert(userInput + " is not available in the list.");
}

// *Q.15
function validatePassword(password) {
    // Check if the password contains alphabets and numbers
    var hasAlphabets = /[a-zA-Z]/.test(password);
    var hasNumbers = /\d/.test(password);
    // Check if the password meets length requirement
    var isLengthValid = password.length >= 6;
    // Check if the password does not start with a number
    var doesNotStartWithNumber = /^[a-zA-Z]/.test(password);
    return hasAlphabets && hasNumbers && isLengthValid && doesNotStartWithNumber;
}
// Prompt the user to enter a password
var userPassword = prompt("Enter a password:");
// Validate the password
if (validatePassword(userPassword)) {
    alert("Password is valid.");
} else {
    alert("Password does not meet the requirements. Please enter a valid password.");
}

// *Q.16
var university = "University of Karachi";
        // Use the split method to convert the string into an array
        var universityArray = university.split(" ");
        // Display the elements of the array
        document.write("Original String: " + university + "<br>");
        document.write("Array Elements: " + universityArray.join(", "))

        // *Q.17
        var userInput = prompt("Enter a string:");
        // Check if the user provided input
        if (userInput !== null && userInput !== "") {
            // Get the last character of the input
            var lastCharacter = userInput.charAt(userInput.length - 1);
            // Display the last character
            alert("The last character of your input is: " + lastCharacter);
        } else {
            // Handle the case where the user didn't provide input
            alert("No input provided. Please enter a string.");
        }
// *Q.18
var inputString = "The quick brown fox jumps over the lazy dog";
// Convert the input string to lowercase for case-insensitive matching
var lowercaseString = inputString.toLowerCase();
// The word to count
var wordToCount = "the";
// Split the string into words
var words = lowercaseString.split(' ');
// Initialize a counter
var count = 0;
// Loop through the words and count occurrences of the target word
for (var i = 0; i < words.length; i++) {
    if (words[i] === wordToCount) {
        count++;
    }
}
// Display the count
alert("The word '" + wordToCount + "' appears " + count + " times in the string.")
