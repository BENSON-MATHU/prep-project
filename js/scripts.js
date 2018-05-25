$(document).ready(function(){
  $("#modal-launcher").click(function(){
    $("#myModal").show();
    $(".main-page").fadeOut();
  });
  $("#form-submit").click(function(){
    $("#main-content").show();
    $("#myModal").fadeOut();
    firstName = $("#first-name-input").val();
    secondName =  $("#second-name-input").val();
     emailData = $("#email-input").val();
   $("#name-print").text(firstName  +" "+ secondName );
   $("#email-display").text(emailData);
   $("form").reset();
   });
   $("#name-print").click(function(){
     $("#display-email").toggle()

   });

});

 var firstName, secondName , emailData;
 //
 // function details (fName,sName,emailInfo){
 //    var userInfo = {};
 //    userInfo.fName = fName;
 //    userInfo.sname = sName;
 //    userInfo.emailInfo = emailInfo;
 // }
 // var dispalyDetails = details (firstName,secondName ,emailData);
