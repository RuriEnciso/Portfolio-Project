const form = document.querySelector('form');
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');
const fullName = document.getElementById('name');
const nameError = document.querySelector('#name + span.error');

function showError() {
  if (fullName.validity.valueMissing) {
    nameError.textContent = 'You need to enter your full name.';
  } else if (fullName.validity.patternMismatch) {
    nameError.textContent = 'Entered value needs to be a full name.';
  } else if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an email address.';
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Entered value needs to be an email address.';
  } else if (/[A-Z]/.test(email.value)) {
    emailError.textContent = 'Entered value has to be in lower case';
  }
  // Set the styling appropriately
  emailError.className = 'error';
  nameError.className = 'error';
}

form.addEventListener('submit', (event) => {
  // if the email field is valid, we let the form submit
  if (!email.validity.valid || !fullName.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});
