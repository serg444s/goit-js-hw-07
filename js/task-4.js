const loginForm = document.querySelector(".login-form");

function formSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (!email.trim() || !password.trim()) {
    alert("Please fill in all the fields!");
  } else {
    console.log({
      email: email.trim(),
      password: password.trim(),
    });
    form.reset();
  }
}

loginForm.addEventListener("submit", formSubmit);
