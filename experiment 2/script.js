const quiz = [
    {
        question: "What language is used for basic data written on the webpage?",
        options: ["HTML", "CSS", "JS"],
        answer: "HTML"
    },
    {
        question: "What language is used for basic styling of the webpage?",
        options: ["HTML", "CSS", "JS"],
        answer: "CSS"
    },
    {
        question: "What language is used for behavior and functionality like alerts?",
        options: ["HTML", "CSS", "JS"],
        answer: "JS"
    }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn "); 

function loadq() {
    if (index >= quiz.length) {
        showResults();
        return;
    }
    const currentQuiz = quiz[index];
    questionEl.innerText = currentQuiz.question;
    optionsEl.innerHTML = "";

    currentQuiz.options.forEach(option => {
        optionsEl.innerHTML += `
      <label>
        <input type="radio" name="ans" value="${option}">
        ${option}
      </label><br>
    `;
    });
}

function getSelectedAnswer() {
    const answers = document.getElementsByName("ans");
    let selectedValue = null;

    answers.forEach(radio => {
        if (radio.checked) {
            selectedValue = radio.value;
        }
    });

    return selectedValue;
}

function showResults() {
    questionEl.innerText = "Quiz Completed!";
    optionsEl.innerHTML = `Your final score is ${score} out of ${quiz.length}.`;
    nextBtn.style.display = "none"; 
}

nextBtn.addEventListener("click", () => {
    const selectedAnswer = getSelectedAnswer();

    if (!selectedAnswer) {
        alert("Please select an answer first!");
        return;
    }


    if (selectedAnswer === quiz[index].answer) {
        score++;
    }


    index++;
    loadq();
});
loadq();
