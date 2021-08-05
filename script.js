const startButton = document.getElementById('start-btn')
startButton.addEventListener('click', startGame)


function startGame() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {

}

function selectAnswer(){

}

const questions = [
    {
        prompt: "what is 4 + 5?\n(a) 6\n\(b) 9\n(c) 10",
        answer: "b"
    },
    {
        prompt: "what is 10 * 2?\n(a) 12\n\(b) 22\n(c) 20",
        answer: "c"
    },
    {
        prompt: "what is 25 - 20?\n(a) 5\n\(b) 15\n(c) 10",
        answer: "a"
    },
    {
        prompt: "what is 12 + 8?\n(a) 20\n\(b) 15\n(c) 30",
        answer: "a"
    }

]