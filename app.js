const userInput = document.querySelector('#user-input');
const addBtn = document.querySelector('#add-btn');
const container = document.querySelector('#container');
const showOdd = document.querySelector('#show-odd');
const showEven = document.querySelector('#show-even');
const countersEven = document.querySelector('#counters-even');
const countersOdd = document.querySelector('#counters-odd');


const numbers = [];



//filter
// function countEven(numbers){
//   return numbers.filter(number => number !== null && number % 2 === 0).length;
// };



//for 
// function countEven(numbers){
//   let count = 0;
//   for(let number of numbers){

//     if(number !== null && number % 2 === 0) {
//       count++;
//     }
//   }
//   return count;
// }

//for Each
function countEven(numbers) {
  let count = 0;
  numbers.forEach((number) => {
    if(number % 2 === 0 && number !== null) {
      count++;
    }
  })
  return count;
}

function countOdd(numbers) {
  let count = 0;
  numbers.forEach((number) => {
    if(number % 2 === 1 && number !== null) {
      count++;
    }
  })
  return count;
}

  function addNum () {
    
    userInput.value = Number(userInput.value);
    
    numbers.push(userInput.value);
    
    const item = document.createElement('h2');
  
    container.appendChild(item);
    item.classList.add('yellow-box')
    item.innerHTML = `${userInput.value}`;
    const itemIdx = numbers.length - 1;

    item.addEventListener('click', function (){
      numbers.splice(itemIdx, 1, null);
      console.log(numbers);
      item.remove();
    })
  
    userInput.value = '';
   
    showEven.addEventListener('click', function(){
      countersEven.innerHTML = `${countEven(numbers)} Even Number(s)`;
    });
    
    showOdd.addEventListener('click', function(){
      countersOdd.innerHTML = `${countOdd(numbers)} Odd Number(s)`;
    });
  }
  
  addBtn.addEventListener('click', addNum)
  