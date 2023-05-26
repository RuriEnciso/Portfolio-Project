const nameField = document.getElementById("name");
const emailField = document.getElementById("mail");
const messageField = document.getElementById("msj");

window.onload = () => {
    const data = localStorage.getItem("userData");
    if (data != null){
        const obj = JSON.parse(data);

    }
}

const storeData = (data) => {
    const str = JSON.stringify(data);
    localStorage.setItem("userData", str);
    console.log(localStorage)
}

nameField.addEventListener("change", (event) => {
    ud.fullName = event.target.value;
    storeData(ud);
});

emailField.addEventListener("change", (event) => {
    ud.email = event.target.value;
    storeData(ud);
});

messageField.addEventListener("change", (event) => {
    ud.message = event.target.value;
    storeData(ud);
});


