'use strict';
// KEEPS TRACK OF THE TOTAL CORRECT ANSWERS
var totalCount = 0;
// INTRO TO THE GUESSING GAME
alert('Welcome User!  Up next is a quick guessing game.');
alert('Please answer the following questions with either Yes, No, Y, or N.');
alert('Before we can get started, you will need to create your character.');

var charName = prompt('What is your charater name?');
console.log(charName);

var charRace = prompt(charName + ', choose a race.  Human or Alien?').toUpperCase();
while ((charRace !== 'HUMAN') && (charRace !== 'ALIEN')) {
  charRace = prompt(charName + ', your selection was invalid.  Please type Human or Alien.').toUpperCase();
}
alert(charName + ', you have selected the ' + charRace + ' Race.');
alert('Welcome ' + charName + ' of the ' + charRace + ' race.  Let us get started.');
console.log(charRace);

// Qestion 1
// Answer 1
var answer1 = prompt('I love the outdoors, hiking, camping, hunting, and exploring. ' + charName + ', am I an avid rock climber?').toLowerCase();
if ((answer1 === 'yes') || (answer1 === 'y')) {
  alert('CORRECT');
  totalCount++;
} else if ((answer1 === 'no') || (answer1 === 'n')) {
  alert('WRONG');
}
console.log(answer1);

// Question 2
// Answer 2
var answer2 = prompt('I love to read, think critically, and discuss deep philosophical ideas.  ' + charName + ', have I ever written a book?').toLowerCase();
if ((answer2 === 'yes') || (answer2 === 'y')) {
  alert('WRONG');
} else if ((answer2 === 'no') || (answer2 === 'n')) {
  alert('CORRECT');
  totalCount++;
}
console.log(answer2);

// Question 3
// Answer 3
var answer3 = prompt('My favorite musical artists/bands are as follows: Ludwig van Beethoven, Metallica, AC-DC, Santana, and Chris Cornell.  ' + charName + ', do I play a musical Instrument?').toLowerCase();
if ((answer3 === 'yes') || (answer3 === 'y')) {
  alert('CORRECT');
  totalCount++;
} else if ((answer3 === 'no') || (answer3 === 'n')) {
  alert('WRONG');
}
console.log(answer3);

// Question 4
// Answer 4
var answer4 = prompt('I have been snowboarding since I was 12 years old, over 20 years.  ' + charName + ', have I participated in any snowboard competitions?').toLowerCase();
if ((answer4 === 'yes') || (answer4 === 'y')) {
  alert('WRONG');
} else if ((answer4 === 'no') || (answer4 === 'n')) {
  alert('CORRECT');
  totalCount++;
}
console.log(answer4);

// Question 5
// Answer 5
var answer5 = prompt('I love the Mustang Mach 1 Fastback.  ' + charName + ', have I ever ridden a horse?').toLowerCase();
if ((answer5 === 'yes') || (answer5 === 'y')) {
  alert('WRONG');
} else if ((answer5 === 'no') || (answer5 === 'n')) {
  alert('CORRECT');
  totalCount++;
}
console.log(answer5);

// Lab 03
// Question 6
// Answer 6

// Question 7
// Answer 7

// TALLIES THE FINAL SCORE
alert('ALL FINISHED.  ' + charName + ' of the ' + charRace + ' race, please join us for the announcement of your final score!');
alert('FINAL SCORE: ' + totalCount + ' out of 7 possible.');
console.log(totalCount);








// allow for scroll
