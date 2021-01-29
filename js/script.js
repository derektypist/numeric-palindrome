// Set Up Variables
let txt="";
function getNumberInfo() {
    // Get the value of the input field
    let num = document.getElementById("mynumber").value;
    // Check if number is valid
    if (isNaN(num) || num<0 || num>9999999999 ) {
       txt += `Invalid Input.  Please enter a number between 0 and 9999999999.`;
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

function isPalindrome(x) {
    let answer = 0;
    let temp = x;
    while (temp > 0) {
        answer = (10*answer) + (temp%10);
        temp = Math.floor(temp/10);
    }
    return answer == x;
}