var canvas;
var gameState, contestantCount;
var database, quiz, question, contestant; 

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();  
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  question = new Question();
  question.display();
  contestant = new Contestant();
  contestant.updateCount(contestantCount);
  contestant.update();
}


function draw(){
  background("black");

  drawSprites();
}
