const landmarks = document.querySelectorAll('.landmark');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupText = document.getElementById('popup-text');
const closeBtn = document.getElementById('close');

landmarks.forEach(landmark => {
  landmark.addEventListener('click', () => {
    const name = landmark.dataset.name;
    const info = landmark.dataset.info;
    popupTitle.textContent = name;
    popupText.textContent = info;
    popup.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});