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
            document.getElementById('emisora').play();
    },
    pausa: function () {     
            document.getElementById('emisora').pause(); 
    },
    subeVol: function () {
        document.getElementById('emisora').volume += 0.1;
    },
    bajaVol: function () {
        document.getElementById('emisora').volume -= 0.1;
    }
};

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        app.inicio();
    }, false);
}


