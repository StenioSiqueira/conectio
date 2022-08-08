import { NICKNAME_KEY } from "./constants.js";
import { selectDifficulty } from "./selectDifficulty.js";
import { getStorage } from "./storage.js";

export const startGame = (max) => {
  const MAX_TRIES = 3;
  const numberGuess = Math.floor(Math.random() * max);
  const palpInput = document.createElement("input");
  const verifyButton = document.createElement("button");
  const startAgain = document.createElement("button");
  const message = document.createElement("p");
  const tryAgain = document.createElement("p");
  const title = document.createElement("h2");
  const gameContainer = document.createElement("div");

  startAgain.innerHTML = " Tentar novamente";
  title.innerHTML = `Insira seu palpite ${getStorage(NICKNAME_KEY)}`;
  verifyButton.innerHTML = "Verificar";

  palpInput.setAttribute("type", "number");
  startAgain.addEventListener("click", () => {
    selectDifficulty();
    gameContainer.remove();
  });
  verifyButton.addEventListener("click", () => {
    verify(numberGuess);
  });

  gameContainer.appendChild(title);
  gameContainer.appendChild(palpInput);
  gameContainer.appendChild(verifyButton);
  gameContainer.appendChild(message);
  gameContainer.appendChild(tryAgain);

  document.body.appendChild(gameContainer);

  let i = 0;

  const verify = (number) => {
    const palpInputValue = palpInput.value;
    console.log(number);
    console.log(i);
    i = i + 1;

    if (i == MAX_TRIES && palpInputValue != number) {
      tryAgain.innerHTML = " Suas tentativas acabaram, tente novamente !";
      message.innerHTML = `O número correto era: ${number}`;

      try {
        gameContainer.removeChild(verifyButton);
        gameContainer.removeChild(palpInput);
        gameContainer.removeChild(title);
      } catch (error) {}

      return gameContainer.appendChild(startAgain);
    }
    if (palpInputValue == number) {
      gameContainer.appendChild(startAgain);
      return (message.innerHTML = "Você acertou, Parabéns !!!");
    }
    if (palpInputValue > number) {
      return (message.innerHTML = `Você errou !!, O número é menor, Você ainda tem ${
        MAX_TRIES - i
      }`);
    }
    if (palpInputValue < number) {
      return (message.innerHTML = `Você errou !!, O número é maior, Você ainda tem ${
        MAX_TRIES - i
      }`);
    }
  };
};
