// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('hooty', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.directive('quiz', function(quizFactory) {
  return {
    restrict: 'AE',
    scope: {},
    templateUrl: 'template.html',
    link: function(scope, elem, attrs) {

      var realistic = 0;
      var artistic = 0;
      var investigative = 0;
      var enterprising = 0;
      var social = 0;
      var conventional = 0;


      scope.start = function() {
        scope.id = 0;
        scope.quizOver = false;
        scope.inProgress = true;
        scope.getQuestion();

      };

      scope.reset = function() {
        scope.inProgress = false;
        scope.score = 0;
        realistic = 0;
        artistic = 0;
        investigative = 0;
        enterprising = 0;
        social = 0;
        conventional = 0;

      }

      scope.getQuestion = function() {
        var q = quizFactory.getQuestion(scope.id);
        if(q) {
          scope.question = q.question;
          scope.image1 = q.image1;
          scope.image2 =q.image2;
          scope.option1 = q.option1;
          scope.option2 = q.option2;
          scope.answer = q.answer;
          scope.answerMode = true;
        } else {
          scope.realistic = realistic;
          scope.investigative = investigative;
          scope.social = social;
          scope.conventional = conventional;
          scope.enterprising = enterprising;
          scope.artistic = artistic;
          scope.quizOver = true;
        }
      };

     var checkOptions = function(str){
          if(str == 'R'){
            realistic++;
          }
          if(str =='I'){
            investigative++;
          }
          if(str == 'A'){
            artistic++;
          }
          if(str == 'E'){
            enterprising++;
          }
          if(str == 'C'){
            conventional++;
          }
          if(str == 'S'){
            social++;
          }
      }

      scope.checkAnswer = function() {

        var answer = $('input[name=answer]:checked').val();

        if(answer.length == 1){
          checkOptions(answer);
        }

        else if(answer.length == 2){
          var firstChar = answer.substr(0,1);
          var secondChar = answer.substr(1,2);

          checkOptions(firstChar);
          checkOptions(secondChar);

        }
        else{
          scope.answerMode = false;
        }
        console.log(realistic);
        console.log(investigative);
        console.log(social);
        console.log(conventional);
        console.log(enterprising);
        console.log(artistic);
        scope.answerMode = false;
      };

      scope.nextQuestion = function() {
        scope.id++;
        scope.getQuestion();
      }

      scope.reset();
    }
  }
})

.factory('quizFactory', function() {
  var questions = [
  {
    "question": "Would you like to be a manager or a football player?",
    "image1" : "img/manager.png",
    "image2" : "img/player.png",
    "option1": "E",
    "option2": "R"
  },
  {
    "question": "Would you like to fix a car or go out and shoot photographs?",
    "image1" : "img/car.png",
    "image2" : "img/photo.png",
    "option1": "A",
    "option2": "R"
  },
  {
    "question": "Would you like to adopt a dog or volunteer for a charity ",
    "image1" : "img/dog.png",
    "image2" : "img/donate.png",
    "option1": "S",
    "option2": "R"
  },
  {
    "question": "Would you like to use power tools and get some work done or  make a budget for your upcoming trip?",
    "image1" : "img/powertool.png",
    "image2" : "img/Budget_analyst.png",
    "option1": "C",
    "option2": "R"
  },
  {
    "question": "Would you like to be a chef  or  evaluate a crime scene?",
    "image1" : "img/chef.png",
    "image2" : "img/detective.png",
    "option1": "I",
    "option2": "R"
  },
  {
    "question": "Would you like to perform some new experiments or write down your thoughts to create a novel?",
    "image1" : "img/experiment.png",
    "image2" : "img/writer.png",
    "option1": "A",
    "option2": "I"
  },
  {
    "question": "Would you prefer to work on a simultaneous equation or go out and teach some non privileged children?",
    "image1" : "img/SolveEquation.png",
    "image2" : "img/helpUnpriviledged.png",
    "option1": "S",
    "option2": "I"
  },
  {
    "question": "Would you like to visit a science museum or plan a birthday party for your friend?",
    "image1" : "img/science museum.png",
    "image2" : "img/party.png",
    "option1": "E",
    "option2": "I"
  },
  {
    "question": "Would you like to do research work in a lab or have a routine 9 to 5 job (*or work for an MNC)?",
    "image1" : "img/Research.png",
    "image2" : "img/Work in MNC.png",
    "option1": "C",
    "option2": "I"
  },
  {
    "question": "Would like to be a part of a play or rather go to a movie with your friends?",
    "image1" : "img/Play.png",
    "image2" : "img/movie.png",
    "option1": "S",
    "option2": "A"
  },
  {
    "question": "Would you like to design a new dress or come out with ideas on how to sell the dress?",
    "image1" : "img/designer.png",
    "image2" : "img/sales.png",
    "option1": "E",
    "option2": "A"
  },
  {
    "question": "Would you rather be a comedian or a librarian?",
    "image1" : "img/comedian.png",
    "image2" : "img/library.png",
    "option1": "C",
    "option2": "A"
  },
  {
    "question": "Would you like to be a teacher or a school principal ?",
    "image1" : "img/teacher.png",
    "image2" : "img/principal.png",
    "option1": "E",
    "option2": "S"
  },
  {
    "question": "Would you like to work for an NGO or be a teller in a bank?",
    "image1" : "img/NGO.png",
    "image2" : "img/bank.png",
    "option1": "C",
    "option2": "S"
  },
  {
    "question": "Would you like to start your own business or work in an office for someone else?",
    "image1" : "img/Buisness.png",
    "image2" : "img/officeGuy.png",
    "option1": "C",
    "option2": "E"
  }
  ];

  return {
    getQuestion: function(id) {
      if(id < questions.length) {
        return questions[id];
      } else {
        return false;
      }
    }
  };
});
