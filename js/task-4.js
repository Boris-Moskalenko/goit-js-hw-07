
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const form = document.querySelector(".login-form");

    if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
    }
    const formData = {
    email: emailValue,
    password: passwordValue,
    };
   
    console.log(formData);

     form.reset();
});