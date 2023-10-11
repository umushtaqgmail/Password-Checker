const password = document.querySelector('#password');
const message = document.querySelector('#message');
const strngthpasword = document.querySelector('#Strength');
console.log(password.value);
 password.addEventListener('input', ()=>{
    if(password.value.length > 0){
        message.style.display= 'block';
    }

    else{
        message.style.display = "none";
    }

    if(password.value.length < 4)
    {
        strngthpasword.innerHTML = "Weak";
        password.style.borderColor = "#ff5925";
        message.style.color = "#ff5925"

    }

    else if(password.value.length >= 4 && password.value.length <8)
    {
        strngthpasword.innerHTML = "Medium";
        password.style.borderColor = "yellow";
        message.style.color = "yellow"
        
    }

    else if (password.value.length >= 8){
        strngthpasword.innerHTML = "Strong";
        password.style.borderColor = "#26d730";
        message.style.color = "#26d730"

    }
 })