$(document).ready(function () {
    $("#invia").click(function () {
        $("#form").submit().text('THANK YOU').css("color", "red");

    });
    $("#reset").click(function () {
        $("#nome,#email,email2").submit().val(" ");
    });


});