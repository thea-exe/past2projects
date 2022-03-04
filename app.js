const yesorno = [0, 1]; 
const btn = document.getElementById("btn");
const result = document.querySelector(".result");
const secondresult = document.querySelector(".secondresult");
const thirdresult = document.querySelector(".thirdresult");
const dropdown = document.querySelectorAll('.question-btn');


btn.addEventListener("click", function () {
  let total = "Answer: "; 
  total += yesorno[getRandomNumber()];

  result.textContent = total; 
});

nbtn.addEventListener("click", function () {
    let total = "Answer: "; 
    total += yesorno[getRandomNumber()];
  
    secondresult.textContent = total; 
  });

function getRandomNumber() {
  return Math.floor(Math.random() * yesorno.length);
}

ntbtn.addEventListener("click", function () {
    let total = "Answer: "; 
    total += yesorno[getRandomNumber()];
  
    thirdresult.textContent = total; 
  });

function getRandomNumber() {
  return Math.floor(Math.random() * yesorno.length);
}


dropdown.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement;
        question.classList.toggle('show-hehe');
    });
});