let $start = document.querySelector('#start');
let $game = document.querySelector('#game');

$start.addEventListener('click', startGame); //добавляем действие на клик по кнопке "Начать"

function startGame() { //функция запуска игры
    $start.classList.add('hide'); //прячим кнопку "Начать", добавляя класс hide
    $game.style.background = '#fff'; //устанавливаем игровому полю белый цвет

    renderBox()
}


function renderBox() { //функция отрисовки квадратов в игровом поле

}