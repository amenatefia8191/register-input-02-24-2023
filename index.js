'use strict';

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// show success outline 
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}
//  check email is valid
function checkEmail(input) {
    const re = 

    if(re.test(input.value.trim)) {
        showSuccess(input);
    }else {
        showError(input, 'email is not valid')
    }
}
//checkRequired field 
function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        if(input.value.trim === '') {
            showError(input, `${getFieldName(input.id)} is required`);
        }else{ 
            showSuccess(input)
        }
    });

}
// check input length 
function checkLength (input, min , max) {
  if (input.value.length < min ) {
    showError(input, `${getFieldName(input)} must be at least ${min} 
    Characters `);
  } else if(input.value.length < max) {
    showError(input, `${getFieldName(input)} must be less than ${max} 
    Characters `);
  }else {
    showSuccess(input)
  }
   
}

// check password  match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
         showError(input2, 'passwords do not match');
    }else {
        showSuccess();
    }
};

//Get fieldName 
function getFieldName (input) {
     return input.id.chatAt(0).toUpperCase() + input.id.slice(1);
};

// Event listener 
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2)
});