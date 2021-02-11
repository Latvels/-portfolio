import { getQuest, updateQuest } from './get-quest';

const TAKE_QUEST = document.getElementById('take_quest');
const ADANDON_THE_QUEST = document.getElementById('abandon_the_quest');
export let runOnceQuest = false;

TAKE_QUEST.onclick = function () {
  $('#staticBackdrop').modal('hide');
  runOnceQuest = true;
  getQuest();
};

ADANDON_THE_QUEST.onclick = function () {
  $('#staticBackdrop').modal('hide');

  runOnceQuest = false;
};

export function showModalDialog() {
  $('#staticBackdrop').modal('show');
  $('#staticBackdrop').modal('handleUpdate');
}

export function updateModalDialog() {
  $('#staticBackdrop').modal('handleUpdate');
}
