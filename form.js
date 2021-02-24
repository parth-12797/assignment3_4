
//---------------------------jquery--------------------------------------------

$(document).ready(function(){
  $("#email").keyup(function(){
    var verify_email = $("#verify_email").val();
        var email = $("#email").val();
        if (email != verify_email){
          $("#verify_email").val('');
      $("#match_email").html("");
        }
    var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
     var emailaddressVal = $("#email").val();
  if(!regex.test(emailaddressVal)) {
  	//alert("parth");
    $("#check_email").html("enter proper email id");
  }else{

$("#check_email").html("");
     
     }
  });

$("#verify_email").keyup(function(){
        var verify_email = $("#verify_email").val();
        var email = $("#email").val();
        if (email != verify_email)
            {
              $("#match_email").css({
              "color": "red",
            });
            $("#match_email").html("email id is not matching!");
            }
        else
        {
            $("#match_email").html("emial id verified.");
            $("#match_email").css({
              "color": "green",
            });
            

        }

  });



  $("#phone").keyup(function(){
      var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      var phoneVal = $("#phone").val();
  if(!phoneno.test(phoneVal)) {
    //alert("parth");
    $("#check_phone").html("enter valid phone number");
  }else{

$("#check_phone").html("");
     
     }
  });


   });


//---------------------------javascript--------------------------------------------

function check_all()
{
email=document.getElementById("email").value;
verify_email=document.getElementById("verify_email").value;
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var phoneVal = document.getElementById("phone").value;
var f_name=document.getElementById("f_name").value;
var l_name=document.getElementById("l_name").value;
var email=document.getElementById("email").value;
var verify_email=document.getElementById("verify_email").value;
var from=document.getElementById("from").value;
var to=document.getElementById("to").value;
var travel_date=document.getElementById("travel_date").value;
var medical_problem=document.getElementById("medical").value;

//alert(medical_problem)
if(!(email==verify_email && phoneno.test(phoneVal)))
{
  alert("check all data is entered properly");
  // window.history.back();
  return false;

  }
  else if(email,phoneno,f_name,l_name,email,verify_email,from,to,travel_date=="" ||  medical_problem=="ddd")
  {
alert("check all data is filled");
  // window.history.back();
  return false;

  }
  alert("form submitted successfully");
  return true;}

  

