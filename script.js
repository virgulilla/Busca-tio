// Referencias a los elementos HTML
const screens = document.querySelectorAll(".screen");
const introScreen = document.getElementById("intro-screen");
const gameScreen = document.getElementById("game-screen");
const mapScreen = document.getElementById("map-screen");
const codeScreen = document.getElementById("code-screen");
const booksScreen = document.getElementById("books-screen");
const secondCodeScreen = document.getElementById("second-code-screen");
const goalScreen = document.getElementById("goal-screen");
const finalClueScreen = document.getElementById("final-clue-screen");

const startButton = document.getElementById("start-button");
const checkAnswerButton = document.getElementById("check-answer");
const mapNextButton = document.getElementById("map-next-button");
const submitCodeButton = document.getElementById("submit-code");
const foundBookButton = document.getElementById("found-book-button");
const submitSecondCodeButton = document.getElementById("submit-second-code");
const goalNextButton = document.getElementById("goal-next-button");
const foundUncleButton = document.getElementById("found-uncle-button");

const answerInput = document.getElementById("answer-input");
const feedback = document.getElementById("feedback");
const codeInput = document.getElementById("code-input");
const codeFeedback = document.getElementById("code-feedback");
const secondCodeInput = document.getElementById("second-code-input");
const secondCodeFeedback = document.getElementById("second-code-feedback");
const uncleLaughSound = document.getElementById("uncle-laugh-sound");

const winSound = document.getElementById("win-sound");
const loseSound = document.getElementById("lose-sound");

// Respuestas correctas
const correctAnswer = "migas";
const correctCode = "1452";
const secondCorrectCode = "azul";

// Función para mostrar una pantalla
function showScreen(screen) {
    screens.forEach((s) => s.classList.remove("visible"));
    screen.classList.add("visible");
}

// Evento para iniciar el juego
startButton.addEventListener("click", () => {
    showScreen(gameScreen); // Muestra la pantalla del juego
});

// Evento para comprobar la palabra clave
checkAnswerButton.addEventListener("click", () => {
    const userAnswer = answerInput.value.trim().toLowerCase();
    feedback.classList.remove("hidden");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "¡Correcto!";
        feedback.classList.add("success");
        feedback.classList.remove("error");
        setTimeout(() => showScreen(mapScreen), 1500);
    } else {
        feedback.textContent = "Respuesta incorrecta. Intenta de nuevo.";
        feedback.classList.add("error");
        feedback.classList.remove("success");
    }
});

// Evento para avanzar desde el mapa
mapNextButton.addEventListener("click", () => {
    showScreen(codeScreen); // Muestra la pantalla del código
});

// Evento para comprobar el código
submitCodeButton.addEventListener("click", () => {
    const userCode = codeInput.value.trim();
    codeFeedback.classList.remove("hidden");

    if (userCode === correctCode) {
        codeFeedback.textContent = "¡Código correcto!";
        codeFeedback.classList.add("success");
        codeFeedback.classList.remove("error");
        winSound.play(); // Reproduce el sonido de éxito
        setTimeout(() => showScreen(booksScreen), 1500);
    } else {
        codeFeedback.textContent = "Código incorrecto. Intenta de nuevo.";
        codeFeedback.classList.add("error");
        codeFeedback.classList.remove("success");
        loseSound.play(); // Reproduce el sonido de error
    }
});

// Evento para avanzar desde la pantalla de los libros
foundBookButton.addEventListener("click", () => {
    showScreen(secondCodeScreen); // Muestra la pantalla del segundo código
});

// Evento para comprobar el segundo código
submitSecondCodeButton.addEventListener("click", () => {
    const userSecondCode = secondCodeInput.value.trim().toLowerCase();
    secondCodeFeedback.classList.remove("hidden");

    if (userSecondCode === secondCorrectCode) {
        secondCodeFeedback.textContent = "¡Correcto!";
        secondCodeFeedback.classList.add("success");
        secondCodeFeedback.classList.remove("error");
        winSound.play(); // Reproduce el sonido de éxito
        setTimeout(() => showScreen(goalScreen), 1500);
    } else {
        secondCodeFeedback.textContent = "Código incorrecto. Intenta de nuevo.";
        secondCodeFeedback.classList.add("error");
        secondCodeFeedback.classList.remove("success");
        loseSound.play(); // Reproduce el sonido de error
    }
});

// Evento para avanzar desde la pantalla del gol
goalNextButton.addEventListener("click", () => {
    showScreen(finalClueScreen); // Muestra la pantalla del tío
});

// Evento para reproducir el sonido del tío
foundUncleButton.addEventListener("click", () => {
    uncleLaughSound.play();
});
