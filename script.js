const questions = [

    {

      question: "Which is the largest animal in the world?",

      answers: [

        { text: "Shark", correct: false },

        { text: "Blue whale", correct: true },

        { text: "Elephant", correct: false },

        { text: "Giraffe", correct: false },

      ],

    },

    {

      question: "What is the capital of France?",

      answers: [

        { text: "London", correct: false },

        { text: "Berlin", correct: false },

        { text: "Madrid", correct: false },

        { text: "Paris", correct: true },

      ],

    },

    {

      question: "Which gas do plants absorb from the atmosphere?",

      answers: [

        { text: "Oxygen", correct: false },

        { text: "Carbon dioxide", correct: true },

        { text: "Nitrogen", correct: false },

        { text: "Hydrogen", correct: false },

      ],

    },

    {

      question: "What is the largest planet in our solar system?",

      answers: [

        { text: "Mars", correct: false },

        { text: "Venus", correct: false },

        { text: "Saturn", correct: false },

        { text: "Jupiter", correct: true },

      ],

    },

    {

      question: "Which gas makes up the majority of Earth's atmosphere?",

      answers: [

        { text: "Oxygen", correct: false },

        { text: "Carbon dioxide", correct: false },

        { text: "Nitrogen", correct: true },

        { text: "Hydrogen", correct: false },

      ],

    },

  ];

 

const questionElement = document.getElementById("question");

const answerButtons = document.getElementById("answer-buttons");

const nextButton = document.getElementById("next-btn");

 

let currentQuestionIndex = 0;

let score = 0;

 

function startQuiz(){

    currentQuestionIndex = 0;

    score = 0;

    nextButton.innerHTML = "Next";

     showQuestion();

}

 

function showQuestion(){

    resetState()

    let currentQuestion = questions[currentQuestionIndex];

    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

 

    currentQuestion.answers.forEach(answer => {

        const button = document.createElement("button")

        button.innerHTML = answer.text;

        button.classList.add("btn")

        answerButtons.appendChild(button);

        if(answer.correct){

            button.dataset.correct= answer.correct;

        }

 

        button.addEventListener("click" , selectAnswer);

 

    })

 

}

 

function resetState(){

    nextButton.style.display = "none";

    while(answerButtons.firstChild){

        answerButtons.removeChild(answerButtons.firstChild)

    }

}

 

function selectAnswer(e){

    const selectedBtn= e.target;

const isCorrect = selectedBtn.dataset.correct === "true";

if(isCorrect){

    selectedBtn.classList.add("correct")

    score++;

}

else{

    selectedBtn.classList.add("incorrect")

 

}

Array.from(answerButtons.children).forEach(button => {

    if(button.dataset.correct === "true"){

        button.classList.add("correct");

 

    }

    button.disabled = true;

})

nextButton.style.display = "block";

 

}

 

function showScore(){

resetState();

questionElement.innerHTML = `you scored ${score} out of ${questions.length} !`

 nextButton.innerHTML = "Play again"

 nextButton.style.display = "block"

}

 

function handleNextButton(){

    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length){

        showQuestion();

    }else{

        showScore();

    }

};

 

// nextButton.addEventListener("click", ()=>{

// if(currentQuestionIndex < questions.length){

//     handleNextButton();

 

// }else{}

// startQuiz();

 

// })

nextButton.addEventListener("click", () => {

    if (currentQuestionIndex < questions.length) {

      handleNextButton();

    } else {

      startQuiz();

    }

  });

 

startQuiz();