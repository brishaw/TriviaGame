function init() {
    console.log("running init()...")
}

var correctAnswers = 0;

var incorrectAnswers = 0;

var playerKey = document.getElementById("answer");

document.onkeyup = function (event) {

    var e = event.key;

        playerKey.value = e;

};


// my turn


// *** the timer *** 
//------------------//

var n = 10;
var intervalId;

function countDown() {
    if (!intervalId) {
        intervalId = setInterval(decrement, 1000);
    }
}

//  The decrement function.
function decrement() {

    //  Decrease number by one.
    n--;

    //  Show the number in the #show-number tag.
    $('#countdown').text(n);
    // $('#countdown').fadeOut(300, function () {
    //      $('#countdown').text(n);
    //      $('#countdown').show();  
    //  });


    //  Once number hits zero...
    if (n === 0) {

        //  ...run the stop function.
        reset();

    }
}

countDown();
// function countDown() {
   
//     n--;
//     if (n > 0) {
//         setTimeout(countDown, 1000);
//     } else if ( n === 0) {
//         //$("#timer").text("Done");
//         reset();
//     }
    
//     $('#countdown').fadeOut(300, function () {
//         $('#countdown').text(n);
//         $('#countdown').show();  
//     });
// }
// countDown();


// var count = 5;
// var interval = setInterval (function() {

//     $("#countdown").text(count);
//     count--;
//     if (count === -1) {
//         clearInterval(interval);

//         $("#timer").text("Done.");

//     }
// }, 1000);



// questions and answers

var questions = [
    
    {

    qu : "How old am I?",
    an : { 0 : "1", 1 : "2", 2 : "3" },
    ca : 2

    },

    {

        qu: "How old are you?",
        an: { 0 : "10", 1 : "20", 2 : "35", 3 : "44" },
        ca: 1

    },

    {

        qu: "What color are her eyes?",
        an: { 0: "brown", 1: "red", 2: "green", 3: "yellow" },
        ca: 1

    }
] // end questions

var questionObject = questions.length;
console.log("Number of questions..." + questionObject);

z = 0;

var gq = function() {

    if(z < questionObject) {
        $("#game-question").text(questions[z].qu);
    } else {
        $('#countdown').text("");
        clearInterval(intervalId);
        setTimeout(function () { flip(); }, 3000);
        
        $("#so").on("click", function(){
            console.log("lets play again!");
            init();
        })
    }

}


gq();


function clearList() {
    $("#answers").empty();
    playerKey.value = "";
    console.log("am i even really here??");
}



// show answers

y = 0;

var ga = function() {

    clearList();

    var size = Object.keys(questions[y].an).length;

    console.log("size: " + size);

    for(i = 0; i < size; i++) {

        $("#answers").append("<li>" + questions[y].an[i] + "</li>");

    }
}

ga();

function resetClock() {
    // clearTimeout(countDown);
    // n = 10;
    // countDown();
    clearInterval(intervalId);
    intervalId = null;
    n=10;
    countDown();
}

function checkAnswer() {
    console.log(questions[y]);
    if (playerKey.value == questions[y].ca) {

        correctAnswers++;

        $("#wtf").text("Correct!").css({"display" : "block", "position": "absolute", "left": "50%", "-webkit-transform" : "translate(-50%)", "transform" : "translateX(-50%)", "padding" : "50px 200px", "background-color" : "rgba(0,0,0,.7)", "z-index" : "10000", "color" : "white"});
        
        setTimeout(function () { 
            $("#wtf").text("").css("display", "none"); 
        
        }, 1000);
        
        

    } else {

        incorrectAnswers++;

        

        $("#wtf").html("Incorrect!<br>The correct answer is: " + questions[y].ca).css({ "display": "block", "position": "absolute", "left": "50%", "-webkit-transform": "translate(-50%)", "transform": "translateX(-50%)", "text-align" : "center", "padding" : "50px", "width" : "400px", "background-color": "rgba(0,0,0,.7)", "z-index": "10000", "color" : "red"});

        $(".nq").text("Next Question").css({"display": "block", "position": "absolute", "left": "50%", "bottom" : "20%", "-webkit-transform": "translate(-50%)", "transform": "translateX(-50%)", "z-index": "10000"});

        setTimeout(function () { 
            $("#wtf").text("").css("display", "none");
            $(".nq").css("display", "none");
    }, 3000);

        
    }
}


$("#result").on("click", function () {
    //alert("you clicked " + playerKey.value);
    checkAnswer();
    z++;
    gq();
    y++;
    ga();
    resetClock();
}) // end function

function reset() {
    console.log("running reset....???");
    checkAnswer();
    z++;
    gq();
    y++;
    ga();
    resetClock();
}



function flip() {
     $('.screen-1,.screen-2').toggle();
    // $('.screen-1,.screen-2').fadeToggle("slow");
    $("#correct").text("Correct Answers: " + correctAnswers);
    $("#incorrect").text("Incorrect Answers: " + incorrectAnswers);
}



$("#test").on("click", function(){
    $('.screen-1,.screen-2').toggle();
    //$('.screen-1,.screen-2').fadeToggle("slow");
});

