const robot = document.getElementById('robot');
const chestLeft = document.getElementById('chest-door-left');
const chestRight = document.getElementById('chest-door-right');
const screenText = document.getElementById('screen-text');
const robotSound = document.getElementById('robot-sound');
const clickSound = document.getElementById('click-sound');

let clickCount = 0;

robot.addEventListener('click', () => {
  clickSound.play();
  clickCount++;
  if(clickCount === 3){
    chestLeft.setAttribute('x', '30');
    chestRight.setAttribute('x', '120');
    screenText.setAttribute('opacity','1');
    robotSound.play();
  }
});