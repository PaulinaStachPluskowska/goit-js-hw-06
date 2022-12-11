const formCheck = document.querySelector(".login-form");

formCheck.addEventListener("submit", (dataInput) => {
  dataInput.preventDefault();

  const email = formCheck.elements.email.value;
  const password = formCheck.elements.password.value;

  if (email === "" || password === "") {
    return alert("All the fields need to be filled!");
  }

  const collectedData = { email, password };
  console.log(collectedData);
  formCheck.reset();
});
