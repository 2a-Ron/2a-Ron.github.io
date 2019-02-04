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
var Q6correctAnswer = 7;
var Q6guessRemains = 4;
while (Q6guessRemains > 0) {
  var answer6 = prompt('Guess my favorite number between 0 and 99. HINT: One of my favorite authors is Zecharia Sitchin.  In the book "The 12th Planet" many numbers are discussed, but only one is my favorite number.  You have 4 tries to get it right.');
  answer6 = parseInt(answer6);
  if (answer6 === Q6correctAnswer) {
    alert('CORRECT! According to Zecharia Sitchin, the ancient Sumerians describe earth from the outter most part of our solar system as the 7th planet not the 4th planet.');
    totalCount++;
    break;
  } else if (answer6 > Q6correctAnswer) {
    Q6guessRemains--;
    alert('Not quite, ' + charName + ', just a little bit lower.');
  } else if (answer6 < Q6correctAnswer) {
    Q6guessRemains--;
    alert('Not quite, ' + charName + ', just a little bit higher.');
  } else if (answer6 === 0) {
    alert('Sorry ' + charName + ', you have run out of guesses.');
    alert('According to Zecharia Sitchin, the ancient Sumerians describe earth from the outter most part of our solar system making it the 7th planet not the 4th planet.');
  }
}
console.log(charName + ' has guessed ' + answer6 + '.');
console.log(Q6guessRemains);

// Question 7
// Answer 7
var Q7guessRemains = 6;
var famPeople = ['bruce lee', 'winston churchill', 'aristotle', 'albert einstein', 'abraham lincoln'];
/* I have the quotes in an array because later on I may want to use the indexing from famPeople and famQuote
to combine into some kind of display

var famQuote = ['"The successful warrior is the average man, with laser-like focus." -', '"Success is not final, failure is not fatal: it is the courage to continue that counts." -', 
'"We are what we repeatedly do; excellence, then, is not an act but a habit." -', '"The person who reads too much and uses his brain too little will fall into lazy habits of thinking." -', 
'"I\'m a success today because I had a friend who believed in me and I didn\'t have the heart to let him down." -'];
*/
alert(charName + ', many famous people have been quoted through out history.');
do{
  var famPersonGuess = prompt('Try and guess one of my favorite people to quote.');
  famPersonGuess = famPersonGuess.toLowerCase();

  if (famPeople.includes(famPersonGuess)) {
    alert('CORRECT');
    console.log('Quotes of Famous People ' + totalCount);
    totalCount++;
    break;
  }
  if (!famPeople.includes(famPersonGuess)) {
    alert('INCORRECT, try again.');
    Q7guessRemains--;
    console.log(Q7guessRemains);
  }
  if (Q7guessRemains === 6) {
    alert(charName + ', you are out of tries.')
  }
} while (Q7guessRemains > 6);
alert('My top 5 favorite people to quote are: Bruce Lee, Winston Churchill, Aristotle, Albert Einstein, and Abraham Lincoln');

// TALLIES THE FINAL SCORE
alert('ALL FINISHED.  ' + charName + ' of the ' + charRace + ' race, please join us for the announcement of your final score!');
alert('FINAL SCORE: ' + totalCount + ' out of 7 possible.');
console.log('The User\'s final score was ' + totalCount + ' out of 7');

// END THE GAME
var userSat = prompt(charName + ', were you happy with your experience?');
userSat = userSat.toUpperCase();

if ((userSat === 'YES') || (userSat === 'Y')) {
  alert('Thanks a lot.  There\'s more where that came from, but until then, check out more games like asteroids or pong in the "Games" section.');
} else if ((userSat === 'NO') || (userSat === 'N')) {
  alert('Well tough ****!  It was fun to make this game!');
}
console.log('User Satisfaction Response: ' + userSat);







// allow for scroll
