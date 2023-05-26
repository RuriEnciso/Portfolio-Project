const nameField = document.getElementById('name');
const emailField = document.getElementById('mail');
const messageField = document.getElementById('msj');

const ud = {
  fullName: '',
  email: '',
  message: '',
};

window.onload = () => {
  const data = localStorage.getItem('userData');
  if (data != null) {
    const obj = JSON.parse(data);
    nameField.value = obj.fullName;
    emailField.value = obj.email;
    messageField.value = obj.message;
    ud.fullName = obj.fullName;
    ud.email = obj.email;
    ud.message = obj.message;
  }
};

const storeData = (data) => {
  const str = JSON.stringify(data);
  localStorage.setItem('userData', str);
};

nameField.addEventListener('change', (event) => {
  ud.fullName = event.target.value;
  storeData(ud);
});

emailField.addEventListener('change', (event) => {
  ud.email = event.target.value;
  storeData(ud);
});

messageField.addEventListener('change', (event) => {
  ud.message = event.target.value;
  storeData(ud);
});
