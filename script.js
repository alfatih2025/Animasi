const dino = document.getElementById('dino');

// Tekan spasi = Dino lompat 🦖
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    if (!dino.classList.contains('jump')) {
      dino.classList.add('jump');
      setTimeout(() => dino.classList.remove('jump'), 1000);
    }
  }
});

// Klik Dino = ketawa + warna berubah sebentar
const laugh = new Audio('https://cdn.pixabay.com/download/audio/2023/07/06/audio_ef1e1ce4cc.mp3?filename=funny-laugh-147983.mp3');

dino.addEventListener('click', () => {
  laugh.play();
  dino.querySelector('.body').style.background = '#ffe066';
  setTimeout(() => dino.querySelector('.body').style.background = '#ffde59', 600);
});
