function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  let submitButton = document.querySelector("#submit-button");
  submitButton.removeAttribute("disabled");
}

function displaySheCodesPoem() {
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");

  let poem = `Na folha em branco, a magia se faz,<br />
Palavras dançam, no ritmo da paz,<br />
Cada verso um mundo, um sonho profundo,<br />
Poemas são vidas, ecos do nosso fundo.<br />
<strong>SheCodes AI</strong>`;

  new Typewriter("#poem", {
    strings: poem,
    autoStart: true,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let submitButton = document.querySelector(".submit-button");

  submitButton.setAttribute("disabled", "disabled");

  let apiKey = "oe8c960c16447fea3112bt8f4b552230";
  let prompt = `Generate a short (Brazilian) Portuguese poem about ${instructionsInput.value}`;
  let context =
    "Your mission is to generate a 4 line poem and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem in Portuguese about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
displaySheCodesPoem();
