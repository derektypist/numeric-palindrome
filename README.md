# Numeric Palindrome

The purpose of the project is to check if the number is a palindrome.  A palindrome
is a number, which reads the same backward as forward, such as 111, 4, 161 and 4884.

## UX

As a user, if I make an invalid input, I should get the message

`Invalid Input.  Please enter a whole number between 0 and 9999999999.`

Invalid inputs are:

    * Numbers less than 0 or greater than 9999999999
    * Inputs other than a number (e.g. string)
    * Empty field
    * Number not an integer (e.g. 65.7)

As a user, I want to see what number I have entered and if that number is a palindrome
as long as the input is valid.

As a user, if I enter 141, I should get the message `Number 141 is a palindrome.` on the second line.
As a user, if I enter 142, I should get the message, `Number 142 is not a palindrome.` on the second line.

As a user, for every time I hit the submit button, I want to see fresh information.
As a user, I want to reset if I make a mistake for example.
As a user, I expect placeholders on the input field.
As a user, I want an indication of required on the label, so that I know that it is compulsory to
enter something in the field. 

The valid number is between 0 and 9999999999 and it is an integer.

The function isPalindrome returns true or false.

How the function isPalindrome Works

    Set the answer to 0 and copy the entered number into a new variable (e.g. temp).
    Formula answer = answer * 10 + temp%10
    temp = Math.floor(temp/10)
    Repeat until temp is 0
    Compare the answer to the entered number (i.e. answer == x)

    Example 1 - 142
    In the 1st stage, answer becomes 2 and temp becomes 14
    In the 2nd stage, answer becomes 24 and temp becomes 1
    In the 3rd stage, answer becomes 241 and temp becomes 0
    Does 241 equal 142?  No, so 142 is not a palindrome (returns false).

    Example 2 - 161
    In the 1st stage, answer becomes 1 and temp becomes 16
    In the 2nd stage, answer becomes 16 and temp becomes 1
    In the 3rd stage, answer becomes 161 and temp becomes 0
    Does 161 equal 161?  Yes, so 161 is a palindrome (returns true).

## Features

Features form validation in terms of data type, number type, value of number and empty form fields.
Gives information on the number entered and checks if the number is a palindrome.
When clicking on the submit button, fresh information appears.  It has a reset button in case of
an emergency.

## Technologies

This project uses the technologies of HTML5, CSS3, Bootstrap 5.0.0-beta1, Google Fonts and JavaScript.

## Testing

Ensure all the user stories have been met.  For example, if I do not enter anything on the field, I get
an error message `Invalid input.  Please enter a number between 0 and 9999999999.`

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/numeric-palindrome) at the main branch.

## Credits

### Content

Written by me, although referred to other sources such as Stack Overflow, Geeks for Geeks and W3 Schools.

### Acknowledgements

* [Geeks For Geeks](https://www.geeksforgeeks.org)
* [Stack Overflow](https://www.stackoverflow.com)
* [w3 Schools](https://www.w3schools.com)
* [Bootstrap](https://www.getbootstrap.com)


