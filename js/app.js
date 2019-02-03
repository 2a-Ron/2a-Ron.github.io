'use strict';

var charName = prompt('What is your charater name?');
console.log(charName);

var charRace = prompt(charName + ', choose a race.  Human or Alien?').toUpperCase();
console.log(charRace);

if ((charRace === 'HUMAN') && (charRace === 'ALIEN')) {
  alert(charName + ', You have selected the ' + charRace + ' race.');
} else {
  charRace = prompt('Sorry ' + charName + ', that was invalid, please try again.').toUpperCase();
  console.log(charRace);
}


while ((charRace !== 'HUMAN') && (charRace !== 'ALIEN')) {
  charRace = prompt(charName + ', you have selected an invalid character race, please try again.').toUpperCase();
}
alert(charName + ', you have selected the ' + charRace + ' Race.');

alert('this is a test alert');

var kjkj= prompt('sljflshflf?');

//Quest 1
if (var.toLowerCase() === 'kdhflkhdf' || var.toLowerCase() === 'knknkn') {
  alert('jinjinb');
} else {
  alert('knfjn');
}
console.log('variable');

//Quest 2
  var ready = prompt('I have made a silly game of questions for you to get to know me a bit better! Boy, it is your lucky day! Are you ready to play '
 + userName + '?');

if (ready.toLowerCase() === 'yes' || ready.toLowerCase() === 'y') {
  alert('Let us begin.');
} else {
  alert('Aw cmon, no party poopers allowed!');
}
console.log('ready');

//Quest 3
var ready = prompt('I have made a silly game of questions for you to get to know me a bit better! Boy, it is your lucky day! Are you ready to play '
+ userName + '?');

if (ready.toLowerCase() === 'yes' || ready.toLowerCase() === 'y') {
 alert('Let us begin.');
} else {
 alert('Aw cmon, no party poopers allowed!');
}
console.log('ready');

//Quest 4
var ready = prompt('I have made a silly game of questions for you to get to know me a bit better! Boy, it is your lucky day! Are you ready to play '
+ userName + '?');

if (ready.toLowerCase() === 'yes' || ready.toLowerCase() === 'y') {
 alert('Let us begin.');
} else {
 alert('Aw cmon, no party poopers allowed!');
}
console.log('ready');

//Quest 5
var ready = prompt('I have made a silly game of questions for you to get to know me a bit better! Boy, it is your lucky day! Are you ready to play '
+ userName + '?');

if (ready.toLowerCase() === 'yes' || ready.toLowerCase() === 'y') {
 alert('Let us begin.');
} else {
 alert('Aw cmon, no party poopers allowed!');
}
console.log('ready');

//Quest 6






//Quest 7









// allow for scroll
