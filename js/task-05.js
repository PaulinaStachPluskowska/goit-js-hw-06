const txtInput = document.querySelector("#name-input");
const txtOutput = document.querySelector("#name-output");

txtInput.addEventListener("input", () => {
  const text = txtInput.value.trim();

  if (text === "") {
    txtOutput.textContent = "Anonymous";
    return;
  }

  txtOutput.textContent = text;
});
