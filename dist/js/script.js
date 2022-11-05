// submit the answers 
const sectionForm = document.getElementsByClassName('form-div')[0];
const formData = document.createElement('form');
formData.id = 'form-data';

function showName(name, lastName) {
  const fullName = document.createElement('p');
  fullName.innerText = `Nome: ${name} ${lastName}`;
  formData.appendChild(fullName);
}

function showEmail(email) {
  const emailParagraph = document.createElement('p');
  emailParagraph.innerText = `Email: ${email}`;
  formData.appendChild(emailParagraph);
}

function showHouse() {
  const house = document.getElementById('house').value;
  const casa = document.createElement('p');
  casa.innerText = `Casa: ${house}`;
  formData.appendChild(casa);
}

function showMaterias() {
  const materias = document.getElementsByClassName('subject');
  const favorite = document.createElement('p');
  const vetor = [];
  for (let index = 0; index < materias.length; index += 1) {
    if (materias[index].checked) {
      vetor.push(` ${materias[index].value}`);
    }
  }
  favorite.innerText = `Matérias: ${vetor}`;
  formData.appendChild(favorite);
}

function showFamily() {
  const family = document.getElementsByName('family');
  const favoriteFamily = document.createElement('p');
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      favoriteFamily.innerText = `Família: ${family[index].id}`;
    }
  }
  formData.appendChild(favoriteFamily);
}

function showAvaliacao() {
  const rate = document.getElementsByName('rate');
  const rateChoose = document.createElement('p');
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked) {
      rateChoose.innerText = `Avaliação: ${rate[index].value}`;
    }
  }
  formData.appendChild(rateChoose);
}

function showObservacao() {
  const avaliacao = document.getElementById('textarea');
  const avaliacaoParagraph = document.createElement('p');
  avaliacaoParagraph.innerText = `Observações: ${avaliacao.value}`;
  formData.appendChild(avaliacaoParagraph);
}

function showData() {
  window.alert('Your data was sent sucessfully!')
  const inputs = document.getElementsByTagName('input');
  const form = document.getElementById('evaluation-form');
  form.style.display = 'none';
  showName(inputs[2].value, inputs[3].value);
  showEmail(inputs[4].value);
  showHouse();
  showFamily();
  showMaterias();
  showAvaliacao();
  showObservacao();
  sectionForm.appendChild(formData);
}


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
    input[0].value = '';
    input[1].value = '';
}
buttonSendTop.addEventListener('click', validateLogin);

const selected = document.getElementById('house');

selected.addEventListener('change', () => {
    const body = document.getElementsByTagName('body')[0];
    body.className = selected.value;
})

// set dinamic counter for the text area
function changeCounter() {
    const textarea = document.getElementById('textarea');
    const span = document.getElementById('counter');
    const size = 500 - textarea.value.length;
    span.innerText = size;
  }
  
  const textarea = document.getElementById('textarea');
  textarea.addEventListener('input', changeCounter);

  // make the button send abilited only if mark concent input

const checkBox = document.getElementById('agreement');
const btn = document.getElementById('submit-btn');
btn.disabled = true;

const clickCheckBox = () => {
  if (checkBox.checked) {
    btn.disabled = false;
    btn.addEventListener('click', displayNone);
  } else {
    btn.disabled = true;
  }
}

const displayNone = (event) => {
    event.preventDefault();
    showData();
}

checkBox.addEventListener('click', clickCheckBox);
