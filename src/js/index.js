//orange range input

var range = document.querySelector('.slider--orange');

document.querySelector('.slider-output').innerHTML = range.value,

range.addEventListener('input', function (){
  document.querySelector('.slider-output').innerHTML = range.value},false);

range.addEventListener('input', function () {   document.querySelector('.slider-output').style.left = 2.33*range.value +'px'
},false);

//green range input

var range1 = document.querySelector('.slider--green');

range1.addEventListener('input', function () {   document.querySelector('.slider-output--green').style.width = 2.5*range1.value +'px'
},false);
