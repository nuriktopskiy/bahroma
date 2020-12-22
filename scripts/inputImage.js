function big__img(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#big__img').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$("#big__input").change(function(){
    big__img(this);
});


function small__img1(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#small__img1').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$("#inp1").change(function(){
    small__img1(this);
});


function small__img2(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#small__img2').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$("#inp2").change(function(){
    small__img2(this);
});


function small__img3(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#small__img3').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$("#inp3").change(function(){
    small__img3(this);
});


function small__img4(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#small__img4').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$("#inp4").change(function(){
    small__img4(this);
});