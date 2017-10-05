var triviaTime = 15;
  var clockRunning= false;
  var currentQuestion= 0;
  var numCorrect=0;
  var numIncorrect=0;
  var noAnswer=0;
  var quizDone=false;
  var questionCompleted=false;
  var breakTime=5;
  var breakRunning=false;
  var userAnswer;
  //var clickAnswer=false;
  var bool_numCorrect=false;
  var bool_numInCorrect=false;
  var bool_numNoAnswer=false;
  //global object for trivia questions
var triviaQ = [

                {
                               question: "What animal is on House Baratheon's sigil?",
                                answers: ["Boar","Bear","Stag","Lion"],
                                correctAnswer: 2

                },

                {
                                question: "What are House Lannister's words?",
                                answers: ["Hear Me Roar!","A Lannister Always Pays His Debts","Ours Be the Glory","Righteous In Wrath"],
                                correctAnswer: 0

                },

                {
                                question: "Who says, 'When you play the game of thrones, you win or you die'?",
                                answers: ["Varys","Cersei Lannister","Tyrion Lannister","Petyr Baelish"],
                                correctAnswer: 1

                },

                {
                                question: "Who has Petyr Baelish loved since he was a child?",
                                answers: ["Sansa Stark","Lysa Arryn","Catelyn Stark","Cersei Lanister"],
                                correctAnswer: 2

                },

                {
                                question: "Who is Joffrey Baratheon's father?",
                                answers: ["Tyrion Lannister","Stannis Baratheon","Robert Baratheon","Jaime Lannister"],

                                correctAnswer: 3

                }



]

var totalQuestions=triviaQ.length
function startTimer() {
if (!clockRunning){
     
   triviaId = setInterval(decrement, 1000);
   clockRunning = true;
   }
   $("#startGame").hide();

}

function stopTimer()
{ clearInterval(triviaId);
}


function decrement() {
      triviaTime--;
      $("#triviaTime").html("<h2>" + "TimeRemaining:" +  triviaTime + "</h2>");
      $("#submit").show();
    if (triviaTime === 0) {
    stopTimer();
    
    }
}

function breakTimer(){
if (!breakRunning){
     
   triviaId = setInterval(decrement, 1000);
   breakRunning = true;
   }
}

function breakDecrement(){
triviaTime--;
if (triviaTime === 0) {
    stopBreakTimer();
    
    }
}

function stopBreakTimer(){
clearInterval(breakTime);
}

function createQuiz(){
      $("#quizSection").empty();
              

          
          //for(i=0;i<triviaQ.length;i++){
          var html = $('<div>').addClass("question").appendTo('#quizSection');
          $(html).append(triviaQ[currentQuestion].question)
          //console.log(triviaQ[currentQuestion].question)
          
            for(j=0;j<triviaQ[currentQuestion].answers.length;j++){
            //console.log(triviaQ[currentQuestion].answers.length)
             //console.log(triviaQ[currentQuestion].answers[j]);
            
            var ans =$('<div id=answerQ'+currentQuestion+j+'>' +triviaQ[currentQuestion].answers[j] +'</div>').addClass("answers").appendTo('#quizSection')
              //$(ans).append(triviaQ[i].answers[j]);
              
              
            }
            console.log("questionloaded");
          
          }

function checkAnswer(){


var correctAnswer=triviaQ[currentQuestion].answers[triviaQ[currentQuestion].correctAnswer]
console.log("checkAnswer"+userAnswer)
console.log("correctAnswer" +correctAnswer)
//console.log("clickAnswer"+clickAnswer)
 if (userAnswer===correctAnswer){
  console.log("you got it right")
  var decision=$('<h2>You Got it Right!!</h2>').appendTo('#quizSection')
  numCorrect++;
  bool_numCorrect=true;
  }  
  // else if(!userAnswer && triviaTime===0 && clickAnswer===false ){
  // console.log("you didnt answer")
  // noAnswer++;
  // }

  else if(userAnswer!==(triviaQ[currentQuestion].answers[triviaQ[currentQuestion].correctAnswer] )){
  console.log("you got it wrong")
  var decision=$('<h2>You Got it Wrong :( :(</h2>').appendTo('#quizSection')
  numIncorrect++;
  var bool_numInCorrect=true;
  }

  

}


function displayResults(){
  stopTimer();
  breakTimer();
  $("#quizSection").empty();
  //if(numCorrect)

}



function displayResult(){
                $(".game").remove();
                $("#Submit").remove();
                triviaTime = 0;
                //stopTimer();
                $("#triviaTime").hide();
                
              $( "#results").append(
            "<div><h2>All Done!!!</h2></div>",
            "<div><h2>Correct Answers: " + numCorrect + "</h2></div>",
            "<div><h2>Incorrect Answers: " + numIncorrect + "</h2></div>",
            "<div><h2>Unanswered: " + noAnswer + "</h2></div>"
          );
              var btn=$('<button>',{
                    id:'Reset',
                    class:'btn btn-primary btn-lg col-md-offset-5',
                    text:'Reset'}
                    );
                    
                    $('body').append(btn);
        
 
}



function captureAnswer(){
  $("body").on("click",".answers",function(){
                        stopTimer();
                        $("#triviaTime").hide();
                          console.log("line 198 "+totalQuestions)
                      if(totalQuestions>0){
                                  userAnswer=$(this).text();
                                  console.log(userAnswer)
                               
                                  checkAnswer();
                                  
                                   
                                  
                                   console.log("line 208 "+totalQuestions);
                                   var result =$('<div>The Answer is' +triviaQ[currentQuestion].answers[j] +'</div>').appendTo('#quizSection');
                                   breakTimer();
                                   $("#quizSection").empty();
                                   
                                   console.log(breakTime);
                                   triviaTime=15;
                                   $("#triviaTime").show();

                                   startTimer();
                                   createQuiz();
                                  totalQuestions--;
                                  currentQuestion++;
                                //}
}
 else{
  console.log("total questions is zero")
  displayResult();
  
 }

});
}


















$(document).ready(function(){

                //$("#submit").hide();

                                $("#startGame").on("click", function(){
                                                
                                                startTimer();
                                               createQuiz();
                                               captureAnswer();

                      //                         $("body").on("click",".answers",function(){
                      // //if(totalQuestions>0){
                      //             userAnswer=$(this).text();
                      //             console.log(userAnswer)
                               
                      //             checkAnswer();
                      //             currentQuestion++;
                      //              totalQuestions--;
                                  
                      //              console.log(totalQuestions)
                      //              createQuiz();
                                        

                                // });
                      });

                              });
                             