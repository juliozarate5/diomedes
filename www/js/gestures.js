var emisora = document.getElementById('emisora');
var app = {
    inicio: function () {
        this.iniciaBotones();
        this.iniciaFastClick();
    },
    iniciaFastClick: function () {
        FastClick.attach(document.body);
    },
    iniciaBotones: function () {
        var botonPlay = document.querySelector('#play');
        var botonPause = document.querySelector('#pausa');
        var botonVolMas = document.querySelector('#volumemas');
        var botonVolMenos = document.querySelector('#volumemenos');

        botonPlay.addEventListener('click', app.play, false);
        botonPause.addEventListener('click', app.pausa, false);
        botonVolMas.addEventListener('click', app.subeVol, false);
        botonVolMenos.addEventListener('click', app.bajaVol, false);
    },
    iniciaHammer: function () {

    },
    play: function () {
        emisora.pause();
        if (emisora.paused) {
            emisora.play();
        }
    },
    pausa: function () {
        if (emisora.played) {
            emisora.pause();
        }
    },
    subevol: function () {
        emisora.volume += 0.1;
    },
    bajaVol: function () {
        emisora.volume -= 0.1;
    },
};

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        app.inicio();
    }, false);
}

