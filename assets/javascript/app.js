
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
        gameTimer();
        });
    }

    function gameTimer() {

    }





});