let divInput = document.querySelectorAll('.input');
let input = document.querySelectorAll('.input-login')


input.forEach((element, index) => element.addEventListener('click', () => {
    divInput.forEach(div => div.classList.remove('active'));
    divInput[index].classList.add('active');
}));