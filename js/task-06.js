const txtInput = document.querySelector("#validation-input");
const txtLength = txtInput.getAttribute("data-length");

txtInput.addEventListener("blur", (text) => {
  if (text.target.value.length === Number(txtLength)) {
    txtInput.classList.add("valid");
    txtInput.classList.remove("invalid");
  } else {
    txtInput.classList.add("invalid");
    txtInput.classList.remove("valid");
  }
});
