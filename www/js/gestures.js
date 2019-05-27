var emisora = document.getElementById('emisora');

var app = {
    // primera función que se ejecutar al cargar la pagina
    inicio: function () {
        this.iniciaBotones();
        this.iniciaFastClick();
    },
    //inicia librería FastClick
    iniciaFastClick: function () {
        FastClick.attach(document.body);
    },
    
    //inicializa cada botón en el DOM
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
    // función del botón play del reproductor
    play: function () {
            document.getElementById('emisora').play();
    },
    // función del botón pausa del reproductor
    pausa: function () {     
            document.getElementById('emisora').pause(); 
    },
    // función del botón subir volume del reproductor
    subeVol: function () {
        document.getElementById('emisora').volume += 0.1;
    },
    // función del botón bajar volume del reproductor
    bajaVol: function () {
        document.getElementById('emisora').volume -= 0.1;
    }
};

// inicializar al cargar la pagina
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        app.inicio();
    }, false);
}


