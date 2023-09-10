/*-------------form validation--------------*/

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setError(username, 'Username is required');
    } else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
    } else if(!isValidEmail(emailValue)) {
        setError(email, 'provide a valid email address');
    } else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'password is required');
    } else if(passwordValue.length < 8){
        setError(password, 'password must be at least 8 characters.');
    }else{
        setSuccess(password);
    }

    if(password2Value === ''){
        setError(password2, 'password is required');
    } else if(password2Value !== passwordValue){
        setError(password2, "password doesn't match.");
    }else{
        setSuccess(password2);
    }
}




const secondform = document.querySelector('.secondform'),
      nextbtn =secondform.querySelector('.nextbtn'),
      backbtn =secondform.querySelector('.backbtn'),
      allinput =secondform.querySelectorAll('.first input');

const fullname =document.querySelector('.fullname');
const dob =document.querySelector('.dob');
const secondemail =document.querySelector('.secondemail');
const mobile =document.querySelector('.mobile');
const occupation =document.querySelector('.occupation');
const idtype =document.querySelector('.idtype');
const idnumber =document.querySelector('.idnumber');
const authority =document.querySelector('.authority');
const state =document.querySelector('.state');
const issueddate =document.querySelector('.issueddate');
const expdate =document.querySelector('.expdate');
const gender =document.querySelector('.gender');



const setSecondError = (element, message) => {
    const inputfield = element.parentElement;
    const secondErrorDisplay = inputfield.querySelector('.error');

    secondErrorDisplay.innerText = message;
    inputfield.classList.add('error');
    inputfield.classList.remove('success');
};

const setSecondSuccess = element => {
    const inputfield = element.parentElement;
    const secondErrorDisplay = inputfield.querySelector('.error')

    secondErrorDisplay.innerText = '';
    inputfield.classList.add('success');
    inputfield.classList.remove('error');
};

const isSecondValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
    
    
nextbtn.addEventListener("click", () => {
    secondValidation();

    allinput.forEach(input => {
        if(input.value != ""){
            secondform.classList.add('secActive');
        }else{
            secondform.classList.remove('secActive');
        }
    })
})

const secondValidation = () =>{
    const fullnameValue = fullname.value.trim();
    const dobValue = dob.value.trim();
    const secondemailValue = secondemail.value.trim();
    const mobileValue = mobile.value.trim();
    const occupationValue = occupation.value.trim();
    const idtypeValue = idtype.value.trim();
    const idnumberValue = idnumber.value.trim();
    const authorityValue = authority.value.trim();
    const stateValue = state.value.trim();
    const issueddateValue = issueddate.value.trim();
    const expdateValue = expdate.value.trim();
    const genderValue = gender.value.trim();

    if(fullnameValue === ''){
        setSecondError(fullname, 'fullname is required');
    } else{
        setSecondSuccess(fullname);
    }

    if(dobValue === ''){
        dob.style.padding = '13px';
        setSecondError(dob, 'dob is required');
    } else{
        setSecondSuccess(dob);
    }

    if(mobileValue === ''){
        setSecondError(mobile, 'mobile is required');
    } else{
        setSecondSuccess(mobile);
    }

    if(genderValue === ''){
        setSecondError(gender, 'mobile is required');
    } else{
        setSecondSuccess(gender);
    }

    if(occupationValue === ''){
        setSecondError(occupation, 'occupation is required');
    } else{
        setSecondSuccess(occupation);
    }

    if(idtypeValue === ''){
        setSecondError(idtype, 'type is required');
    } else{
        setSecondSuccess(idtype);
    }

    if(idnumberValue === ''){
        setSecondError(idnumber, 'number is required');
    } else{
        setSecondSuccess(idnumber);
    }

    if(authorityValue === ''){
        setSecondError(authority, 'authority is required');
    } else{
        setSecondSuccess(authority);
    }

    if(stateValue === ''){
        setSecondError(state, 'state is required');
    } else{
        setSecondSuccess(state);
    }

    if(issueddateValue === ''){
        issueddate.style.padding = '13px';
        setSecondError(issueddate, 'date is required');
    } else{
        setSecondSuccess(issueddate);
    }

    if(expdateValue === ''){
        expdate.style.padding = '13px';
        setSecondError(expdate, 'date is required');
    } else{
        setSecondSuccess(expdate);
    }

    if(secondemailValue === ''){
        setError(secondemail, 'Email is required');
    } else if(!isSecondValidEmail(secondemailValue)) {
        setSecondError(secondemail, 'provide a valid email address');
    } else{
        setSecondSuccess(secondemail);
    }
}

/*--------------switch button--------------------*/

backbtn.addEventListener('click', () => secondform.classList.remove('secActive'));


const switchButton = document.querySelector('.switchButton');
const switchButton2 = document.querySelector('.switchButton2');

switchButton.addEventListener('click', () =>{
    
        secondform.style.display = 'block';

        form.style.display = 'none';
});

switchButton2.addEventListener('click', () =>{
    
    secondform.style.display = 'none';

    form.style.display = 'block';
});