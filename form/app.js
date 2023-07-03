let signupBtn = document.getElementById('signup-btn');
let signinBtn = document.getElementById('signin-btn');
let nameField = document.getElementById('nameField');
let title  =  document.getElementById('title');


signinBtn.onclick = function(){
    nameField.style.maxHeight ="0";
    title.innerHTML = "Sign in"
    signupBtn.classList.add('disable');
    signinBtn.classList.remove('disable');
}
signupBtn.onclick =function(){
    nameField.style.maxHeight ="65px";
    title.innerHTML = "Sign up";
    signupBtn.classList.remove('disable');
    signinBtn.classList.add('disable');
}


