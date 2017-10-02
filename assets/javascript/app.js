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
  var clickAnswer=false;

  //global object for trivia questions
var triviaQ = [

                {
                                question: "What is the national language of India?",
                                answers: ["English","Hindi","Tulu","Nepali"],
                                correctAnswer: 1

                },

                {
                                question: "The oldest parliament in the world belongs to what country?",
                                answers: ["Iceland","Netherlands","Scotland","Ireland"],
                                correctAnswer: 0

                },

                {
                                question: "In what year did Fidel Castro die?",
                                answers: ["2015","2014","2016","2017"],
                                correctAnswer: 2

                },

                {
                                question: "HTML and CSS are computer languages used to create what?",
                                answers: ["Bugs","Games","Toys","WebSites"],
                                correctAnswer: 3

                },

                {
                                question: "In our solar system which two planets rotate clockwise?",
                                answers: ["Mars and Saturn","Neptune and pluto","Venus & Uranus","None of the above"],

                                correctAnswer: 2

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
console.log("clickAnswer"+clickAnswer)
 if (userAnswer===correctAnswer && (clickAnswer=true)){
  console.log("you got it right")
  var decision=$('<h2>You Got it Right!!</h2>').appendTo('#quizSection')
  numCorrect++;
  }  
  // else if(!userAnswer && triviaTime===0 && clickAnswer===false ){
  // console.log("you didnt answer")
  // noAnswer++;
  // }

  else if(userAnswer!==(triviaQ[currentQuestion].answers[triviaQ[currentQuestion].correctAnswer] )){
  console.log("you got it wrong")
  var decision=$('<h2>You Got it Wrong :( :(</h2>').appendTo('#quizSection')
  numIncorrect++;
  }

  

}

function captureAnswer(){
  $("body").on("click",".answers",function(){
                        stopTimer();
                        $("#triviaTime").hide();

                      if(totalQuestions>0){
                                  userAnswer=$(this).text();
                                  console.log(userAnswer)
                               
                                  checkAnswer();
                                  currentQuestion++;
                                   totalQuestions--;
                                  
                                   console.log(totalQuestions);
                                   var result =$('<div>The Answer is' +triviaQ[currentQuestion].answers[j] +'</div>').appendTo('#quizSection');
                                   breakTimer();
                                   $("#quizSection").empty();
                                   
                                   console.log(breakTime);
                                   triviaTime=15;
                                   $("#triviaTime").show();
                                   startTimer();

                                   createQuiz();
                                //}
}
 if(totalQuestions===0){
  
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
                             