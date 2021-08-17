var readlineSync = require('readline-sync');
var chalk = require('chalk');

var userName = readlineSync.question("Whats's your name? \n");
userName=userName.toUpperCase();

var score=0;

console.log(chalk.cyan("Welcome ",userName,", Let's see how much do you know Sameeksha :) \n"));

console.log(chalk.blue.bold("Rules!"));
console.log(chalk.yellow("1. There are total 5 questions, you have to attempt all of them."));
console.log(chalk.yellow("2. For right answer you will get 2 point and for wrong answer you will lose 1."));

function play(question, answer)
{

  var userAnswer = readlineSync.question(question);
  
  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
  console.log(chalk.green("Right!"));
  score=score+2;
  } 
  
  else
  {
  console.log(chalk.red("Wrong!"));
  score=score-1;
  }

  console.log("current score: ",score);

console.log("------------")
}

var questions=[
  {
  question:"Where do I live? ",
  answer:"moradabad"
  },
  {
  question:"What is my favorite colour? ",
  answer:"white"
  },
  {
  question:"What is my favorite song? ",
  answer:"tose naina"
  },
  {
  question:"Who is my favorite singer? ",
  answer:"arijit singh"
  },
  {
  question:"Who is my favorite superhero? ",
  answer:"captain marvel"
  }
]


for (var i=0; i<questions.length; i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.green("Congratulations! You scored: ",score));


var leaderBoard=[
  {name: 'Twinkle',score: '7'},
]

console.log("Leaderboard\n");

console.log("Name     Score ")


for(var i=0; i<leaderBoard.length; i++)
{
  console.log(chalk.green(leaderBoard[i].name,' ',leaderBoard[i].score));
}
console.log(chalk.cyan.bold("\nThanks for solving the quiz, if your score is higher than the leaderboard score, Please send a screenshot to Sameeksha."));