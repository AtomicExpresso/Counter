//=============================================================

let num = 0;

const Total = document.getElementById('number');
const upBtn = document.getElementById('up');
const downBtn = document.getElementById('down');
const resetBtn = document.getElementById('reset');

upBtn.addEventListener('click', () => {
  num++;
  Total.innerText = num;
  colorUpdate();
});

resetBtn.addEventListener('click', () => {
  num = 0;
  Total.innerText = num;
  colorUpdate();
});

downBtn.addEventListener('click', () => {
  num--;
  Total.innerText = num;
  colorUpdate();
});

const colorUpdate = () => {
  if (num > 1) {
    document.getElementById('number').style.color = 'green';
  } else if (num >= 0) {
    document.getElementById('number').style.color = 'black';
  } else {
    document.getElementById('number').style.color = 'red';
  }
}

//=============================================================