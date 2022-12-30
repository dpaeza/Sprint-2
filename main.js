const form = document.getElementById('formulario');
const Name = document.getElementById('Nombre');
const TCnumber = document.getElementById('numeroTC');
const month = document.getElementById('mes');
const year = document.getElementById('año');
const cvc = document.getElementById('cvc');
const newPcero = document.getElementById('nuevoPcero');
const newP = document.getElementById('nuevoP');
const newPdos = document.getElementById('nuevoPdos');
const newPtres = document.getElementById('nuevoPtres')
const newPcuatro = document.getElementById('nuevoPcuatro');
//Tarjeta
const cardTCnumber = document.getElementById('tarjetaTCnumber');
const cardTCName = document.getElementById('tarjetaTCName');
const cardTCMonth = document.getElementById('tarjetaTCmonth');
const cardTCYear = document.getElementById('tarjetaTCyear');
const cardTCCVC = document.getElementById('tarjetaTCCVC');
//Contadores para el submit
var contador0 = 0;
var contador = 0;
var contador1 = 0;
var contador2 = 0;
var contador3 = 0;
var contador4 = 0;
//THANK YOU SECTION
const transition = document.getElementById('thankYou')

transition.style.display='none'

//input numero de tarjeta
TCnumber.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    //Eliminar espacios en blanco
    TCnumber.value = valorInput.replace(/\s/g, '')
        //Poner espacio cada 4 numeros
        .replace(/([0-9]{4})/g, '$1 ')
        //Elimina el ultimo espaciado
        .trim();
    //Pintar el numero de tarjeta ingresado a la imagen de la tarjeta
    cardTCnumber.textContent = valorInput;
    if (valorInput == '') {
        cardTCnumber.textContent = '0000 0000 0000 0000';
    }
});

//input nombre 
Name.addEventListener('keyup', (e) => {
    let valorInputName = e.target.value;
    cardTCName.textContent = valorInputName.toUpperCase();
    if (valorInputName == '') {
        cardTCName.textContent = 'JANE APPLESEED';
    }

});
    
//input mes
month.addEventListener('keyup', (e) => {
    let valorInputmonth = e.target.value;
    cardTCMonth.textContent = valorInputmonth;
    if (valorInputmonth == '') {
        cardTCMonth.textContent = '00';
    }

});

//input año
year.addEventListener('keyup', (e) => {
    let valorInputyear = e.target.value;
    cardTCYear.textContent = valorInputyear;
    if (valorInputyear == '') {
        cardTCYear.textContent = '00';
    }

});

//input cvc
cvc.addEventListener('keyup', (e) => {
    let valorInputcvc = e.target.value;
    cardTCCVC.textContent = valorInputcvc;
    if (valorInputcvc == '') {
        cardTCCVC.textContent = '000';
    }

});

//Validar nombre
Name.addEventListener('input', () => {
    let valorName = Name.value;
    let NameNumerico = parseInt(valorName);
    if (valorName == 0 && NameNumerico!=0) {
        contador0 = 2;
        showError(Name, newPcero, 'Can\'t be blank');
        newPcero.innerText = 'Can\'t be blank';
    }else {
        hideError(Name, newPcero);
        newPcero.textContent = '';
        contador0 = 1;
    }
})

//Validar numero de TC
TCnumber.addEventListener('input', () => {
    let regExp = /[A-z]/g;
    let valorTCnumber = TCnumber.value;
    let valorNumerico2 = parseInt(valorTCnumber);
    if (regExp.test(TCnumber.value)) {
        contador = 2;
        showError(TCnumber, newP, 'Wrong format, numbers only');
        newP.innerText = 'Wrong format, numbers only';
    } else if (valorTCnumber == 0 && valorNumerico2 != 0) {
        contador = 2;
        showError(TCnumber, newP, 'Can\'t be blank');
        newP.innerText = 'Can\'t be blank';
    }  else {
        hideError(TCnumber, newP);
        newP.textContent = '';
        contador = 1;
    }
})

//Validar mes
month.addEventListener('input', () => {
    let valor = month.value;
    let valorNumerico = parseInt(valor);
    if (month.value > 12 || valorNumerico == 0) {
        contador2 = 2;
        showError(month, newPdos, 'Not valid');
        newPdos.innerText = 'Not valid';
    } else if (valor == 0) {
        contador2 = 2;
        showError(month, newPdos, 'Can\'t be blank');
        newPdos.innerText = 'Can\'t be blank';
    }else {
        hideError(month, newPdos);
        newPdos.textContent = '';
        contador2 = 1;
    }
})

//Validar año
year.addEventListener('input', () => {
    let valorAño = year.value;
    let numeroAño = parseInt(valorAño);
    if (year.value < 22 && year.value != 0) {
        contador3 = 2;
        showError(year, newPtres, 'Not valid');
        newPtres.innerText = 'Not valid';
    } else if (numeroAño == 0) {
        contador3 = 2;
        showError(year, newPtres, 'Not valid');
        newPtres.innerText = 'Not valid';
    } else if (valorAño == 0) {
        contador3 = 2;
        showError(year, newPtres, 'Can\'t be blank');
        newPtres.innerText = 'Can\'t be blank';
    }else {
        hideError(year, newPtres);
        newPtres.textContent = '';
        contador3 = 1;
    }
})

//Validar CVC
cvc.addEventListener('input', () => {
    let valorCVC = cvc.value;
    let CVCNumerico = parseInt(valorCVC);
    if (valorCVC == 0 && CVCNumerico != 0) {
        contador4 = 2;
        showError(cvc, newPcuatro, 'Can\'t be blank');
        newPcuatro.innerText = 'Can\'t be blank';
    } else if (CVCNumerico < 100) {
        contador4 = 2;
        showError(cvc, newPcuatro, 'Minimum 3 digits');
        newPcuatro.innerText = 'Minimum 3 digits';
    } else if (CVCNumerico > 1000) {
        contador4 = 2;
        showError(cvc, newPcuatro, 'Maximum 3 digits');
        newPcuatro.innerText = 'Maximum 3 digits';
    }else {
        hideError(cvc, newPcuatro);
        newPcuatro.textContent = '';
        contador4 = 1;
    }
})

//Funciones
function showError(divInput, divError, msgError) {
    divError.innerText = msgError;
    divInput.style.borderColor = "#ff0000";
}

function hideError(divInput, divError) {
    divError.innerText = '';
    divInput.style.borderColor = 'hsl(270, 3%, 87%)';
}


//Enviar formulario (confirm bottom)
const handleSubmit = (e) => {
    e.preventDefault();
    if (contador0 == 1 && contador == 1 && contador2 == 1 && contador3 == 1 && contador4 == 1) {
        form.style.display = 'none';
        transition.style.display = 'flex';
        transition.innerHTML += `
        <img class="iconCheck" src="./images/icon-complete.svg" alt="check icon">
        <h1 class="thankYouText">Thank you!</h1>
        <p class="pThank">We've added your card details</p>
        <button class="buttonConfirm">Continue</button>`
        //Almacenamiento en local Storange
        const newUserInformation = {
            cardHolderName: Name.value,
            cardNumber: TCnumber.value,
            monthExpDate: month.value,
            yearExpDate: year.value,
            CVCnumber: cvc.value,
        }
        localStorage.setItem("UserInformation", JSON.stringify(newUserInformation))
    } else if (contador0 == 0 || contador == 0 || contador2 == 0 || contador3 == 0 || contador4 == 0) {
        window.alert("Please fill in all the fields.");
    } else {
        console.log('NO se puede enviar')
    }
    
}

form.addEventListener('submit', (e) => { handleSubmit(e) });

