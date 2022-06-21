let currentQuestion = 0;
let rightQuestion = 0;

//one than more click per answer is not allowed
//reset the variable to 0 after clicking an answer and reset to 1 for the next question
let onlyOneAnwswer = 1;

let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');
let chosenQuiz = questionsHTML;

function init() {
    document.getElementById('length-Questions').innerHTML = chosenQuiz.length;
    showQuestion()
};

function changeQuiz(quizArray) {
    //change the global variable to the current Quiz
    chosenQuiz = quizArray;
    restartGame();
}

function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= chosenQuiz.length
}

function answer(selection, idText) {
    if (onlyOneAnwswer == 1) {
        let question = chosenQuiz[currentQuestion];
        let rightAnswer = `answer_${question['right answer']}`;
        if (rightAnwerSelected(selection, question)) {
            document.getElementById(idText).parentNode.classList.add('bg-success');
            document.getElementById(idText).previousElementSibling.style.backgroundColor = "rgb(85, 175, 134)";
            AUDIO_SUCCESS.play();
            rightQuestion++;
            onlyOneAnwswer = 0;
        }
        else {
            document.getElementById(idText).parentNode.classList.add('bg-danger');
            document.getElementById(idText).previousElementSibling.style.backgroundColor = "rgb(249, 134, 145)";
            document.getElementById(rightAnswer).parentNode.classList.add('bg-success');
            document.getElementById(rightAnswer).previousElementSibling.style.backgroundColor = "rgb(85, 175, 134)";
            AUDIO_FAIL.play();
            onlyOneAnwswer = 0;
        }
        document.getElementById('next-Button').disabled = false;
    }
}

function rightAnwerSelected(selection, question) {
    return selection == question['right answer']
}

function nextQuestion() {
    onlyOneAnwswer = 1;
    currentQuestion++;
    showQuestion();
    resetButtons();
    document.getElementById('next-Button').disabled = true;
    document.getElementById('begin-Questions').innerHTML = currentQuestion + 1;
}

function resetButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_A').style.backgroundColor = "rgb(79, 176, 195)";
    document.getElementById('answer_B').style.backgroundColor = "rgb(79, 176, 195)";
    document.getElementById('answer_C').style.backgroundColor = "rgb(79, 176, 195)";
    document.getElementById('answer_D').style.backgroundColor = "rgb(79, 176, 195)";
}

function restartGame() {
    document.getElementById('teachImage').style = '';
    document.getElementById('winner').style = 'display: none';
    document.getElementById('endscreen').style = 'display: none';
    document.getElementById('question-body').style = '';
    currentQuestion = 0;
    rightQuestion = 0;
    document.getElementById('begin-Questions').innerHTML = currentQuestion + 1;
    document.getElementsByClassName('progress')[0].style = '';
    init();
}

function showEndScreen() {
    document.getElementById('endscreen').style = '';
    document.getElementById('winner').style = '';
    document.getElementById('question-body').style = 'display: none';
    document.getElementById('teachImage').style = 'display: none';
    document.getElementsByClassName('progress')[0].style = 'display: none';
    document.getElementById('rightQuestions').innerHTML = rightQuestion;
    document.getElementById('allQuestions').innerHTML = chosenQuiz.length;
}

function updateToNextQuestion() {
    let question = chosenQuiz[currentQuestion];
    document.getElementById('questionText').textContent = question['question'];
    document.getElementById('answer_1').textContent = question['answer_1'];
    document.getElementById('answer_2').textContent = question['answer_2'];
    document.getElementById('answer_3').textContent = question['answer_3'];
    document.getElementById('answer_4').textContent = question['answer_4'];
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / chosenQuiz.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`
    document.getElementById('progress-bar').style.width = `${percent}%`
}

function activeLink(activeLink) {
    quizArray = document.getElementsByClassName('transition-text')
    for (let i = 0; i < quizArray.length; i++) {
        const element = quizArray[i].id; //get ID from the current Element
        document.getElementById(element).classList.remove('activeLink')
    }
    document.getElementById(activeLink).classList.add('activeLink')
}

const navSlide = () => {
    //set Timeout because of loading error
    setTimeout(() => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.quiz-menu');

        burger.addEventListener('click', () => {
            // Toogle Nav
            nav.classList.toggle('nav-active');
            //Burger Animation
            burger.classList.toggle('toggle');
        });
    }, 5000)
};

function closeNavSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.quiz-menu');
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
}

navSlide();

