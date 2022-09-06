const user_error = document.getElementById("name-error");
const password_error = document.getElementById("password-error");
const password1_error = document.getElementById("password1-error");
const email_error = document.getElementById("email-error");
const phone_error = document.getElementById("phone-error");

function validateName() {
    var name = document.getElementById('uname').value;
    if (name.length == 0) {
        user_error.innerHTML = "Fill the name";
        return false;
    }
    else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        user_error.innerHTML = "Write Full Name";
        return false;
    }
    else {
        user_error.innerHTML = '<i class="fa-solid fa-check"></i>';
        // user_error.innerHTML="valid";
        return true;
    }

}

function validatePassword() {
    var password = document.getElementById('pass').value;
    if (password.length == 0) {
        password_error.innerHTML = "Fill the password";
        return false;
    }
    else if (password.length < 8) {
        password_error.innerHTML = "Password length must be 8";
        return false;

    }
    else if (password.length >= 8 || password.length <= 15) {
        password_error.innerHTML = '<i class="fa-solid fa-check"></i>';
        return true;
    }
}

function validatePassword1() {
    var password = document.getElementById('pass').value;
    var password1 = document.getElementById('pass1').value;
    if (password == password1) {
        password1_error.innerHTML = '<i class="fa-solid fa-check"></i>';
        return true;
    }
    else {
        password1_error.innerHTML = "Password is not match";
        return false;
    }
}

function validateEmail()
{
    var emails=document.getElementById('email').value;
    if(emails.length==0)
    {
        email_error.innerHTML="Fill the email";
        return false;
    }
    else if(emails.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
    {
        email_error.innerHTML='<i class="fa-solid fa-check"></i>';
        return true;
    }
    else{
        email_error.innerHTML="Wrong email";
        return false;
    }
}
function validatePhone()
{
    var phones=document.getElementById('phone').value;
    if(phones.length==0)
    {
        phone_error.innerHTML="Enter phone Number";
        return false;
    }
    else if(phones.length!==12)
    {
        phone_error.innerHTML="number should be 11 digits";
        return false;
    }
    else if(phones.match(/^[0-9]{4}-[0-9]{7}$/))
    {
        phone_error.innerHTML='<i class="fa-solid fa-check"></i>'
        return true;
    }
}
