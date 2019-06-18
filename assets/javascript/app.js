var TriviaCategories = [
    {"category": "Cats",
        "questions": {
            "question1": "How many legs do cats walk on?",
            "answers1": {
                "wrongAnswer1": "Cats walk on 16 legs",
                "wrongAnswer2": "Cats walk on 3 legs",
                "wrongAnswer3": "Cats walk on 3 legs",
                "correctAnswer": "Cats walk on 4 legs, duh."
            },
            "question2": "How many heads to cats have?",
            "answers2": {
                "wrongAnswer1": "Cats have 16 heads",
                "wrongAnswer2": "Cats have 2 heads",
                "wrongAnswer3": "Cats have 4 heads",
                "correctAnswer": "Cats have 1 head, duh."
            }
        }
    }
,
    {"category": "Dogs",
        "questions": {
            "question1": "How many legs do dogs walk on?",
            "answers1": {
                "wrongAnswer1": "Dogs walk on 16 legs",
                "wrongAnswer2": "Dogs walk on 3 legs",
                "wrongAnswer3": "Dogs walk on 3 legs",
                "correctAnswer": "Dogs walk on 4 legs, duh."
            },
            "question2": "How many heads to dogs have?",
            "answers2": {
                "wrongAnswer1": "Dogs have 16 heads",
                "wrongAnswer2": "Dogs have 2 heads",
                "wrongAnswer3": "Dogs have 4 heads",
                "correctAnswer": "Dogs have 1 head, duh."
            }
        }
    }
]


$(document).ready(function() {

    var gameCategory = "";
    var questionIndex = 1;
    var wins = 0;
    var losses = 0;
    var correctAnswer = "";
    answerClicked = false;

    gameStart();


    function gameStart() {
        $("#how-to-play").click(function() {
        $(".instructions").toggleClass("hidden");
        })
        $("#category-1").click(function() {
            gameCategory = "";
            gameCategory = "cats";

        })
        $("#category-2").click(function() {
            gameCategory = "";
            gameCategory = "dogs";

        })
        $("#category-3").click(function() {
            gameCategory = "";
            gameCategory = "other";

        })
        
            $("#start-game").click(function() {
                if (gameCategory !== "") {
                $(".title-screen").attr("class", "title-screen hidden");
                $(".game-container").toggleClass("hidden");
                triviaDisplay();
                gameTimer();
                }   else if (gameCategory === "") {
                console.log("You need to pick a category to begin.");
                }
            });

    }

    function gameTimer(i) {
        var sec= 15;
        var timer = setInterval(function() {
            $(".timer-container").text("You have " + sec + " seconds left!");
            sec--;
            if (answerClicked === true) {
                clearInterval(timer);
                triviaDisplay();
                answerClicked = false;
            } else if (sec == -1) {
                $(".timer-container").text("Time's Up!!!");
                clearInterval(timer);
                triviaDisplay();
            }
        }, 1000);
    }

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function triviaDisplay() {
        var categoryIndex = 0;
        if(gameCategory === "cats") {
            categoryIndex = 0;
        } else if (gameCategory === "dogs") {
            categoryIndex = 1;
        } else if (gameCategory === "other") {
            categoryIndex = 2;
        }
        var questionLength = Object.keys(TriviaCategories[categoryIndex]["questions"]).length /2;
        console.log("question Length is: " + questionLength);

        if (questionIndex <= questionLength) {    
            populateAnswers(categoryIndex);
            questionIndex ++;
        } else if (questionIndex > questionLength) {
            quizOver();
        }
    }

    function populateAnswers(categoryIndex) {
        var currentQuestion = "question" + questionIndex;
        var currentAnswers = "answers" + questionIndex;
        var question = TriviaCategories[categoryIndex]["questions"][currentQuestion];
        var answerArray = [];
        var answer1 = TriviaCategories[categoryIndex]["questions"][currentAnswers]["wrongAnswer1"];
        var answer2 = TriviaCategories[categoryIndex]["questions"][currentAnswers]["wrongAnswer2"];
        var answer3 = TriviaCategories[categoryIndex]["questions"][currentAnswers]["wrongAnswer3"];
        var answer4 = TriviaCategories[categoryIndex]["questions"][currentAnswers]["correctAnswer"];
        correctAnswer = answer4;
        answerArray.push(answer1, answer2, answer3, answer4);
        shuffle(answerArray);
        $(".question-container").text(question);
        $("#ans-1-text").text(answerArray[0]);
        $("#ans-2-text").text(answerArray[1]);
        $("#ans-3-text").text(answerArray[2]);
        $("#ans-4-text").text(answerArray[3]);
    }

    
    function checkWin() {
        $(".answer").click(function() {
            var answerUserClicked = $(this).html();
            if (answerUserClicked == correctAnswer) {
                wins ++
                console.log("Your Wins: " +wins);
                answerClicked = true;
                gameTimer();
            } else if (answerUserClicked !== correctAnswer) {
                losses ++
                console.log("your Losses: " + losses);
                answerClicked = true;
                gameTimer();
            }
        })
    }


    function quizOver() {
        $(".game-container").toggleClass("hidden");
        $(".quiz-over-container").toggleClass("hidden");
        $("#restart-game").click(function() {
            $(".quiz-over-container").toggleClass("hidden");
            $(".title-screen").toggleClass("hidden");
            gameStart();
            })
    }

checkWin();

});