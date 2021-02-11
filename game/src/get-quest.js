export let allDeathOrks = 0;
export let showQuestInterface = false;
export let showPassageDungeon = false;

export function updateQuest() {
  allDeathOrks = 0;
  showQuestInterface = false;
  showPassageDungeon = false;
}

export function getQuest() {
  showQuestInterface = true;
}
export function questСompleted() {
  showQuestInterface = false;
  showPassageDungeon = true;
}

export function deathOrcs() {
  if (showQuestInterface) {
    allDeathOrks++;
  }
  if (allDeathOrks == 10) {
    questСompleted();
  }
}
