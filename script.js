
function validate() {

    // get elements 
    var password1 = document.getElementById('Password1');
    var password2 = document.getElementById('Password2');
    var validation = document.getElementById('validate');
    var submit = document.getElementById('submit');
    
    
    //if password is not entered
    if (password1.value == password2.value) {
        validation.innerHTML = 'Passwords Match.';
        submit.disabled= false;
    } else if (password1.value != password2.value ) {
        validation.innerHTML ='Passwords Dont Match!';
        submit.disabled=true;
    }
    
}