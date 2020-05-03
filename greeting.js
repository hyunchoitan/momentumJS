const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  toDosForm = document.querySelector(".js-toDoForm"),
  toDosList = document.querySelector(".js-toDoList");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";
HIDING_CN = "hiding";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
  toDosForm.classList.remove(HIDING_CN);
  toDosList.classList.remove(HIDING_CN);
}

function askForName() {
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.add(HIDING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Welcome back, ${text}!`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    toDosForm.classList.add(HIDING_CN);
    toDosList.classList.add(HIDING_CN);
    askForName();
  } else {
    toDosForm.classList.remove(HIDING_CN);
    toDosList.classList.remove(HIDING_CN);
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
