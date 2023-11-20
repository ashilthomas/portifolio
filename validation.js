function validateName() {
    let name = document.getElementById("name").value;
    let nameError = document.getElementById("errorName");

    if (name.trim() === "") {
        nameError.textContent = "Please Enter your name";
        return false
    } else if (name.length < 5) {
        nameError.textContent = "Name should be at least 5 characters long";
        return false
    } else {
        nameError.textContent = "";
        return true
    }
}


function validateEmail(){
    let email = document.getElementById("email").value
    let errorEmail = document.getElementById("errorEmail")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.trim()==""){
        errorEmail.innerHTML="please enter email id"
        return false
    }else if(!email.match(emailRegex)){
        errorEmail.innerHTML="Pease enter valid email"
        return false
    }else{
        errorEmail.innerHTML=''
        return true
    }
}

function validatePassword(){
    let password = document.getElementById("password").value
    let errorPasword = document.getElementById("errorPassword")

    if (password.length<8) {
        
        errorPasword.innerHTML="password minmum length 8"
        return false
    }else if(password.trim()==''){
        errorPasword.innerHTML="please enter password"
        return false
    }else{
        errorPasword.innerHTML=""
        return true
    }
}

// function validation(){
//     if(validateName()||validateEmail()||validatePassword()){
//         return false
//     }else{
//         return true
//     }
// }


function validation() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {
        // All validations passed, allow form submission
        return true;
    } else {
        // Prevent form submission if any validation fails
        return false;
    }
}