import { NICKNAME_KEY } from "./constants.js";
import { startGame } from "./startGame.js";
import { getStorage } from "./storage.js";

export const selectDifficulty = () => {
  const p = document.createElement("p");
  const easy = document.createElement("button");
  const medium = document.createElement("button");
  const hard = document.createElement("button");
  const selectContainer = document.createElement("div");
  const buttonContainer = document.createElement("div");
  
  selectContainer.setAttribute("id", "selectContainer");
  selectContainer.setAttribute("class", "container");
  buttonContainer.setAttribute("id", "buttonContainer");

  p.innerHTML = `<span>${getStorage(
    NICKNAME_KEY
  )}</span> escolha sua dificuldade`;
  easy.innerHTML = "Fácil";
  medium.innerHTML = "Médio";
  hard.innerHTML = "Difícil";

  easy.addEventListener("click", () => {
    startGame(11);
    selectContainer.remove();
  });
  medium.addEventListener("click", () => {
    startGame(101);
    selectContainer.remove();
  });
  hard.addEventListener("click", () => {
    startGame(201);
    selectContainer.remove();
  });

  selectContainer.appendChild(p);
  selectContainer.appendChild(buttonContainer);
  buttonContainer.appendChild(easy);
  buttonContainer.appendChild(medium);
  buttonContainer.appendChild(hard);

  document.body.appendChild(selectContainer);
};
