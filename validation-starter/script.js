var nameError=document.getElementById('name-error');
var phoneError=document.getElementById('phone-error');
var emailError=document.getElementById('email-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Please enter a name';
        return false;
    }
    if(!name.match(/^[A-Za-z]+(\s[A-Za-z]+)*$/)){
        nameError.innerHTML = 'Please enter full name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no. is required';
        return false;
    }
    if(!phone.match(/^\+\d{1,3}\d{4,14}$/)){
        phoneError.innerHTML = 'Enter a valid phone number, e.g., +1234567890';
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = "Please enter email address";
        return false;
    }
    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailError.innerHTML = 'Enter a valid email address, e.g., example@domain.com';
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;

    if(message.length == 0){
        messageError.innerHTML = "Please enter your message";
        return false;
    }

    var required = 30;
    var remaining = required - message.length;
    if(remaining > 0){
        messageError.innerHTML = remaining + ' more characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || validatePhone() || validateEmail() || validateMessage){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the above errors to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 4000);
        return false;
    }
}