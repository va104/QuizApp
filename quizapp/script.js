let questions = [
    {
        "question": "Wer hat HTML erfunden",
        "answer_1": "Robbie William",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Biber",
        "right answer": 3,
    },
    {
        "question": "q2",
        "answer_1": "Robbie William",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Biber",
        "right answer": 3,
    },
    {
        "question": "q3",
        "answer_1": "Robbie William",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Biber",
        "right answer": 3,
    },
    {
        "question": "q4",
        "answer_1": "Robbie William",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Biber",
        "right answer": 3,
    },
    {
        "question": "q5",
        "answer_1": "Robbie William",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Biber",
        "right answer": 3,
    },
    {
        "question": "q6",
        "answer_1": "Robbie William",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Biber",
        "right answer": 3,
    },
];

let currentQuestion = 0;

function init() {
    document.getElementById('length-Questions').innerHTML = questions.length;
    showQuestion()
};

function showQuestion() {
    if(currentQuestion >= questions.length){
        document.getElementById('endscreen').style = '';
        document.getElementById('question-body').style = 'display: none';
    } else {
        let question = questions[currentQuestion];
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection, id) {
    let question = questions[currentQuestion];
    let rightAnswer = `answer_${question['right answer']}`
    if (selection == question['right answer']) {
        document.getElementById(id).parentNode.classList.add('bg-success');
    }
    else {
        document.getElementById(id).parentNode.classList.add('bg-danger');
        document.getElementById(rightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-Button').disabled = false;
}

function nextQuestion(){
    currentQuestion++;
    showQuestion();
    resetButtons();
    document.getElementById('next-Button').disabled = true;
    document.getElementById('begin-Questions').innerHTML = currentQuestion + 1;
}

function resetButtons(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}