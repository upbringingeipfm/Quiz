function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Which of the following about the varicella-Zoster Virus (yZV) is NOT true?", ["Varicella develops after an individual is exposed to VZV for the first time", "Herpes zoster develops from reactivation of the virus later in life","There are no vaccine for this virus", "The infection results in post-herpetic neuralgia"], "There are no vaccine for this virus"),

    new Question("Hemophilia A is a disease characterized by deficiency of:", [" Factor VIII", "Factor II","Factor VII", "Factor V"], "Factor VIII"),


    new Question("Which of the following is NOT a gene associated with breast cancer?", ["BRCA1", "HER2","BRCA2", "CHRM1"], "CHRM1"),


    new Question("Which of the following fluid can. be considered as an ideal fluid?", ["Viscous fluid", "Compressible fluid","Non-visoous fluid", "varicella of these"], "Non-visoous fluid"),

  new Question("The following is NOT true for furosemide:", ["Causes hypokalemia", "Causes hypomagnesemia","Causes hypouricemia", "Acts by inhibiting sodium reabsorption"], "Causes hypouricemia"),
    new Question("Rheumatic heart disease is caused by:", ["Streptococcal infection", "Streptococcal infection","Excessive lipid consumption", "Atherosclerosis"], "Streptococcal infection"),
      new Question("Galactose and Glucose are:", ["Epimers", "Isomers","Anomers", "Ketose-Aldose isomers"], "Epimers"),
        new Question("Hypodermoclysis refers to which route of drug administration?", ["Sublingual", "lntradermal","Subcutaneous", "Intravenous"], "Subcutaneous"),
          new Question("Histamine concentration is highest in:", ["Beta cells", "Mast cells","Lymphocytes", "Adipocytes"], "Mast cells"),
            new Question("Select the B·lactamase inhibitor.", ["Griseofulvin", "Sulfamethoxazole","Clavulanic acid", "Tetracycline"], "Clavulanic acid"),
];


var quiz = new Quiz(questions);


populate();
