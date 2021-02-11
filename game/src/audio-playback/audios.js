const gameAudio = new Audio('audio/game.mp3');
const gameAudioWin = new Audio('audio/win.mp3');

export function arrowPlayAudio() {
  const sound = new Audio();
  sound.src = 'audio/arrow.mp3';
  return sound.play();
}

export function swordPlayAudio() {
  const sound = new Audio();
  sound.src = 'audio/sword.mp3';
  sound.volume = 0.2;
  return sound.play();
}

export function deathOrcPlayAudio() {
  const sound = new Audio();
  sound.src = 'audio/death-orc.mp3';
  sound.volume = 0.1;
  return sound.play();
}

export function gameOverPlayAudio() {
  const sound = new Audio();
  sound.src = 'audio/game-over.mp3';
  sound.volume = 0.4;
  return sound.play();
}
export function gameWinPlayAudio(state) {
  gameAudioWin.volume = 0.1;
  if (state == true) {
    gameAudioWin.play();
  } else {
    gameAudioWin.pause();
  }
}

export function gamePlayAudio(state) {
  gameAudio.volume = 0.1;
  gameAudio.loop = true;
  if (state == true) {
    gameAudio.play();
  } else {
    gameAudio.pause();
  }
}
