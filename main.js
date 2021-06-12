// Magic Eight Ball Project

// User greeting

let userName = 'Ryan';

userName ? console.log(`Hello, ${userName}!`)
: console.log('Hello!');

// The question the user wants to ask the Magic Eight Ball

const userQuestion = 'Will I become a good JavaScript developer?';

console.log(`${userName} asked: ${userQuestion}`);

// Generate a random number between 0 and 7

const randomNumber = Math.floor(Math.random() * 8);

// Create variable to reference random number
let eightBall = '';

// Create a control flow that takes in the random number and assigns a reply

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain!';
    break;
  case 1:
    eightBall = 'It is decidedly so!';
    break;
  case 2:
    eightBall = 'Reply hazy, try again.';
    break;
  case 3:
    eightBall = 'Cannot predict now.';
    break;
  case 4:
    eightBall = 'Do not count on it.'
    break;
  case 5:
    eightBall = 'My sources say no...'
    break;
  case 6:
    eightBall = 'Outlook not so good.'
    break;
  case 7:
    eightBall = 'Signed point to ... YES!'
    break;
  default:
    eightBall = 'You shook me too hard. Try again.'
    break;
};

// Print the Magic Eigth Ball's answer.

console.log(`The Magic Eight Ball answered: ${eightBall}`);
