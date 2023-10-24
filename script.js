
const sonidos = ['Snow(hey oh)', 'HellsBells', 'GunsAndRoses'];
let cancionIndex = 0; 

const audio = new Audio();

const listaCanciones = document.getElementById('lista-canciones');
const cancionActual = document.getElementById('cancion');
const playPauseButton = document.getElementById('pausa');
const anteriorButton = document.getElementById('anterior');
const siguienteButton = document.getElementById('siguiente');
const aleatorioButton = document.getElementById('aleatorio');

function reproducirCancion(index) {
    cancionActual.innerText = sonidos[index];
    
    const imagenReproducir = document.getElementById('imagen-reproducir');
    imagenReproducir.src = `./imagenes/${sonidos[index].replace('','')}.png`;
    
    audio.src = `canciones/${sonidos[index]}.mp3`;
    audio.play();
}

playPauseButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playPauseButton.src = './imagenes/pausa.png';
    } else {
        audio.pause();
        playPauseButton.src = './imagenes/play.png';
    }
});

anteriorButton.addEventListener('click', function() {
    cancionIndex = (cancionIndex - 1 + sonidos.length) % sonidos.length;
    audio.play();
        playPauseButton.src = './imagenes/pausa.png';
    reproducirCancion(cancionIndex);

});

siguienteButton.addEventListener('click', function() {
    cancionIndex = (cancionIndex + 1) % sonidos.length;
    audio.play();
        playPauseButton.src = './imagenes/pausa.png';
    reproducirCancion(cancionIndex);

});

aleatorioButton.addEventListener('click', function() {
    cancionIndex = Math.floor(Math.random() * sonidos.length);
    audio.play();
        playPauseButton.src = './imagenes/pausa.png';
    reproducirCancion(cancionIndex);
});

reproducirCancion(cancionIndex);
