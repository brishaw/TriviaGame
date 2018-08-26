function init() {
    //console.log("running init()...");
    z = 0;
    y = 0;
}

var correctAnswers = 0;

var incorrectAnswers = 0;

var playerKey = document.getElementById("answer");

document.onkeyup = function (event) {

    var e = event.key;

        playerKey.value = e;

};

// *** the timer *** 
//------------------//

var n = 15;

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

    $('#countdown').fadeOut(300, function () {
         $('#countdown').text(n);
         $('#countdown').show();  
     });

    //  Once number hits zero...
    if (n === 0) {

        //  ...run the reset function.
        reset();

    }
}

countDown();

// questions and answers

var questions = [
    
    {

        qu: "What was Elton John's first US No 1 hit?",
        an: { 0: "Hell's Bells", 1: "Crocodile Rock", 2: "Candle in the Wind" },
    ca : 2

    },

    {

        qu: "Who founded the Death Row label with Marion 'Suge' Knight?",
        an: { 0: "Eminem", 1: "Snoop Dogg", 2: "Dr. Dre", 3 : "Kool Moe Dee" },
        ca: 3

    },

    {

        qu: "Freddie Mercury died in which year?",
        an: { 0: "1991", 1: "1992", 2: "2001", 3: "1977" },
        ca: 1

    },

    {

        qu: "Steve Vai is known for what?",
        an: { 0: "Piano", 1: "Vocals", 2: "Percussion", 3: "Guitar" },
        ca: 4

    },

    {

        qu: "What is Marilyn Manson's real name?",
        an: { 0: "Brian Shaw", 1: "Ryan Gosling", 2: "Brian Warner", 3: "Tom Cruise" },
        ca: 3

    },

    {

        qu: "Who is also known as Skateboard P?",
        an: { 0: "Pharrell Williams", 1: "P. Diddy", 2: "Papa Roach", 3: "Mike Portnoy" },
        ca: 1

    },

    {

        qu: "Who was Ozzy Osbourne's first guitarist?",
        an: { 0: "Randy Rhoads", 1: "Brian Shaw", 2: "Toni Iommi", 3: "Zakk Wylde" },
        ca: 1

    },

    {

        qu: "Who made the highly rated 1959 jazz album Kind of Blue?",
        an: { 0: "Herbie Hancock", 1: "Wynton Marsalis", 2: "Miles Davis" },
        ca: 3

    },

    {

        qu: "Whose childhood hit was Fingertips?",
        an: { 0: "Michael Jackson", 1: "Stevie Wonder", 2: "Robyn Fenty" },
        ca: 2

    },

    {

        qu: "Which guitar innovator and player has a range of Gibson Guitars named after him?",
        an: { 0: "Brian Shaw", 1: "Stevie Nicks", 2: "Jethro Tull", 3: "Les Paul" },
        ca: 4

    }
] // end questions

var lastQuestion = questions[questions.length - 1];

var questionObject = questions.length;

//console.log("Number of questions..." + questionObject);
//console.log(lastQuestion);

z = 0;

var gq = function() {

    if(z < questionObject) {

        $("#game-question").text(questions[z].qu);

    } else {

        $('#countdown').text("");

        clearInterval(intervalId);

        setTimeout(function () { flip(); }, 3000);
        
        $("#so").on("click", function() {

            //console.log("lets play again!");
            
            window.location.reload(false);
        })
    }

}

gq();

function clearList() {

    $("#answers").empty();

    playerKey.value = "";

    //console.log("am i even really here??");
}

// show answers

y = 0;

var ga = function() {

    clearList();

    var size = Object.keys(questions[y].an).length;

    //console.log("size: " + size);

    for(i = 0; i < size; i++) {

        $("#answers").append("<li>" + questions[y].an[i] + "</li>");

    }
}

ga();

function resetClock() {

    clearInterval(intervalId);

    intervalId = null;

    n=15;

    countDown();
}

function checkAnswer() {

    //console.log(questions[y]);
    
    if (playerKey.value == questions[y].ca) {

        correctAnswers++;

        $("#solution").text("Correct!").css({"display" : "block", "color" : "black"});;
        
        setTimeout(function () { 

            $("#solution").text("").css("display", "none"); 
        
        }, 1000);

    } else {

        incorrectAnswers++;

        $("#solution").html("Incorrect!<br>The correct answer is: " + questions[y].ca).css({"display" : "block", "color" : "red"});

        setTimeout(function () { 

            $("#solution").text("").css("display", "none");

    }, 5000);
    
    }
}

$("#result").on("click", function () {
    
    checkAnswer();

    z++;

    gq();

    y++;

    ga();

    resetClock();

}) // end function

function reset() {

    //console.log("running reset....???");

    checkAnswer();

    z++;

    gq();

    y++;

    ga();

    resetClock();
}

function flip() {

    $('.screen-1,.screen-2').toggle();

    $("#correct").text("Correct Answers: " + correctAnswers);
    
    $("#incorrect").text("Incorrect Answers: " + incorrectAnswers);
}


