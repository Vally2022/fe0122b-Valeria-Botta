
$(document).ready(function () {
    const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
        "piangere", "ridere", "amare", "amare1", "spavento", "shock"];


    for (var i = 0; i < 16; i++) {
        let random = Math.floor(Math.random() * mieImg.length);
        let immagineRandom = mieImg.splice(random, 1);


        $('<div class="images" id="emoji"><img id="emoji'+i+'" src="img/' + immagineRandom + '.png" width="130" height="130"></div>').appendTo("#memory");
    }

    let immaginiCliccate = []

    $(".images").click(function () {
        let clicks = $("#clicks").text();
        clicks++
        $("#clicks").text(clicks)
        /*if (clicks >= 20){
            alert("non ci siamo!")
        }*/

        if (immaginiCliccate.length < 2) {

            $(this).children().show()
            $(this).addClass("rotea")

            let imgId = $(this).children().attr("id");
            let imgSrc = $(this).children().attr("src");
            let infoImmagine = {
                id: imgId,
                src: imgSrc

            }

            immaginiCliccate.push(infoImmagine)


            if (immaginiCliccate.length == 2) {
                $(this).addClass("rotea")
                if (immaginiCliccate[0].src == immaginiCliccate[1].src) {
                    $('#'+immaginiCliccate[0].id).css('cursor', 'block')
                    $('#'+immaginiCliccate[1].id).css('cursor', 'block')
                    immaginiCliccate = [];
                } else {
                    setTimeout(function () {
                        $('#'+immaginiCliccate[0].id).hide();
                        $('#'+immaginiCliccate[1].id).hide();
                        immaginiCliccate = [];
                    }, 700)
                }
            }


        }
        console.log(immaginiCliccate)
    })




})