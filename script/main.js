//                ПЕРВАЯ ЧАСТЬ - КЛИКЕР, ПРОВЕРКА НА ЧЕЛОВЕКА

//ИГРА КЛИКЕР

let clicks = 2; //Начальные клики

const TIMEOUT = 5000; // 5 секунд таймер

const display = document.querySelector("#display"); //отображение инфо результата
const button = document.querySelector("#button"); //кнопка кликер
const counter = document.querySelector("#counter"); // счетчик кликов
const reset = document.querySelector("#reset"); //кнопка перезапуска

button.onclick = start;
reset.onclick = restart;

let test_four = document.getElementById('fourthTest')

function start() {
  const startTime = Date.now(); //отсчет времени от нажатия на кнопку

  display.textContent = formatTime(TIMEOUT);

  button.onclick = () => (counter.textContent = clicks++); //счетчик кликов

  const interval = setInterval(() => {
    const delta = Date.now() - startTime; //дельта = текущий момент времени - момент нажатия на кнопку
    display.textContent = formatTime(TIMEOUT - delta); //отображаемое время = 5 секунд - время, прошедшее с момента нажатия на кнопку
  }, 100);

  const timeout = setTimeout(() => {
    button.onclick = null;
    if (clicks - 1 >= 25) {
      display.textContent = `Проверка пройдена`;

      //                ПЕРЕХОДИМ ВО ВТОРУЮ ЧАСТЬ

      const div_secondTest = document.getElementById("secondTest");
      div_secondTest.style.display = "inline-block"; 

//                        ШАХМАТЫ

var counterCheckmateMessages = 0;


function showStupidMessage() {
 let messages = ["Ты не умеешь играть в шахматы?", "Погугли как ходят фигуры...", "Теперь погугли цель игры в шахматы", "Просто смотришь уведомления?", "Последняя попытка", "Ха! Не последняя", "Ты почти исчерпал количество возможных ходов", "Может хватит дурачиться?!", "Делай что хочешь...", "Залезать в код для прочтения всех уведомлений не честно"];
 alert(messages[counterCheckmateMessages]); 
 counterCheckmateMessages++;
};

function checkFigures() { // Опишем все фигуры, доступные пользователю
 const div6 = document.getElementById("box6");
 const div13 = document.getElementById("box13");
 const div21 = document.getElementById("box21");
 const div26 = document.getElementById("box26");
 const div28 = document.getElementById("box28");

 // Зафиксируем начальные положения триггеров
 let firstClick = false;
 let correctClick = true;

 div13.addEventListener("click", () => {
 firstClick = true;
 div13.style.background = "white";
 });

 div21.addEventListener("click", () => {
  firstClick = false;
  alert('Почитай как играть в шахматы');
  div13.style.background = "green";
  div21.style.background = "green";
  div26.style.background = "blue";
  div28.style.background = "blue";
  event.stopImmediatePropagation();
  });

 div26.addEventListener("click", () => {
  firstClick = false;
  alert('Это не очень умно');
  div13.style.background = "green";
  div21.style.background = "green";
  div26.style.background = "blue";
  div28.style.background = "blue";
  event.stopImmediatePropagation();
  });

 div28.addEventListener("click", () => {
  firstClick = false;
  alert('Не торопись');
  div13.style.background = "green";
  div21.style.background = "green";
  div26.style.background = "blue";
  div28.style.background = "blue";
  event.stopImmediatePropagation();
  });

  div6.addEventListener("click", () => {
    correctClick = false;
    if (firstClick == true && correctClick == false) {
      alert("You clicked the correct div!");
    
      

      // ВХОД В ТРЕТЬЮ ЧАСТЬ
const div_thirdTest = document.getElementById("thirdTest");
div_thirdTest.style.display = "inline-block";
    
// СУДОКУ
const sudokuMap = document.querySelector(".sudoku");
for (let j = 0; j < 81; j++) {
  if (j % 9 === 0) {
    const row = document.createElement("div");
    row.classList.add("row");
    sudokuMap.appendChild(row);
  }
  const cell = document.createElement("div");
  cell.classList.add("cell_sudoku");
  cell.setAttribute("id", "cell" + j);
  sudokuMap.querySelector(".row:last-child").appendChild(cell);
  if ( j % 2 === 0) {
    cell.style.backgroundColor = "grey";
  }
  if ( (j + 1) % 3 === 0) {
    cell.style.borderBottomStyle = "solid";
  }
  if ( j > 17 && j < 27) {
    cell.style.borderRightStyle = "solid";
  }
  if ( j > 44 && j < 54) {
    cell.style.borderRightStyle = "solid";
  }
  if ( j === 8  || j === 17  || j === 26  || j === 35  || j === 44  || j === 53  || j === 62  || j === 71  || j === 80 ) {
    cell.style.borderBottomStyle = "none";
  }
  let numbers = [2,6,5,7,8,4,3,1,9,7,9,1,2,'',5,4,6,8,3,4,8,6,9,1,2,5,7,8,2,3,1,6,9,5,7,4,6,'',9,5,4,7,8,'',3,4,5,7,3,2,8,1,9,6,5,3,2,8,7,6,9,4,1,9,8,6,4,'',2,7,3,5,1,7,4,9,5,3,6,8,2];
  cell.innerText = numbers[j];
}

  // 1 answer == 3;
  // 2 answer == 1;
  // 3 answer == 2;
  // 4 answer == 1;


let firstCell = document.createElement('input'); // Создаем инпуты 
firstCell.setAttribute("type", "text"); // Инпут текстовый. При создании инпута числового будут лишние элементы интерфейса
firstCell.setAttribute("value", "0"); // Начальное значение - 0
firstCell.classList.add('inputSudoku'); // Для корректировки размера инпутов добавляем им класс


let secondCell = document.createElement('input');
secondCell.setAttribute("type", "text");
secondCell.setAttribute("value", "0");
secondCell.classList.add('inputSudoku');

let thirdCell = document.createElement('input');
thirdCell.setAttribute("type", "text");
thirdCell.setAttribute("value", "0");
thirdCell.classList.add('inputSudoku');


let fourthCell = document.createElement('input');
fourthCell.setAttribute("type", "text");
fourthCell.setAttribute("value", "0");
fourthCell.classList.add('inputSudoku');


let firstInput = document.querySelector('#cell13'); // ищем нужную ячейку и объявляем ее именем firstInput
let secondInput = document.querySelector('#cell37');
let thirdInput = document.querySelector('#cell43');
let fourthInput = document.querySelector('#cell67');

firstInput.appendChild(firstCell); // Нужная ячейка принимает созданный ранее инпут
secondInput.appendChild(secondCell);
thirdInput.appendChild(thirdCell);
fourthInput.appendChild(fourthCell);


// вешаем на каждый инпут слушателя. Если повесить слушателя не на каждый инпут, то при внесении последнего значения в инпут без слушателя, триггер не сработает
firstCell.addEventListener('input', function() {
  if (fourthCell.value.includes('1') && firstCell.value.includes('3') && secondCell.value.includes('1') && thirdCell.value.includes('2')) {
    alert('OOOOOYYYEEEEAH');
    
    test_four.style.display = ('inline-block');
  }
});

secondCell.addEventListener('input', function() {
  if (fourthCell.value.includes('1') && firstCell.value.includes('3') && secondCell.value.includes('1') && thirdCell.value.includes('2')) {
    alert('OOOOOYYYEEEEAH');
    
    test_four.style.display = ('inline-block');
  }
});

thirdCell.addEventListener('input', function() {
  if (fourthCell.value.includes('1') && firstCell.value.includes('3') && secondCell.value.includes('1') && thirdCell.value.includes('2')) {
    alert('OOOOOYYYEEEEAH');
    
    test_four.style.display = ('inline-block');
  }
});

fourthCell.addEventListener('input', function() {
  if (fourthCell.value.includes('1') && firstCell.value.includes('3') && secondCell.value.includes('1') && thirdCell.value.includes('2')) {
    alert('OOOOOYYYEEEEAH');
    
    test_four.style.display = ('inline-block');
  }
});

}});


}



// ОПИСАНИЕ УСЛОВИЙ СОЗДАНИЯ ДОСКИ

const container = document.querySelector(".container"); 
for (let i = 0; i < 40; i++) {
  if (i % 5 === 0) {  
    const line = document.createElement("div");
    line.classList.add("line");
    container.appendChild(line);
  }
  const div = document.createElement("div");
  div.classList.add("box");
  div.setAttribute("id", "box" + i); 
  container.querySelector(".line:last-child").appendChild(div);
  div.innerText = `${i}`; 
  if(i !== 6 && i !== 13 && i !== 21 && i !== 26 && i !== 28) {
    div.addEventListener("click", showStupidMessage);
  }
  if( i == 6 || i == 13 || i == 21 || i == 26 || i == 28) {
    div.addEventListener("click", checkFigures)
    }
  if (i % 2 === 0) {
    div.style.backgroundColor = "blue";
  } else {
    div.style.backgroundColor = "green";
  }
}  // КОНЕЦ ОПИСАНИЯ УСЛОВИЙ СОЗДАНИЯ ДИВ

      

      //                        ПРОИГРЫШ В ПЕРВОЙ ЧАСТИ
    } else {
      display.textContent = `Недостаточно`;
    }

    clearInterval(interval);

    clearTimeout(timeout);
  }, TIMEOUT);
}

function formatTime(ms) {
  //функция перерасчета 5000мс в 5.00 сек
  return Number.parseFloat(ms / 1000).toFixed(2);
}

function restart() {
  //кнопка рестарта
  reset.onclick = () => location.reload();
  return false; //БЕЗ перезагрузки страницы
}


// THE GAME 

// Обозначаем все кнопки
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btn10 = document.getElementById("10");
const btn11 = document.getElementById("11");
const btn12 = document.getElementById("12");
const btn13 = document.getElementById("13");
const btn14 = document.getElementById("14");
const btn15 = document.getElementById("15");
const btn16 = document.getElementById("16");

let btn1Color = 'red';
let btn2Color = 'red';
let btn3Color = 'red';
let btn4Color = 'red';



var lvl2 = document.querySelector('.secondLevel');
lvl2.style.display = 'none';

if (btn1.style.backgroundColor === 'green' && btn2.style.backgroundColor === 'green' && btn3.style.backgroundColor === 'green' && btn4.style.backgroundColor === 'green') 
{
   lvl2.style.display = 'block';
}

var lvl3 = document.querySelector('.thirdLevel');
lvl3.style.display = 'none';
var lvl4 = document.querySelector('.fourthLevel');
lvl4.style.display = 'none';



btn1.addEventListener('click', () => {
  if (btn1Color === 'red') {
    btn2Color = 'green';
  } else {
    btn2Color = 'red';
  }
  if (btn3Color === 'red') {
    btn4Color = 'green';
  } else {
    btn4Color = 'red';
  }
  btn2.style.backgroundColor = btn2Color;
  btn4.style.backgroundColor = btn4Color;
});

btn3.addEventListener('click', () => {
  if (btn3Color === 'red') {
    btn3Color = 'green';
  } else {
    btn3Color = 'red';
  }
  if (btn1Color === 'red') {
    btn1Color = 'green';
  } else {
    btn1Color = 'red';
  }
  btn1.style.backgroundColor = btn1Color;
  btn3.style.backgroundColor = btn3Color;
});

 
