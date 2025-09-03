const card = document.querySelector('.rect-card');
const flipBtn = document.getElementById('flipBtn');
const flipBackBtn = document.getElementById('flipBackBtn');

flipBtn.addEventListener('click', () => {
  card.classList.add('flipped');
});

flipBackBtn.addEventListener('click', () => {
  card.classList.remove('flipped');
});
