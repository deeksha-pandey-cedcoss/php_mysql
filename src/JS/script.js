$(document).ready(function () {
$("#tabledetails").hide();
});
// registration details
$(document).on('click', '#submit', function () {
  
    $name = $("#form3Example1c").val();
    $email = $("#form3Example3c").val();
    $pass = $("#form3Example4c").val();
    $repass = $("#form3Example4cd").val();

    if (!(check_data($name, $email, $pass, $repass))) {
        $.ajax({
            url: "../registration.php",
            datatype: "json",
            data: { 'name': $name, 'email': $email, 'pass': $pass },
            type: "post"
        }).done(function (result) {
            window.location = "../login.php"
        })
    }
});
// login button on registration
$("#submit_value").click(function(){
    window.location = "../login.php"
});
// table for login data
$("#sign").click(function () {
    $("#tabledetails").show();
    $mail = $("#email").val();
    $pw = $("#password").val();
    if ($mail == "" || $pw == "") {
        $("#error").html("Enter Values").css("color", "red").fadeOut(2000);
    }
    else{
        $.ajax({
            url: "../logindata.php",
            type: "POST",
            data: { 'email': $mail, 'pass': $pw },
            datatype: "json"
        }).done(function (result) {
     if(result==""){
        $("#main").hide();
        $("#display").hide();  
        $("#err").html("INVALID USERNAME OR ID");
    }
     else{
       $("#main").hide();
        $("#display").show();  
        $("#err").html(" ");
       console.log(result);
        $("#display").html(result);  
    }     
    });
    }
})
// function to check validations
function check_data($name, $email, $pass, $repass) {
    let flag = false;
    if ($name == "") {
        $("#error_n").html("Enter Values").css("color", "red").fadeOut(2000);
        flag = true;
    }
    else if ($email == "") {
        $("#error_e").html("Enter Values").css("color", "red").fadeOut(2000);
        flag = true;
    }
    else if ($pass == "") {
        $("#error_p").html("Enter values").css("color", "red").fadeOut(2000);
        flag = true;
    }
    else if ($repass == "") {
        $("#error_cp").html("Enter values").css("color", "red").fadeOut(2000);
        flag = true;
    }
    else if ($pass != $repass) {
        $("#error_cp").html("Enter values of password do not match").css("color", "red").fadeOut(2000);
        flag = true;
    }
    return flag;
}