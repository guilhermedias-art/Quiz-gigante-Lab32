const questions = [
    {
        question: "Qual é o melhor time do interior de São Paulo?",
        answers: ["Guarani", "Ponte Preta", "Mirassol", "Inter de Limeira"],
        correctAnswer: 1,
    },
    {
        question: "O que vem antes de 1980?",
        answers: ["1979", "1978", "1977", "1976","todas as alternativas acima"],
        correctAnswer: 4,
    },
    {
        question: "Qual é o resultado da soma de 2+2?",
        answers: ["4", "5", "6", "7"],
        correctAnswer: 0,
    },
    {
        question: "Qual modalidade o Brasil ganharia medalha de ouro se fosse colocada nos Jogos Olímpicos?",
        answers: ["Sinuca", "Pipa", "Futsal", "Memes", "Todas as alternativas"],
        correctAnswer: 4,
    },
    {
        question: "Você gostou deste quiz?",
        answers: ["Sim", "Não"],
        correctAnswer: 0,
    }
];

function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h1>${q.question}</h1>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `Você acertou ${score} de ${questions.length} perguntas!`;
}

window.onload = loadQuestions;
