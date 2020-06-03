let $start = document.querySelector('#start');
let $game = document.querySelector('#game');

let score = 0 //для хранения подсчета кливов по квадрату

$start.addEventListener('click', startGame); //добавляем действие на клик по кнопке "Начать"
$game.addEventListener('click', handleBoxClick) //добавляем действие на клик в div(игровое поле)

function startGame() { //функция запуска игры
    $start.classList.add('hide'); //спрятал кнопку "Начать", добавляя класс hide
    $game.style.background = '#fff'; //устанавливил игровому полю белый цвет
    renderBox() //генерируем квадрат
}

function handleBoxClick(event) { //функция отслеживания кликов по div(квадрат)
    if (event.target.dataset.box) {//если в обьекте dataset присутствует ключ box,
                                    // значит клик произошел по div(квадрат)
        renderBox() //генерируем квадрат
        score++
    }
}

function renderBox() { //функция отрисовки квадратов в игровом поле
    $game.innerHTML = '' //зачищаю div(игровое поле) от предыдущего div(квадрат)
    let box = document.createElement('div') //создал элемент div(квадрат)

    box.style.height = box.style.width = '50px' //задаю размеры div, будет переделано на динамическую генерацию
    box.style.position = 'absolute' //зал обсолюдное позиционирование div(квадрат),
                                    // относительно родительского div(игровое поле),
                                    // чтоб квалрад генерировался внутри поля
    box.style.backgroundColor = '#000' //задал цвет div(квадрат), будет переделано на динамическую генерацию
    box.style.top = box.style.left = '70px' //отодвинул div(квадрат) от краев div(игровое поле), будет переделано на динамическую генерацию
    box.style.cursor = 'pointer' //изменил вид курсора при наведении
    box.setAttribute('data-box', 'true') //создал атрибут у div(квадрат), для отлавливания кликов, название обязательно с префексом
    //date и параметром true

    $game.insertAdjacentElement('afterbegin', box)//помещаем div(квадрат) в div(игровое поле), параметр afterbegin -
    // означает вставить помещаемый элемент сразу после открывающего
    // тега родительского элемента
}