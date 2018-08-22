var playerKey = document.getElementById("answer");
var reg = /[^0-9]/;

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function (event) {

    var e = event.key;

    if (/[^0-9]/.test(e)) {

        alert("This is not a valid choice...");

    } else {

        playerKey.value = e;

    }

};


// my turn

n = 6;
function countDown() {
    n--;
    if (n > 0) {
        setTimeout(countDown, 1000);
    } else if ( n === 0) {
        //$("#timer").text("Done");
        reset();
    }
    
    $('#countdown').fadeOut(300, function () {
        $('#countdown').text(n);
        $('#countdown').show();  
    });
    //$("#countdown").text(n);
}
countDown();


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

z = 0;

var gq = function() {

    $("#game-question").text(questions[z].qu);

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
    clearTimeout(countDown);
    n = 6;
    countDown();
}

$("#result").on("click", function () {
    z++;
    gq();
    y++;
    ga();
    resetClock();
}) // end function

function reset() {
    console.log("running reset....???");
    z++;
    gq();
    y++;
    ga();
    resetClock();
}




// var qa = {
//     q1 : "How old am I?",
//     a1 : ["0", "1", "2", "3"]
// };


// $("#gameage").text(qa.q1);
// // $("#gameage2").text(qa.a1);
// $("#gameage3").append("<ol></ol>");
// // $("#gameage3 ol").append("<li></li>");

// for(i = 0; i < qa.a1.length; i++) {
//     $("#gameage3 ol").append("<li>" + i + "</li>");
// }

// var ans = document.getElementById("subbutt");
// alert(ans);



//*********************************************//

// var i = 0;

// function nextQuestion() {
//     i = i + 1; // advance to next question
//     //i = i % qa.length; // loop through the questions after last one
//     return i;
// }


// var qa = [{
//     one: [{
//         q0 : "how old am i?",
//         q1 : "how old r u?"
//     }],
        
//     two: [{
//         a0: ["0", "1", "2", "3"],
//         a1 : ["4", "5", "6", "7"]
//     }]
// }]

// console.log(qa);
// console.log(qa[0].one[i].q1); // how old r u?
// console.log(qa[0].one[i].q0); // how old am i?
// console.log(i);
// document.getElementById("gameage").textContent = qa[0].one[0].q0;

// document.getElementById("next").addEventListener("click",
// function () {
//     document.getElementById("gameage").textContent = nextQuestion();
    
// })


//*********************************************//
//*********************************************//
//*********************************************//



// var q1 = {
//     question: "How old am I?",
//     answer: ["0", "1", "2", "3"]
// }



// console.log("array and i:" + qa.q[i]);
// $("#gameage").html(q1.question);
// $("#gameage2").html(q1.answer);
// $("#gameage3").html(q1.answer[2]);

// var game = {
//     timer: t(),
//     question: "bob",
//     answer: "porsche"
// }


// console.log(Object.keys(play)); //"questions"
// console.log(Object.values(play));// How old am I ?
// console.log(Object.values(play.questions));// ["10", "20", "30", "40"]
// console.log(Object.entries(play)); // "questions" How old am I ?
// console.log(Object.entries(play)[0]); // "questions" How old am I ?



// var customer = {
//     firstName: "John",
//     lastName: "Smith",
//     age: 25,
//     address: {
//         streetAddress: "21 2nd Street",
//         city: "New York",
//         state: "NY",
//         postalCode: "10021"
//     },
//     phoneNumber: [{
//         type: "home",
//         number: "212 555-1234"}, {
//         type: "fax",
//         number: "646 555-4567"
//     }]
// };

// // Step 1: Log the First Name below using console.log
// console.log(customer.firstName);
// // Step 2: Log the Last Name below using console.log
// console.log(customer.lastName);
// // Step 3: Log the State of the Address below using console.log
// console.log(customer.address.state);
// // Step 4: Log the Home Phone Number below using console.log
// console.log(customer.phoneNumber[0].number);
// // Step 5: Log the Fax Number below using console.log
// console.log(customer.phoneNumber[1].number);



//  function countDown() {
//     n--;
//     if (n > 0) {
//         setTimeout(countDown, 1000);
//     }
//      $("#countdown").text(n);
//  }

// game object?

// var gameChunk = {
//     //timer: countDown(),
//     color: "red",
//     wheels: "4", 
//     engine: {
//         cyliners: 4, size: 2.2
//     }
// }

//gameChunk.countDown();
// console.log(gameChunk.engine);

// var questions = {"What year did the Marine Corps come alive?" : {"1" : "1775", "2" : "1980", "3" : "1877" }, "What is the best guitar in all the land?" : {"1" : "Les Paul", "2" : "Ibanez Jem", "3" : "Mako Shark"}, "How many fingers am I holding up?" : {"1" : "7", "2" : "5", "3" : "11"} };

// var arr = [{ "What year did the Marine Corps come alive?": { "1": "1775", "2": "1980", "3": "1877" }, "What is the best guitar in all the land?": { "1": "Les Paul", "2": "Ibanez Jem", "3": "Mako Shark" }, "How many fingers am I holding up?": { "1": "7", "2": "5", "3": "11" } }];

// console.log(arr[]);

// var group = {
//         large: {  creatures: "blue whale", 
//         medium: { creatures: ["zebra", "rhino"], 
//         small: { creatures: "cat", 
//         tiny: { creatures: ["snail", "hamster", "lizard", "spider"]
//             }}}}, 
//         other: { creatures: "human"}
// }

//console.log(group.large.medium.small.tiny.creatures[2]);

// var clock = myTimer();

//console.log(clock);