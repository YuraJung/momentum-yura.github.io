const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

loginForm.classList.add("greeting_point");
greeting.classList.add("greeting_point");

function submitClick(event) {
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,loginInput.value);

    paintGreeting();
}

function paintGreeting() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",submitClick);
}

else{   
    paintGreeting(savedUsername);
}