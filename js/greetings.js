const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const header = document.querySelector(".greeting");

const HIDDEN = "hidden";
const USERNAME = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN);
  const username = loginInput.value;
  localStorage.setItem(USERNAME, username);
  sayHello(username);
}

function sayHello() {
  const username = localStorage.getItem(USERNAME);
  header.classList.remove(HIDDEN);
  header.textContent = `Hello! ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the title
  sayHello();
}
