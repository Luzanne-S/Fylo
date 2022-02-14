function validateForm(){
    var email = document.forms["myForm"] ["name"];
    if (email.value == " "){
      document.getElementById('erroremail').innerHTML="Please enter a valid email address";
      email.focus();
      return false;
    }else{
      document.getElementById('erroremail').innerHTML="";
    }
  }