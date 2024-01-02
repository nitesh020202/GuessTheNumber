// let randonNumber = Math.round(Math.random() * 100 + 1);
// console.log(randonNumber);let prevGuess = document.querySelector('.previousGuess');
let remchance = document.querySelector('.RemainingChance');
let prevGuess=document.querySelector('.previousGuess');
const body = document.querySelector('body');
let preventry =document.querySelector('.preventry');
let i = 10; 
const arr=[];
// btn : submit button
let btn = document.querySelector('.submit');
btn.addEventListener('click', () => {
    if (i > 0) {
        i--;

        let randonNumber = Math.round(Math.random() * 100 + 1);
        let input = document.querySelector('#input').value;
        
        arr.push(input);

        if (randonNumber == input) {
            prevGuess.innerHTML = `<h1>It's a Correct Match (${randonNumber}==${input}) </h1> `;
            body.style.backgroundColor = 'yellowgreen';
        } else {
            preventry.innerHTML=`Previous Guesses are :${arr}`;
            prevGuess.innerHTML = `<h1>It's a Wrong Match (${randonNumber}!=${input}) </h1> `;
            body.style.backgroundColor = 'red';
            remchance.innerHTML = `<h2>Remaining Chance : ${i}</h2>`;
        }

        if (i === 0) {
            btn.disabled = true; // Disable the button when i reaches 0
            prevGuess.innerHTML='';
            preventry.innerHTML=`Previous Guesses are :${arr}`;
            remchance.innerHTML=`<h2>No More Chance !! Sorry</h2>`
        }
    }
});

// rbtn : reset button
const rbtn=document.querySelector('.reset');
rbtn.addEventListener('click',()=>{
    i=10;
    arr.length=0;
    preventry.innerHTML=``;
    btn.disabled=false;
    btn.disabled = false; // Enable the submit button
    remchance.innerHTML = `<h2>Remaining Chance : ${i}</h2>`;
    prevGuess.innerHTML = '';
    body.style.backgroundColor = '#aaa'; 
})
