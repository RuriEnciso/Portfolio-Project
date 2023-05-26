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
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
  } else if (/[A-Z]/.test(email.value)) {
    emailError.textContent = 'Entered value has to be in lower case';
  }
  // Set the styling appropriately
  emailError.className = 'error';
  nameError.className = 'error';
}

fullName.addEventListener('input', () => {
  if (fullName.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    nameError.textContent = ''; // Reset the content of the message
    nameError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

email.addEventListener('input', () => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener('submit', (event) => {
  // if the email field is valid, we let the form submit
  if (!email.validity.valid || !fullName.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});
