const storageKey = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("[name='email']");
const messageInput = form.querySelector("[name='message']");

form.addEventListener("submit", handleSubmit);
emailInput.addEventListener("input", saveInput);
messageInput.addEventListener("input", saveInput);

loadInput();

function handleSubmit(event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (email === '' || message === '') {
    return alert('All form fields must be filled in');
  }

  const userData = {
    email: email,
    message: message
  };

  console.log(userData);

  event.currentTarget.reset();
  localStorage.removeItem(storageKey);
}

function saveInput() {
  const userData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim()
  };

  localStorage.setItem(storageKey, JSON.stringify(userData));
}

function loadInput() {
  const savedData = localStorage.getItem(storageKey);

  if (savedData) {
    const userData = JSON.parse(savedData);
    emailInput.value = userData.email;
    messageInput.value = userData.message;
  }
}