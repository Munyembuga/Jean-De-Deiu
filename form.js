var fnameerror = document.getElementById('fname-error');
var phoneerror = document.getElementById('phone-error');
var emailerror = document.getElementById('email-error');
var messageerror = document.getElementById('message-error');
var countryerror = document.getElementById('country-error');
var submiterror = document.getElementById('submit-error');
  var radio = document.getElementById('radio');
function validatename(){
    var name = document.getElementById('fname-name').value;

    if(name.length == 0){
        fnameerror.innerHTML = 'name is required';
        return false;
    }
   
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        fnameerror.innerHTML = 'Write full name';
        return false;
    }
    fnameerror.innerHTML = 'valid';
    return true;
     
}
function validatephone(){
    var phone=document.getElementById('contact-phone').value;
     if(phone.length==0){
        phoneerror.innerHTML='phone is requied';
        return false;
     }
     if(phone.length !== 10){
        phoneerror.innerHTML='can write correct number';
        return false;
     }
     if(!phone.match(/^[0-9]{10}$/)){
        phoneerror.innerHTML='please write atleast 10 digit';
        return false;

     }
     phoneerror.innerHTML='correct number';
     return true;

}
function validatemessage(){
    var message=document.getElementById(contact-message).value;
    var required=30;
    var left=required - message.length;
    if(left>0){
        messageerror.innerHTML= left + 'fill message';
        return false;
    }
    messageerror.innerHTML='valid';
    return true;
}

function validateemail(){
    var email = document.getElementById('contact-email').value;

 if(email.length == 0){
    emailerror.innerHTM = 'Please write your email';
     return false;
     }
 if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
         emailerror.innerHTML = 'Email Invalid';
     return false;
      }
     emailerror.innerHTML = 'valid';
     return true;


}


function validatecountry(){
    var country = document.getElementById('contact-country').value;

    if(country.length ==0)
    {
        countryerror.innerHTML = 'please Write Country';
        return false;
    }
    if(!country =='Rwanda'){
        countryerror.innerHTML = 'invalid';
        return false;

    }
    if(!country =='rwanda'){
        countryerror.innerHTML = 'invalid';
        return false;

    }
    countryerror.innerHTML = 'valid';
    return true;
    }
    function validatemessage(){
        var message = document.getElementById('contact-message').value;
        var required = 30;
        var left = required - message.length;
        if (left > 0){
            messageerror.innerHTML = left +' more characters require';
            return false
        }
        messageerror.innerHTML = 'valid';
        return true;
    }
   function validatesubmitt(){
        if ( !validatename() || !validatecountry() || !validatemessage() || !validateemail() || !validatephone()){
            submiterror.style.display = 'block';
            submiterror.innerHTML = 'Please Fix Error to Submitt';
       setTimeout(function() {submiterror.style.display = 'none';}, 3000 );
        return false;
    }
    }
    
   


// function validateaubmitt(){
// if(!validatephone() || !validatename() ||!validatemessage())
// submiterror.innerHTML='please fill this form';}