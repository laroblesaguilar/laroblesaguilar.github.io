$(document).ready(function () {
    var count = 1;
    var userScoreX = 0;
    var userScoreO = 0;
    var userInput = [];
    $("#turn").html("Player: X");

    function checkForWinner() {

        console.log($("#1").html() === "X");
        console.log("test");
        if ($("#1").html() === "X" && $("#2").html() === "X" && $("#3").html() === "X") {
            setTimeout(function () {
                alert("Winner");
                userScoreX++;
                $("#score").html("Score:" + "<br>" + "Player X: " + userScoreX + "<br>" + "Player O: " + userScoreO);
                $("td").html("");
                count = 1;
                $("#turn").html("Player: X");
            }, 200)
        } else if ($("#1").html() === "O" && $("#2").html() === "O" && $("#3").html() === "O") {
            setTimeout(function () {
                alert("Winner");
                userScoreO++;
                $("#score").html("Score:" + "<br>" + "Player X: " + userScoreX + "<br>" + "Player O: " + userScoreO);
                $("td").html("");
                count = 1;
                $("#turn").html("Player: X");
            }, 200)
        } else if (($("#4").html() === "X" && $("#5").html() === "X" && $("#6").html() === "X")) {
            setTimeout(function () {
                alert("Winner");
                userScoreX++;
                $("#score").html("Score:" + "<br>" + "Player X: " + userScoreX + "<br>" + "Player O: " + userScoreO);
                $("td").html("");
                count = 1;
                $("#turn").html("Player: X");
            }, 200)
        } else if ($("#4").html() === "O" && $("#5").html() === "O" && $("#6").html() === "O") {
            setTimeout(function () {
                alert("Winner");
                userScoreO++;
                $("#score").html("Score:" + "<br>" + "Player X: " + userScoreX + "<br>" + "Player O: " + userScoreO);
                $("td").html("");
                count = 1;
                $("#turn").html("Player: X");
            }, 200)
        } else if ($("#7").html() === "X" && $("#8").html() === "X" && $("#9").html() === "X") {
            setTimeout(function () {
                alert("Winner");
                userScoreX++;
                $("#score").html("Score:" + "<br>" + "Player X: " + userScoreX + "<br>" + "Player O: " + userScoreO);
                $("td").html("");
                count = 1;
                $("#turn").html("Player: X");
            }, 200)
        } else if ($("#7").html() === "O" && $("#8").html() === "O" && $("#9").html() === "O") {
            setTimeout(function () {
                alert("Winner");
                userScoreO++;
                $("#score").html("Score:" + "<br>" + "Player X: " + userScoreX + "<br>" + "Player O: " + userScoreO);
                $("td").html("");
                count = 1;
                $("#turn").html("Player: X");
            }, 200)
        } else if ($("#1").html() === "X" && $("#4").html() === "X" && $("#7").html() === "X") {
            setTimeout(function () {
                alert("Winner");
                userScoreX++;
                $("#score").html("Score:" + "<br>" + "Player X: " + userScoreX + "<br>" + "Player O: " + userScoreO);
                $("td").html("");
                count = 1;
                $("#turn").html("Player: X");
            }, 200)
        } else if ($("#1").html() === "O" && $("#4").html() === "O" && $("#7").html() === "O") {
            setTimeout(function () {
                alert("Winner");
                userScoreO++;
                $("#score").html("Score:" + "<br>" + "Player X: " + userScoreX + "<br>" + "Player O: " + userScoreO);
                $("td").html("");
                count = 1;
                $("#turn").html("Player: X");
            }, 200)
        } else if ($("#2").html() === "X" && $("#5").html() === "X" && $("#8").html() === "X") {
            setTimeout(function () {
                alert("Winner");
                userScoreX++;
                $("#score").html("Score:" + "<br>" + "Player X: " + userScoreX + "<br>" + "Player O: " + userScoreO);
                $("td").html("");
                count = 1;
                $("#turn").html("Player: X");
            }, 200)
        } else if ($("#2").html() === "O" && $("#5").html() === "O" && $("#8").html() === "O") {
            setTimeout(function () {
                alert("Winner");
                userScoreO++;
                $("#score").html("Score:" + "<br>" + "Player X: " + userScoreX + "<br>" + "Player O: " + userScoreO);
                $("td").html("");
                count = 1;
                $("#turn").html("Player: X");
            }, 200)
        } else if ($("#3").html() === "X" && $("#6").html() === "X" && $("#9").html() === "X") {
            setTimeout(function () {
                alert("Winner");
                userScoreX++;
                $("#score").html("Score:" + "<br>" + "Player X: " + userScoreX + "<br>" + "Player O: " + userScoreO);
                $("td").html("");
                count = 1;
                $("#turn").html("Player: X");
            }, 200)
        } else if ($("#3").html() === "O" && $("#6").html() === "O" && $("#9").html() === "O") {
            setTimeout(function () {
                alert("Winner");
                userScoreO++;
                $("#score").html("Score:" + "<br>" + "Player X: " + userScoreX + "<br>" + "Player O: " + userScoreO);
                $("td").html("");
                count = 1;
                $("#turn").html("Player: X");
            }, 200)
        } else if ($("#1").html() === "X" && $("#5").html() === "X" && $("#9").html() === "X") {
            setTimeout(function () {
                alert("Winner");
                userScoreX++;
                $("#score").html("Score:" + "<br>" + "Player X: " + userScoreX + "<br>" + "Player O: " + userScoreO);
                $("td").html("");
                count = 1;
                $("#turn").html("Player: X");
            }, 200)
        } else if ($("#1").html() === "O" && $("#5").html() === "O" && $("#9").html() === "O") {
            setTimeout(function () {
                alert("Winner");
                userScoreO++;
                $("#score").html("Score:" + "<br>" + "Player X: " + userScoreX + "<br>" + "Player O: " + userScoreO);
                $("td").html("");
                count = 1;
                $("#turn").html("Player: X");
            }, 200)
        } else if ($("#3").html() === "X" && $("#5").html() === "X" && $("#7").html() === "X") {
            setTimeout(function () {
                alert("Winner");
                userScoreX++;
                $("#score").html("Score:" + "<br>" + "Player X: " + userScoreX + "<br>" + "Player O: " + userScoreO);
                $("td").html("");
                count = 1;
                $("#turn").html("Player: X");
            }, 200)
        } else if ($("#3").html() === "O" && $("#5").html() === "O" && $("#7").html() === "O") {
            setTimeout(function () {
                alert("Winner");
                userScoreO++;
                $("#score").html("Score:" + "<br>" + "Player X: " + userScoreX + "<br>" + "Player O: " + userScoreO);
                $("td").html("");
                count = 0;
                $("#turn").html("Player: X");
            }, 200)
        }
    }

    // function opponent() {
    //     count++;
    //     if ($("#1").html() === "X") {
    //         setTimeout(function () {
    //             if($("#2").html().length === 0) {
    //                 $("#2").html("O")
    //             } else{
    //                 $("#3").html("O")
    //             }
    //         }, 300)
    //     }
        // if ($("#2").html() === "X") {
        //     setTimeout(function () {
        //         $("#3").html("O") || $("#4").html("O")
        //     }, 300)
        // }
    // }

    $("td").click(function (event) {
        var pattern = "";
        if (count % 2 === 1) {
            if ($(this).html().length > 0) {
                off("click");
            } else {
                count++;
                pattern = "X";
                $(this).html(pattern);
                $("#turn").html("Player: O")
            }
        } else {
            if ($(this).html().length > 0) {
                off("click");
            } else {
                count++;
                pattern = "O"
                $(this).html(pattern);
                $("#turn").html("Player: X")
            }
        }
        // opponent();
        checkForWinner();

    })


})