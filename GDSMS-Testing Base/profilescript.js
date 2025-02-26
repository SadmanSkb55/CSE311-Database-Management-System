// for sign in sign up
function showSignIn() {
    document.getElementById("signInForm").classList.remove("d-none");
    document.getElementById("signUpForm").classList.add("d-none");
    document.getElementById("signInTab").classList.add("active");
    document.getElementById("signUpTab").classList.remove("active");
}

function showSignUp() {
    document.getElementById("signInForm").classList.add("d-none");
    document.getElementById("signUpForm").classList.remove("d-none");
    document.getElementById("signInTab").classList.remove("active");
    document.getElementById("signUpTab").classList.add("active");
}
