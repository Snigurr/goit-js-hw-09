const storageKeyEmail = "feedback-em";
const storageKeyMessage = "feedback-mess";

const form = document.querySelector(".feedback-form");
const emailinput = form.querySelector("[name='email']");
const messageInput = form.querySelector("[name='message']");

form.addEventListener("submit", handleSubmit);
emailinput.addEventListener("input", allInputs);
messageInput.addEventListener("input", allInputs);

saveInput();

function handleSubmit(event) {
  event.preventDefault();

  const email = emailinput.value.trim(); 
  const message = messageInput.value.trim(); 

  if (email === '' || message === '') {
    return alert('All form fields must be filled in');
  }

  console.log("send");
  event.currentTarget.reset();
  localStorage.removeItem(storageKeyEmail);
  localStorage.removeItem(storageKeyMessage);
}

function allInputs(event) {

  const target = event.target; 
  const message = target.value.trim();
  
  if (target === emailinput) {
    localStorage.setItem(storageKeyEmail, message);
  } else if (target === messageInput) {
    localStorage.setItem(storageKeyMessage, message);
  }
}

function saveInput() {
  const savedEmail = localStorage.getItem(storageKeyEmail);
  const savedMessage = localStorage.getItem(storageKeyMessage);

  if (savedEmail || savedMessage) {
    emailinput.value = savedEmail;
    messageInput.value = savedMessage;
  }

}