const form = document.getElementById('form');
const firstname = document.getElementById('First-name');
const lastname = document.getElementById('Last-name');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
var firstnameerror = document.getElementById('error-h');



var erroricon = document.getElementById('error-i');
form.addEventListener('submit',function(e) {
    e.preventDefault();

    
    if (firstname,lastname.value=== ''){
        showerror(firstname,);
    }
    else{
        showsucces();
    }

    if (lastname.value=== ''){
        showerror(lastname);
    }
    if (email.value=== ''){
        showerror(email);
    }

    if (password.value=== ''){
        showerror(password);
    }
    

});

function showerror(input,message){
    
    
    const formcontrol=input.parentElement;
    formcontrol.className = 'form-p error';
    firstnameerror.style.display = 'error';
    erroricon.style.display = 'error';
    

    
}

function showsucces(){


}