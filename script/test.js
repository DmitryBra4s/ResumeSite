let test_four = document.getElementById('fourthTest');
test_four.style.display = ('inline-block');

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
let btn5Color = 'red';
let btn6Color = 'red';
let btn7Color = 'red';
let btn8Color = 'red';
let btn9Color = 'red';
let btn10Color = 'red';
let btn11Color = 'red';
let btn12Color = 'red';
let btn13Color = 'red';
let btn14Color = 'red';
let btn15Color = 'red';
let btn16Color = 'red';



const lvl2 = document.querySelector('.secondLevel');
const lvl3 = document.querySelector('.thirdLevel');
const lvl4 = document.querySelector('.fourthLevel');




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
  if (btn1Color === 'green' && btn1Color === 'green' && btn1Color === 'green' && btn1Color === 'green') 
{
  lvl2.style.display = 'block';
}
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
  if (btn1Color === 'green' && btn1Color === 'green' && btn1Color === 'green' && btn1Color === 'green') 
{
  lvl2.style.display = 'block';
}
});




btn5.addEventListener('click', () => {
  if (btn7Color === 'red') {
    btn7Color = 'green';
  } else {
    btn7Color = 'red';
  }
  if (btn5Color === 'red') {
    btn5Color = 'green';
  } else {
    btn5Color = 'red';
  }
  btn7.style.backgroundColor = btn7Color;
  btn5.style.backgroundColor = btn5Color;
  if (btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green') 
{
  lvl3.style.display = 'block';
}
if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green')  
  {
    lvl4.style.display = 'block';
  }
  if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green' && btn13Color === 'green' && btn14Color === 'green' && btn15Color === 'green' && btn16Color === 'green') 
  {
    alert('YOOO');
  }
});

btn6.addEventListener('click', () => {
  if (btn8Color === 'red') {
    btn8Color = 'green';
  } else {
    btn8Color = 'red';
  }
  if (btn5Color === 'red') {
    btn5Color = 'green';
  } else {
    btn5Color = 'red';
  }
  btn8.style.backgroundColor = btn8Color;
  btn5.style.backgroundColor = btn5Color;
  if (btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green') 
  {
    lvl3.style.display = 'block';
  }
  if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green')  
  {
    lvl4.style.display = 'block';
  }
  if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green' && btn13Color === 'green' && btn14Color === 'green' && btn15Color === 'green' && btn16Color === 'green') 
  {
    alert('YOOO');
  }
});

btn7.addEventListener('click', () => {
  if (btn6Color === 'red') {
    btn6Color = 'green';
  } else {
    btn6Color = 'red';
  }
  if (btn7Color === 'red') {
    btn7Color = 'green';
  } else {
    btn7Color = 'red';
  }
  btn7.style.backgroundColor = btn7Color;
  btn6.style.backgroundColor = btn6Color;
  if (btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green') 
  {
    lvl3.style.display = 'block';
  }
  if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green')  
  {
    lvl4.style.display = 'block';
  }
  if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green' && btn13Color === 'green' && btn14Color === 'green' && btn15Color === 'green' && btn16Color === 'green') 
  {
    alert('YOOO');
  }
});

btn8.addEventListener('click', () => {
  if (btn8Color === 'red') {
    btn8Color = 'green';
  } else {
    btn8Color = 'red';
  }
  if (btn6Color === 'red') {
    btn6Color = 'green';
  } else {
    btn6Color = 'red';
  }
  btn8.style.backgroundColor = btn8Color;
  btn6.style.backgroundColor = btn6Color;
  if (btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green') 
  {
    lvl3.style.display = 'block';
  }
  if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green')  
  {
    lvl4.style.display = 'block';
  }
  if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green' && btn13Color === 'green' && btn14Color === 'green' && btn15Color === 'green' && btn16Color === 'green') 
  {
    alert('YOOO');
  }
});




btn9.addEventListener('click', () => {
  if (btn9Color === 'red') {
    btn9Color = 'green';
  } else {
    btn9Color = 'red';
  }
  if (btn11Color === 'red') {
    btn5Color = 'green';
  } else {
    btn5Color = 'red';
  }
  btn9.style.backgroundColor = btn9Color;
  btn5.style.backgroundColor = btn5Color;
  if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green')  
  {
    lvl4.style.display = 'block';
  }
  if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green' && btn13Color === 'green' && btn14Color === 'green' && btn15Color === 'green' && btn16Color === 'green') 
  {
    alert('YOOO');
  }
});

btn10.addEventListener('click', () => {
  if (btn9Color === 'red') {
    btn11Color = 'green';
  } else {
    btn11Color = 'red';
  }
  if (btn12Color === 'red') {
    btn12Color = 'green';
  } else {
    btn12Color = 'red';
  }
  btn11.style.backgroundColor = btn11Color;
  btn12.style.backgroundColor = btn12Color;
  if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green') 
  {
    lvl4.style.display = 'block';
  }
  if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green' && btn13Color === 'green' && btn14Color === 'green' && btn15Color === 'green' && btn16Color === 'green') 
  {
    alert('YOOO');
  }
});

btn11.addEventListener('click', () => {
  if (btn11Color === 'red') {
    btn11Color = 'green';
  } else {
    btn11Color = 'red';
  }
  if (btn10Color === 'red') {
    btn10Color = 'green';
  } else {
    btn10Color = 'red';
  }
  btn11.style.backgroundColor = btn11Color;
  btn10.style.backgroundColor = btn10Color;
  if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green') 
  {
    lvl4.style.display = 'block';
  }
  if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green' && btn13Color === 'green' && btn14Color === 'green' && btn15Color === 'green' && btn16Color === 'green') 
  {
    alert('YOOO');
  }
});

btn12.addEventListener('click', () => {
  if (btn12Color === 'red') {
    btn12Color = 'green';
  } else {
    btn12Color = 'red';
  }
  if (btn9Color === 'red') {
    btn9Color = 'green';
  } else {
    btn9Color = 'red';
  }
  btn9.style.backgroundColor = btn9Color;
  btn12.style.backgroundColor = btn12Color;
  if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green') 
  {
    lvl4.style.display = 'block';
  }
  if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green' && btn13Color === 'green' && btn14Color === 'green' && btn15Color === 'green' && btn16Color === 'green') 
  {
    alert('YOOO');
  }
});




btn13.addEventListener('click', () => {
  if (btn16Color === 'red') {
    btn16Color = 'green';
  } else {
    btn16Color = 'red';
  }
  if (btn11Color === 'red') {
    btn13Color = 'green';
  } else {
    btn13Color = 'red';
  }
  btn16.style.backgroundColor = btn16Color;
  btn13.style.backgroundColor = btn13Color;
  if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green' && btn13Color === 'green' && btn14Color === 'green' && btn15Color === 'green' && btn16Color === 'green')
  {
    alert('YOOO');
  }
});

btn14.addEventListener('click', () => {
  if (btn14Color === 'red') {
    btn14Color = 'green';
  } else {
    btn14Color = 'red';
  }
  if (btn16Color === 'red') {
    btn16Color = 'green';
  } else {
    btn16Color = 'red';
  }
  btn16.style.backgroundColor = btn16Color;
  btn14.style.backgroundColor = btn14Color;
  if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green' && btn13Color === 'green' && btn14Color === 'green' && btn15Color === 'green' && btn16Color === 'green') 
  {
    alert('YOOO');
  }
});

btn15.addEventListener('click', () => {
  if (btn15Color === 'red') {
    btn15Color = 'green';
  } else {
    btn15Color = 'red';
  }
  if (btn10Color === 'red') {
    btn10Color = 'green';
  } else {
    btn10Color = 'red';
  }
  btn15.style.backgroundColor = btn15Color;
  btn10.style.backgroundColor = btn10Color;
  if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green' && btn13Color === 'green' && btn14Color === 'green' && btn15Color === 'green' && btn16Color === 'green') 
  {
    alert('YOOO');
  }
});

btn16.addEventListener('click', () => {
  if (btn14Color === 'red') {
    btn15Color = 'green';
  } else {
    btn15Color = 'red';
  }
  if (btn16Color === 'red') {
    btn16Color = 'green';
  } else {
    btn16Color = 'red';
  }
  btn15.style.backgroundColor = btn15Color;
  btn16.style.backgroundColor = btn16Color;
  if (btn9Color === 'green' && btn10Color === 'green' && btn11Color === 'green' && btn12Color === 'green' && btn5Color === 'green' && btn6Color === 'green' && btn7Color === 'green' && btn8Color === 'green' && btn13Color === 'green' && btn14Color === 'green' && btn15Color === 'green' && btn16Color === 'green') 
  {
    alert('YOOO');
  }
});