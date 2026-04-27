function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "No meio do caminho tinha uma pedra. Tinha uma pedra no meio do caminho",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
