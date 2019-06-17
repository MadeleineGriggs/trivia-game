
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
        $("#start-game").click(function() {
        $(".title-screen").attr("class", "hidden");
        $(".game-container").toggleClass("hidden");
        triviaDisplay();
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
        $(".question-container").text("Question here please!");
        $("#ans-1").text("changing the answers");
    }




});