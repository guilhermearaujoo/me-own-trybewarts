let divInput = document.querySelectorAll('.input');
let input = document.querySelectorAll('.input-login')
const buttonSendTop = document.querySelector('.head-login-button');

//gives moviment for the input div
input.forEach((element, index) => element.addEventListener('click', () => { 
    divInput[index].classList.add('active');
}));

input.forEach((element, index) => element.addEventListener('keypress', () => { 
    divInput[index].classList.add('active');
}));


//validate de login information and throw and warning
const validateLogin = () => {
    (input[0].value === "tryber@teste.com" && input[1].value === "123456") ? window.alert("Olá, Tryber!") : window.alert("Email ou senha inválidos.");
}
buttonSendTop.addEventListener('click', validateLogin);

const selected = document.getElementById('house');

selected.addEventListener('change', () => {
    const body = document.getElementsByTagName('body')[0];
    body.className = selected.value;
})


