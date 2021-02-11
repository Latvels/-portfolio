//если передали строку - положим ее в local storage
//если передаем объект JSON.stringify(value) (приводится к строке) 
//здесь для того, чтобы праивльно записать объект
//вызываем Set, открываем скобки и кладем туда name и value

export function set(name, value) {
  window.localStorage.setItem(name, JSON.stringify(value));
}

export function get(name, subst = null) {
  return JSON.parse(window.localStorage.getItem(name) || subst);
}

export function del(name) {
  localStorage.removeItem(name);
}