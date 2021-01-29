// Set Up Variables
let txt="";
function getNumberInfo() {
    // Get the value of the input field
    let num = document.getElementById("mynumber").value;
    // Check if number is valid
    if (isNaN(num) || num<0 || num>9999999999 || !Number.isInteger(Number(num))) {
       txt += `Invalid Input.  Please enter a whole number between 0 and 9999999999.`;
    } else {
        // Display entered number
        txt += `You have entered the number ${num}.<p>`;
        // Check if the number is a palidrome
        if (isPalindrome(num)) {
            txt += `Number ${num} is a palindrome`;
        } else {
            txt += `Number ${num} is not a palindrome`;
        }
       
    }
     document.getElementById("numinfo").innerHTML = txt;
}

// Function to Check if the number is a palindrome
function isPalindrome(x) {
    let answer = 0;
    let temp = x;
    // Use While Loop
    while (temp > 0) {
        answer = (10*answer) + (temp%10);
        temp = Math.floor(temp/10);
    }
    // Compare the answer with the entered value
    return answer == x;
}

// Function to clear the information
function clearInfo() {
    let txt="";
    document.getElementById("numinfo").innerHTML = txt;
}