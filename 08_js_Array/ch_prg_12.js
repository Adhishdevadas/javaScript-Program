

var displayQuestion = function(questionAndAnswer) {
    var options = [ "A", "B", "C", "D", "E" ];
    
    console.log(questionAndAnswer.question);
    
    questionAndAnswer.answers.forEach(function(answer, i) {
        console.log(options[i] + " - " + answer);
    });
};

var question1 = {
    question: "What is the capital of France?",
    answers: [
        "Bordeaux",
        "F",
        "Paris",
        "Brussels"
    ],
    correctAnswer: "Paris"
};

displayQuestion(question1);



 
 var question2 = {
    question: "Which planet is known as the Red Planet?",
    answers: [
        "Mars",
        "Jupiter",
        "Saturn",
        "Earth"
    ],
    correctAnswer: "Mars"
};

var question3 = {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
        "William Shakespeare",
        "Jane Austen",
        "Charles Dickens",
        "Leo Tolstoy"
    ],
    correctAnswer: "William Shakespeare"
};


var questions = [question1, question2, question3];


questions.forEach(function(question, index) {
    console.log("\nQuestion #" + (index + 1) + ":");
    displayQuestion(question);
});

