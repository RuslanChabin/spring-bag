var range = document.querySelector('.slider');

document.querySelector('.slider-output').innerHTML = range.value,

range.addEventListener('input', function (){
  document.querySelector('.slider-output').innerHTML = range.value},false);

range.addEventListener('input', function () {   document.querySelector('.slider-output').style.left = 2.33*range.value +'px'
},false);
