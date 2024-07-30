function validationform(){
    var fname=document.validateform.fname.value;
    var email=document.validateform.mail.value;
    var phonenumber=document.validateform.phonenumber.value;
    var comments=document.validateform.comments.value;
    if(fname== null || fname== ""){
        alert("Enter your first name");
        return false;
    }
    else if(email){
        alert("Enter the correct mail");
        return false;
    }
    else if(phonenumber== null || phonenumber== "" || phonenumber.length <10){
        alert("Enter your phonenumber in 10 digit");
        return false;
    }
    else if(comments== null || comments== ""){
        alert("Enter your address");
        return false;
    }
}
function formsub(){
    alert("Your form has been submitted successfully")
}
