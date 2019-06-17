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
    var wins = 0;
    var losses = 0;

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

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function triviaDisplay() {
        gameTimer();
        var categoryIndex = 0;
        if(gameCategory === "cats") {
            categoryIndex = 0;
        } else if (gameCategory === "dogs") {
            categoryIndex = 1;
        } else if (gameCategory === "other") {
            categoryIndex = 2;
        }
        var question = TriviaCategories[categoryIndex]["questions"]["question1"];
        var answerArray = [];
        var answer1 = TriviaCategories[categoryIndex]["questions"]["answers"]["wrongAnswer1"];
        var answer2 = TriviaCategories[categoryIndex]["questions"]["answers"]["wrongAnswer2"];
        var answer3 = TriviaCategories[categoryIndex]["questions"]["answers"]["wrongAnswer3"];
        var answer4 = TriviaCategories[categoryIndex]["questions"]["answers"]["correctAnswer"];
        answerArray.push(answer1, answer2, answer3, answer4);
        shuffle(answerArray);
        console.log(answerArray);
        $(".question-container").text(question);
        $("#ans-1-text").text(answerArray[0]);
        $("#ans-2-text").text(answerArray[1]);
        $("#ans-3-text").text(answerArray[2]);
        $("#ans-4-text").text(answerArray[3]);
    }






});