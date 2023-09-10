const textbox =document.querySelector('.text-box');
const textbox2 =document.querySelector('.text-box2');
const alertError =document.querySelector('.alert-error');
const alertSuccess =document.querySelector('.alert-success');
const sendBtn =document.querySelector('.send-btn');
const textarea =document.querySelector('textarea');


sendBtn.addEventListener("click", () => {

    Validation();
});

const Validation = () =>{
    const textboxValue = textbox.value.trim();
    const textbox2Value = textbox2.value.trim();
    const textareaValue = textarea.value.trim();

    if(textboxValue === ''){
        alertError.style.display = 'block';
    } else if(textbox2Value === ''){
        alertError.style.display = 'block';
        alertSuccess.style.display = 'none';
    } else if(textareaValue === ''){
        alertError.style.display = 'block';
        alertSuccess.style.display = 'none';
    }else{
        alertSuccess.style.display = 'block';
        alertError.style.display = 'none';
    }
}