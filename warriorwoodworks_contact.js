function ValidateEmail(inputText)  
{  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(inputText.value.match(mailformat))  
{  
document.form1.text1.focus();  
return true;  
}  
else  
{  
alert("You have entered an invalid email address!");  
document.form1.text1.focus();  
return false;  
}  
} 



$(document).ready(function() {
  $(".error").hide();
  $("input:text").change(function() {
    console.log($(this).val().trim())
    if ($(this).val().trim().length) {
      $(".error").hide();
    } else {
      $(".error").show();
    }
  });
  $("#contact_form").submit(function(e) {
    e.preventDefault();
    var filename = document.forms["contact_form"]["fname"].value;
    if (filename == null || filename == "") {
      $("#fname_error").show();
      return false;
    } else {
      var filename = document.getElementById("fname").value;
      $("#fname_error").hide();
      return false;
    }
  });

  $("#contact_form").submit(function(e) {
    e.preventDefault();
    var filename = document.forms["contact_form"]["lname"].value;
    if (filename == null || filename == "") {
      $("#lname_error").show();
      return false;
    } else {
      var filename = document.getElementById("lname").value;
      $("#lname_error").hide();
      return false;
    }
  });

$("#contact_form").submit(function(){
    alert("Submitted");
});
});
