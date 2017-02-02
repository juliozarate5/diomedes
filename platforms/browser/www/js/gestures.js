var emisora = document.getElementById('emisora');
var app = {
    inicio: function () {
        this.iniciaBotones();
        this.iniciaFastClick();
        this.iniciaHammer();
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
        var botonPlay = document.getElementById('play');
        var hammertime = new Hammer(botonPlay);

        hammertime.get('pinch').set({enable: true});
        hammertime.get('rotate').set({enable: true});

        botonPlay.addEventListener('webkitAnimationEnd', function (e) {
            botonPlay.className = '';
        });

        hammertime.on('tap', function (eve) {
            botonPlay.className = 'press';
        });
        
         hammertime.on('doubletap', function (ev) {
         botonPlay.className = 'press';
         });
         
         hammertime.on('press', function (ev) {
         botonPlay.className = 'press';
         });
         
         /*hammertime.on('swipe', function (ev) {
         var clase = undefined;
         direccion = ev.direction;
         
         if (direccion == 4)
         clase = 'swipe-derecha';
         if (direccion == 2)
         clase = 'swipe-izquierda';
         
         botonPlay.className = clase;
         });
         
         
         hammertime.on('rotate', function (ev) {
         var umbral = 25;
         if (ev.distance > umbral)
         zona.className = 'rotate';
         });*/
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

