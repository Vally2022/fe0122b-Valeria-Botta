$(document).ready(function(){
    $("h2").on("click",function(){
        $(this).next().toggle('slow');
        $(this).toggleClass("meno");
    })
})