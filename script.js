const image_input = document.querySelector("#input_file");

var canvas = document.querySelector("#canvas");
var context = canvas.getContext('2d');

var img = "";

image_input.addEventListener("change", function (e) {

    img = new Image;
    img.onload = function () {
        context.drawImage(img, 0, 0, img.width, img.height,     // source rectangle
            0, 0, canvas.width, canvas.height);
    }
    img.src = URL.createObjectURL(e.target.files[0]);

})

$(".clip-mask img").click(function (e) {

    if (img == "") {
        alert("Please upload an image")
        return
    }

    var id = $(this).attr("id");
    $("#hidden").attr("src", "assets/" + id + ".png");

    img1 = document.getElementById("hidden");

    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.globalCompositeOperation = 'source-in';
    context.drawImage(img1, 0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0, img.width, img.height,
        0, 0, canvas.width, canvas.height);
    context.globalCompositeOperation = 'source-over';

})

$("#reset").click(function (e) {
    context.drawImage(img, 0, 0, img.width, img.height,
        0, 0, canvas.width, canvas.height);
})