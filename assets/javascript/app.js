var TriviaCategories = [
    {"category": "Cats",
        "questions": {
            "question1": "How many legs do cats walk on?",
            "answers": {
                "wrongAnswer1": "Cats walk on 16 legs",
                "wrongAnswer2": "Cats walk on 3 legs",
                "wrongAnswer3": "Cats walk on 3 legs",
                "correctAnswer": "Cats walk on 4 legs, duh."
            }
        }
},
    {"category": "Dogs",
        "questions": {
            "question1": "How many legs do dogs walk on?",
            "answers": {
                "wrongAnswer1": "Dogs walk on 16 legs",
                "wrongAnswer2": "Dogs walk on 3 legs",
                "wrongAnswer3": "Dogs walk on 3 legs",
                "correctAnswer": "Dogs walk on 4 legs, duh."
            }
        }
    }
]


$(document).ready(function() {

    var gameCategory = "";
    var gameQuestion = "";
    var answer1 = "";
    var answer2 = "";
    var answer3 = "";
    var answer4 = "";

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
                $(".title-screen").attr("class", "hidden");
                $(".game-container").toggleClass("hidden");
                triviaDisplay();
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
            if (sec == -1) {
                $(".timer-container").text("Time's Up!!!");
                clearInterval(timer);
                triviaDisplay();
            }
        }, 1000);
    }

    function triviaDisplay() {
        gameTimer();
        var question = TriviaCategories[0]["questions"]["question1"];
        var category = TriviaCategories.length;
        var answer1 = TriviaCategories[0]["questions"]["answers"]["wrongAnswer1"];
        $(".question-container").text(question);
        $("#ans-1-text").text(answer1);
    }






});