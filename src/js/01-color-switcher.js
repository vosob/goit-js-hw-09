function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
let timerId = null;

refs.startBtn.addEventListener('click', onClickStartBtn);
refs.stopBtn.addEventListener('click', onClickStopBtn);

function onClickStartBtn() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onClickStopBtn() {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  clearInterval(timerId);
}
