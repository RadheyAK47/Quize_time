var canva;
var backgroundImg,contestantCount,allContestants,answer;
var database,question,contestant,quiz;
var gameState = 0;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new quiz();
  quiz.gameState();
  quiz.start();
}


function draw(){
  background("pink");
if(contestantCount === 2){
  quiz.update(1);
}
  if(gameState ===1){
    clear();
    quiz.play();
  }
}
