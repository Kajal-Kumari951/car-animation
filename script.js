var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop = true;
window.addEventListener('click', function () {
    audio.play();

}, { once: true });

