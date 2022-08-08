import { setStorage } from "./storage.js";
import { NICKNAME_KEY } from "./constants.js";
import { selectDifficulty } from "./selectDifficulty.js";

export const loginPage = () => {
  const nickInput = document.createElement("input");
  const inputLabel = document.createElement("h2");
  const startButton = document.createElement("button");
  const container = document.createElement("div");
  const title = document.createElement("h2");
  const valueInput = nickInput.value;

  title.innerHTML = `Seja bem vindo ao <span>Coniect</span> ${valueInput}!`;
  inputLabel.innerHTML = "Insira seu nickname: ";

  container.setAttribute("class", "container");
  container.setAttribute("id", "container");
  nickInput.setAttribute("id", "nickInput");

  nickInput.addEventListener("input", (event) => {
    const nickname = event.target.value;
    setStorage(NICKNAME_KEY, nickname);
  });

  startButton.addEventListener("click", () => {
    selectDifficulty();
    container.remove();
  });
  startButton.innerHTML = "START";

  container.appendChild(title);
  container.appendChild(inputLabel);
  container.appendChild(nickInput);
  container.appendChild(startButton);
  document.body.appendChild(container);
};
