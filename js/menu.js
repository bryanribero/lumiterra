const nav = document.querySelector('.nav');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY >0)
})

const videos = document.querySelectorAll('.video1');

// Itera sobre cada video y añade los eventos correspondientes
videos.forEach(video => {
    video.addEventListener('loadedmetadata', function() {
        video.currentTime = 1;  // Configura el video para que empiece en el primer segundo
        video.pause();  // Pausa el video para que no siga reproduciéndose
    });

    video.addEventListener('mouseover', function() {
        video.play();
    });

    video.addEventListener('mouseout', function() {
        video.pause();
        video.currentTime = 1;  // Regresa al primer segundo del video
    });
});

window.addEventListener('load', function() {
    const video = document.getElementsByClassName('video1');
    video.pause(); // Asegúrate de que el video esté en pausa al cargar
    video.currentTime = 0; // Asegura que el video esté al inicio para mostrar el póster
});