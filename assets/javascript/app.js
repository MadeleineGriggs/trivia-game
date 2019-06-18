
// The array from which the categories for the quiz and the questions and answers for each question is stored. Note that the correct answer has it's own name.

var TriviaCategories = [
    {"category": "Currency",
        "questions": {
            "question1": {
                "question": "What is the currency of Sweden?",
                "answers": {
                    "wrongAnswer1": "Euro",
                    "wrongAnswer2": "Franc",
                    "wrongAnswer3": "Som",
                    "correctAnswer": "Krona"
                }
            },
            "question2": {
                "question": "What currency is shared by Austria, Finland, France and Portugal?",
                "answers": {
                    "wrongAnswer1": "Franc",
                    "wrongAnswer2": "Dollar",
                    "wrongAnswer3": "Peso",
                    "correctAnswer": "Euro"
                }
            },
            "question3": {
                "question": "What is the nickname for Canada's $2 coin?",
                "answers": {
                    "wrongAnswer1": "Queenie",
                    "wrongAnswer2": "Loonie",
                    "wrongAnswer3": "Gordie",
                    "correctAnswer": "Toonie"
                }
            },
            "question4": {
                "question": "What famous face appears on every denomination of Turkish coins?",
                "answers": {
                    "wrongAnswer1": "Ibn al-Haytham",
                    "wrongAnswer2": "Fikret Mualla",
                    "wrongAnswer3": "Theodora",
                    "correctAnswer": "Mustafa Kemal Ataturk"
                }
            },
            "question5": {
                "question": "What is the currency of Ecuador?",
                "answers": {
                    "wrongAnswer1": "Peso",
                    "wrongAnswer2": "Ecuador Franc",
                    "wrongAnswer3": "Euro",
                    "correctAnswer": "the U.S. dollar"
                }
            },
            "question6": {
                "question": "Guatemala's currency, the quetzal, is named for what?",
                "answers": {
                    "wrongAnswer1": "A diety worshipped by ancient Guatemalans",
                    "wrongAnswer2": "The capital city",
                    "wrongAnswer3": "The founder of the country",
                    "correctAnswer": "The Guatemalan national bird"
                }
            }
        }
    }
,
    {"category": "Cats",
        "questions": {
            "question1": {
                "question": "How many legs do cats walk on?",
                "answers": {
                    "wrongAnswer1": "Cats walk on 16 legs",
                    "wrongAnswer2": "Cats walk on 3 legs",
                    "wrongAnswer3": "Cats walk on 12 legs",
                    "correctAnswer": "Cats walk on 4 legs, duh."
                }
            },
            "question2": {
                "question": "How many heads to cats have?",
                "answers": {
                    "wrongAnswer1": "Cats have 16 heads",
                    "wrongAnswer2": "Cats have 2 heads",
                    "wrongAnswer3": "Cats have 4 heads",
                    "correctAnswer": "Cats have 1 head, duh."
                }
            }
        }
    }
]


$(document).ready(function() {

    // Variables that are accessed by multiple functions.
    var gameCategory = "";
    var questionIndex = 0;
    var wins = 0;
    var losses = 0;
    var correctAnswer = "";
    answerClicked = false;
    lastQuestion = false;
    var categoryIndex = 0;

//Hides the how to play section unless the player clicks on the "How To play" button.
        $("#how-to-play").click(function() {
        $(".instructions").toggleClass("hidden");
        })

        // When the player clicks on a category, set the gameCategory.
        $("#category-1").click(function() {
            gameCategory = "Currency";
        })
        $("#category-2").click(function() {
            gameCategory = "cats";
        })
        $("#category-3").click(function() {
            gameCategory = "other";

        })
        

        $("#start-game").click(function() {
            if (gameCategory !== "") {
            $(".title-screen").attr("class", "title-screen hidden");
            $(".game-container").toggleClass("hidden");
            triviaDisplay();
            }   else if (gameCategory === "") {
            $("#alert").html("You need to pick a category to begin.");
            setTimeout(function() {
                $("#alert").html("");
            }, 5000);
            }
        });


    function gameTimer() {
        var sec= 5;
        var timer = setInterval(function() {
            $(".timer-container").text("You have " + sec + " seconds left!");
            sec--;
            if(lastQuestion === true){
                clearInterval(timer);   
            }else if (answerClicked === true) {
                clearInterval(timer);
                triviaDisplay();
                answerClicked = false;
            } else if (sec == -1) {
                $(".timer-container").text("Time's Up!!!");
                $(".show-correct-answer").html("You ran out of time! The answer is " + correctAnswer);
                clearInterval(timer);
                showAnswer();
            }

        }, 1000);
    }

    function showAnswer() {
        var showTimeout = setTimeout(function() {
            $(".show-correct-answer").empty();
            triviaDisplay();
        }, 3000);
    }

    // shuffles all the answers to each question in a random order, so the player can't guess the correct answer by the position of the answers.

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function triviaDisplay() {
        gameTimer();
        categoryIndex = 0;
        if(gameCategory === "Currency") {
            categoryIndex = 0;
        } else if (gameCategory === "cats") {
            categoryIndex = 1;
        } else if (gameCategory === "other") {
            categoryIndex = 2;
        }
        $(".category-container").html("Your Category is: " + gameCategory);
        
        let questionLength = Object.keys(TriviaCategories[categoryIndex]["questions"]).length;
        console.log("question Length is: " + questionLength);

        if (questionIndex < questionLength) {    
            questionIndex ++;
            populateAnswers(categoryIndex);
            console.log("question Index is:" + questionIndex);
        } else if (questionIndex == questionLength) {
            lastQuestion = true;
            quizOver();
        }
    }

    // fills in the current question and the answers to that question and puts them in the correct display.
    function populateAnswers(categoryIndex) {
        var currentQuestion = "question" + questionIndex;
        var question = TriviaCategories[categoryIndex]["questions"][currentQuestion]["question"];
        var answerArray = [];
        var answer1 = TriviaCategories[categoryIndex]["questions"][currentQuestion]["answers"]["wrongAnswer1"];
        var answer2 = TriviaCategories[categoryIndex]["questions"][currentQuestion]["answers"]["wrongAnswer2"];
        var answer3 = TriviaCategories[categoryIndex]["questions"][currentQuestion]["answers"]["wrongAnswer3"];
        var answer4 = TriviaCategories[categoryIndex]["questions"][currentQuestion]["answers"]["correctAnswer"];
        correctAnswer = answer4;
        answerArray.push(answer1, answer2, answer3, answer4);
        shuffle(answerArray);
        $(".question-container").text(question);
        $("#ans-1-text").text(answerArray[0]);
        $("#ans-2-text").text(answerArray[1]);
        $("#ans-3-text").text(answerArray[2]);
        $("#ans-4-text").text(answerArray[3]);
    }

    
    
        $(".answer").click(function() {
            var answerUserClicked = $(this).html();
            if (answerUserClicked == correctAnswer) {
                wins ++
                console.log("Your Wins: " +wins);
                
                $(".show-correct-answer").html("You got it right! The answer is " + correctAnswer);
                setTimeout(function() {
                    $(".show-correct-answer").html("");
                    answerClicked = true;
                    gameTimer();
                }, 5000);
                
            } else if (answerUserClicked !== correctAnswer) {
                losses ++
                console.log("your Losses: " + losses);
                
                $(".show-correct-answer").html("You got it wrong! The answer is " + correctAnswer);
                setTimeout(function() {
                    $(".show-correct-answer").html("");
                    answerClicked = true;
                    gameTimer();
                }, 5000);

            }
        })
    

    $("#restart-game").click(function() {
        clearout();
        $(".quiz-over-container").toggleClass("hidden");
        $(".title-screen").attr("class", "title-screen");
        })

    function quizOver() {
        $(".game-container").toggleClass("hidden");
        $(".quiz-over-container").toggleClass("hidden");
    }

    function clearout() {
        gameCategory = "";
        questionIndex = 0;
        wins = 0;
        losses = 0;
        correctAnswer = "";
        answerClicked = false;
        lastQuestion = false;
    }


});