# Numeric Palindrome

The purpose of the exercise is to check if the number is a palindrome.  A palindrome
is a number, which reads the same backward as forward, such as 111, 4, 161 and 4884.

## UX

As a user, if I make an invalid input, I should get the message

`Invalid Input.  Please enter a whole number between 0 and 9999999999.`

Invalid inputs are
* `Numbers less than 0 or greater than 9999999999`
* `Inputs other than a number (e.g. string)`
* `Empty field`
* `Number not an integer (e.g. 65.7)`

As a user, I want to see what number I have entered, as long as the input is valid.
As a user, I want to see if the number is a palindrome or not.
As a user, for every time I hit the submit button, I want to see fresh information.
As a user, I want to reset if I make a mistake for example.

The valid number is between 0 and 9999999999 and it is an integer.

The function isPalindrome returns true or false.

## Features

Features form validation in terms of data type, number type, value of number and empty form fields.
