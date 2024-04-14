# Who's-Buying-Lunch-Challenge
Who's Buying Lunch? Code Challenge
You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.
Important: The output should e returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

# Solution
Example Input:
["Angela", "Ben", "Jenny", "Michael", "Chloe"];

Example Output:
Michael is going to buy lunch today!;

Step-1: Create a variable called numberOfPeople which is going to be equal to names.length. And this is going to calculate in this array that we got passed, how many names are there.

Step-2: Create a variable called randomPersonPosition which is equal to (Math.random * numberOfPeople) which giving the rsult from 0-4.99999. So, remove the decimal we use Math.floor. Hence, the final randomPersonPosition = Math.floor(Math.random() * numberOfPeople).

 
