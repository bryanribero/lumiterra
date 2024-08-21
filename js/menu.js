const videos = document.querySelectorAll('.video1');

videos.forEach(video => {
    video.addEventListener('loadedmetadata', function() {
        video.currentTime = 1;  // Configura el video para que empiece en el primer segundo
        video.play();  // Reproduce el video automáticamente
    });

    video.loop = true; // Configura el video para que se reproduzca en bucle
});

