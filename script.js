$(document).ready(function() {
    let answer = Math.floor(Math.random() * 100) + 1;
    
    $("form").on("submit", function(e) {
        e.preventDefault();
        let number = +$("input#number").val();

        if (number > answer) {
            let less = `The number is less than ${number}`;
            $("#header").text(less);
        } else if (number < answer) {
            let greater =  `The number is greater than ${number}`;
            $("#header").text(greater);
        } else {
            let end = `Congratulations!  ${number} is a right number!`;
            $("#header").text(end);
        }
        
    });


    $("form").on("submit", function(e) {
        $("input:text").val("")
    });

    $("a").on("click", function (e) {
        e.preventDefault();

        answer = Math.floor(Math.random() * 100) + 1;
        $("#header").text("This is a number between 1 and 100.");
        $("input:text").val("")
    })
});