var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
  
    this.addOption = function (option) {
        this.options.push(option);
    };
  
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);

question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");
question1.addOption("Lyon"); 

question1.showQuestion();

var question2 = new QuizQuestion(
    "Who wrote 'Hamlet'?",
    "William Shakespeare"
);

question2.addOption("John Milton");
question2.addOption("Christopher Marlowe");
question2.addOption("William Shakespeare");
question2.addOption("Geoffrey Chaucer");

var question3 = new QuizQuestion(
    "What is the largest planet in our solar system?",
    "Jupiter"
);

question3.addOption("Saturn");
question3.addOption("Jupiter");
question3.addOption("Neptune");
question3.addOption("Uranus");

