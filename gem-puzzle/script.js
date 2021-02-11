/*eslint no-trailing-spaces: ["error", { "ignoreComments": true }]*/
/*eslint linebreak-style: ["error", "unix"]*/

//кнопка новой игры
const btnPlay = document.createElement('button');
  btnPlay.classList.add('btnPlay');
  btnPlay.innerHTML = `Новая игра`;
  document.body.append(btnPlay);

  btnPlay.addEventListener('click', () => {
    document.location.reload();
  })

  // таймер
  const stopwatch = document.createElement('div');
  stopwatch.classList.add('text');
  stopwatch.innerHTML = `Таймер: 00:00`;
  document.body.append(stopwatch);

  // количество ходов
  const click = document.createElement('div');
  click.className = "click";
  click.classList.add('text');
  let numberOfMoves = 0;
  click.innerHTML = `Текущее количество ходов: 0`;
  document.body.append(click);

  // таймер
  let time = setInterval('timer()', 1000);
  let minutes = 0;
  let second = 0;
  function timer() {
    second++;
    if (second === 60) {
      minutes++;
      second = 0;
    }
    // добавление нуля
    function addZero(n) {
      return (parseInt(n, 10) < 10 ? "0" : "") + n;
    }
    stopwatch.innerHTML = `Таймер: ${addZero(minutes)}:${addZero(second)}`;
  }

  // звук передвижения
  const sound = document.createElement('div');
  sound.classList.add('sound', 'hidden');

  function stepSound() {
    const sound = new Audio();
    sound.src = 'shag.mp3'
    sound.autoplay = true;
  }

//  создание отображения на экран
document.body.onload = addElement;

function addElement() {
  // Создаем новый элемент div
  // и добавляем в него немного контента
  let gem = document.createElement("main");
  gem.className = ('field');

  // Добавляем только что созданый элемент в дерево DOM
  field = document.getElementById("gem");
  document.body.insertBefore(gem, field);

  // создание пустой ячейки
  const empty = {
    value: 0,
    top: 0,
    left: 0
  }

  // массив для сохранения координат плашек
  const cells = [];
  cells.push(empty);

  const cellSize = 100;
  //получает номер ячейки и меняет местами с пустой (по координатам)
  function move(index) {
    // ходы
    numberOfMoves = numberOfMoves + 1;
    click.innerHTML = `Текущее количество ходов: ${numberOfMoves}`;


    const cell = cells[index];
    const leftDiff = Math.abs(empty.left - cell.left);
    const topDiff = Math.abs(empty.top - cell.top);


    if (leftDiff + topDiff > 1) {
      return;
    }

    cell.element.style.left = `${empty.left * cellSize}px`;
    cell.element.style.top = `${empty.top * cellSize}px`;

    const emptyLeft = empty.left;
    const emptyTop = empty.top;

    empty.left = cell.left;
    empty.top = cell.top;

    cell.left = emptyLeft;
    cell.top = emptyTop;

    const isFinised = cells.every(cell => {
      return cell.value === cell.top * 4 + cell.left;
    });
    // добавление нуля
    function addZero(n) {
      return (parseInt(n, 10) < 10 ? "0" : "") + n;
    }
    // поздравление 
    if (isFinised) {
      alert(`Поздровляю! Вы решили головоломку за ${addZero(minutes)} минут и ${addZero(second)} секунд было затрачено ходов: ${numberOfMoves}`);
    }

  }

  // рандомайзер
  const numbers = [...Array(15).keys()]
    .sort(() => Math.random() - 0.5);

  //создаём вывод плашек для игры
  for (let i = 1; i <= 15; i++) {
    const cell = document.createElement('div');
    const value = numbers[i - 1] + 1;
    cell.className = 'cell';
    cell.innerHTML = value;

    // расстановка цифр по ячейкам (кординаты ячеек)
    const left = i % 4;
    const top = (i - left) / 4;

    // сохранение данных о плашках
    cells.push({
      value: value,
      left: left,
      top: top,
      element: cell
    });

    // расстановка плашек
    cell.style.left = `${left * cellSize}px`;
    cell.style.top = `${top * cellSize}px`;

    // связываем cell к родителю
    gem.append(cell);

    // обработчик событий для перемещение плашек
    cell.addEventListener('click', () => {
      stepSound();
      move(i);
    });
  };
}
