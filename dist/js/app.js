const hamburger = document.querySelector(".hamburger");
const options = document.querySelector(".options");
const options__li = document.querySelectorAll(".options__li");
const acceso1 = document.querySelector(".jquery--about");
const acceso2 = document.querySelector(".jquery--online");
const acceso3 = document.querySelector(".jquery--testimonials");
const acceso4 = document.querySelector(".jquery--blog");
const acceso5 = document.querySelector(".jquery--contact");

hamburger.addEventListener("click", () => {
    options.classList.toggle("open");
    options__li.forEach(link => {
        link.classList.toggle("fade");
    });

    acceso1.onclick = function() {hecho()}
    acceso2.onclick = function() {hecho()}
    acceso3.onclick = function() {hecho()}
    acceso4.onclick = function() {hecho()}
    acceso5.onclick = function() {hecho()}
});

function hecho() {
    options.classList.toggle("open");
    options__li.forEach(link => {
        link.classList.toggle("fade");
    });
}

/*console.log('Look how it works');*/

const src = document.documentURI;
/*console.log(src);*/
if(src === 'http://localhost:3000/mens.html' || src === 'https://ferdominguez.com/mens.html'){
    document.getElementById("header").style.backgroundImage = "url('../img/Portada.jpg')";
}

function currency(valor){
    var y = document.getElementById(valor);
    console.log(y.value);
    console.log(y.id);
    var string = y.id;
    var num = 0;

    switch(string){
        case 'currency1':
            document.getElementById("money1").innerHTML = y.value;
            break;
        case 'currency2':
            document.getElementById("money2").innerHTML = y.value;
            break;
        case 'currency3':
            document.getElementById("money3").innerHTML = y.value;
            break;
        case 'currency4':
            document.getElementById("money4").innerHTML = y.value;
            break;
        case 'currency5':
            document.getElementById("money5").innerHTML = y.value;
            num = y.value/7.6;
            document.getElementById("money52").innerHTML = num.toFixed(2);
            break;
        case 'currency6':
            document.getElementById("money6").innerHTML = y.value;
            num = y.value/5;
            document.getElementById("money62").innerHTML = num.toFixed(2);
            break;
        case 'currency7':
            document.getElementById("money7").innerHTML = y.value;
            num = y.value/5;
            document.getElementById("money72").innerHTML = num.toFixed(2);
            break;
        case 'currency8':
            document.getElementById("money8").innerHTML = y.value;
            break;
        case 'currency9':
            document.getElementById("money91").innerHTML = y.value;
            document.getElementById("money92").innerHTML = y.value;
            break;
        case 'currency10':
            document.getElementById("money10").innerHTML = y.value;
            break;                      
    }
}

new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity: 0.2,
    image1: '../img/bolsas.png',
    image2: '../img/creacion_outfits_small.png',
    /*speedIn: 2,
    speedOut: 5,*/
    displacementImage: '../img/effect.png'
    /*displacementImage: './fluid.jpg',*/
    /*displacementImage: '../img/stripe1.png'*/
});
