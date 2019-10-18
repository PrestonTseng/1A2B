if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('service worker registered'))
      .catch(err => console.log('service worker not registered', err));
}

var inputNum = [];
var globalInputCounter = 0;
var answer = random4Numbers();

document.querySelectorAll('.inputNumberBtn').forEach(e => {
  e.addEventListener('click', recordInput);
});

document.querySelector('.submitBtn').addEventListener('click', submit);

document.querySelector('.deleteBtn').addEventListener('click', cleanAnswer);


function random4Numbers() {
  // finish this function
}

function checkAnswer() {
  // finish this function
}

function recordInput(e) {
  var input = e.target.innerHTML;
  if (inputNum.length !== 4) {
    inputNum.push(input);
    document.querySelectorAll('.displayRow').forEach((e, index) => {
      e.innerHTML = inputNum[index] ? inputNum[index] : '-';
    });
  }
}

function cleanAnswer() {
  document.querySelectorAll('.displayRow').forEach((e) => {
    e.innerHTML = '-';
  });
  inputNum = [];
}

function submit(){
  var result = checkAnswer();
  if(result){
    showResult(inputNum.toString().replace(/,/g,''), `${result.A}A${result.B}B`);
    cleanAnswer();
  }
  if (result.A === 4) {
    window.alert("恭喜你贏了!");
  }
}

function showResult(history, hint){
  document.querySelector('.historyList').innerHTML += `<div class="result">${history}</div>`;
  document.querySelector('.hintList').innerHTML += `<div class="result">${hint}</div>`;
}