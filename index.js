let $start = document.querySelector('#start');
let $game = document.querySelector('#game');
let $time = document.querySelector('#time');

let score = 0 //для хранения подсчета кливов по квадрату
let isGameStarted = false //переменая фиксирующая начало и оконцание игры

$start.addEventListener('click', startGame); //добавляем действие на клик по кнопке "Начать"
$game.addEventListener('click', handleBoxClick) //добавляем действие на клик в div(игровое поле)

function startGame() { //функция запуска игры
    isGameStarted = true
    $start.classList.add('hide'); //спрятал кнопку "Начать", добавляя класс hide
    $game.style.background = '#fff'; //устанавливил игровому полю белый цвет

    let interval = setInterval(function() { //setInterval - функция js создает интервал, принимающая первым параметров функцию,
                                                    // а вторым временной интервал повторения
        let time = parseFloat($time.textContent) //распарсил строковое значение числа в числовое

        if (time <= 0) {
            clearInterval(interval) //clearInterval - функция js останавливающая интервал
            endGame()
        } else {
            $time.textContent = (time - 0.1).toFixed(1) //toFixed - функция указывающая
                                                                    // количество символов после запятой у числа
        }
    }, 100)

    renderBox() //генерируем квадрат
}

function endGame() { //фукция остановки игры
    isGameStarted = false
}

function handleBoxClick(event) { //функция отслеживания кликов по div(квадрат)
    if(!isGameStarted) { //если игра остановлена, не возможен клик по квадрату
        return
    }
    if (event.target.dataset.box) {//если в обьекте dataset присутствует ключ box,
                                    // значит клик произошел по div(квадрат)
        renderBox() //генерируем квадрат
        score++
    }
}

function renderBox() { //функция отрисовки квадратов в игровом поле
    $game.innerHTML = '' //зачищаю div(игровое поле) от предыдущего div(квадрат)
    let box = document.createElement('div') //создал элемент div(квадрат)
    let boxSize = getRandom(30, 100)
    let gameSize = $game.getBoundingClientRect()//определяем размеры элемента div(игровое поле),
                                                // с помощью функции getBoundingClientRect
    let maxTop = gameSize.height - boxSize //максимальное отклонение по вертикали от начала элемента div(игровое поле)
    let maxLeft = gameSize.width - boxSize //максимальное отклонение по горизонтали от начала элемента div(игровое поле)

    box.style.height = box.style.width = boxSize + 'px' //задаю размеры div(квадрат)
    box.style.position = 'absolute' //зал обсолюдное позиционирование div(квадрат),
                                    // относительно родительского div(игровое поле),
                                    // чтоб квалрад генерировался внутри поля
    box.style.backgroundColor = backgroundColor() //задал цвет div(квадрат), будет переделано на динамическую генерацию
    box.style.top = getRandom(0, maxTop) + 'px' //отодвигает div(квадрат) от верхнего края div(игровое поле)
    box.style.left = getRandom(0, maxLeft) + 'px' //отодвигает div(квадрат) от левого края div(игровое поле)
    box.style.cursor = 'pointer' //изменил вид курсора при наведении
    box.setAttribute('data-box', 'true') //создал атрибут у div(квадрат), для отлавливания кликов, название обязательно с префексом
    //date и параметром true

    $game.insertAdjacentElement('afterbegin', box)//помещаем div(квадрат) в div(игровое поле), параметр afterbegin -
    // означает вставить помещаемый элемент сразу после открывающего
    // тега родительского элемента
}

function getRandom(min, max) { //функция вычисления рандомного числа в заданом диапазоне
    return Math.floor(Math.random() * (max - min) + min)
}

function backgroundColor() { // функция возвращает случайный цвет, самостоятельна реализация задания
    let min = Math.ceil(0);
    let max = Math.floor(250);
    let red = Math.floor(Math.random() * (max - min + 1)) + min
    let blue = Math.floor(Math.random() * (max - min + 1)) + min
    let green = Math.floor(Math.random() * (max - min + 1)) + min

    return `rgb(${red}, ${blue}, ${green})`
}