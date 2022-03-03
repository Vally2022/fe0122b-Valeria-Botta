$(document).ready(function () {

    $("#btnBarra").click(function (width) {
      
        $("#progressBar").animate({
            width: "100%"
        },2000)       
    })
    $("#reset").click(function () {
        $("#progressBar").animate({
            width: ""
        },2000)
              
    })

})

