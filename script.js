const inputMail = document.getElementById('inputMail');

inputMail.addEventListener('input', e=>{    
    const inputData = e.target.value
    if(inputData.length < 5){
        // Email is required.
    } else{
        // Please enter a valid email address.
    }
    const inputValid = inputMail.checkValidity()
    if(inputValid===true && inputData.length > 0){
        inputMail.style.borderColor = "rgb(43,184,113)";
    }else{
        inputMail.style.borderColor = "rgb(235,57,66)";
    }
})