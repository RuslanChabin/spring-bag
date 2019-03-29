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

//map

ymaps.ready(init);
 
function init(){     
 
    var myMap;
 
    myMap = new ymaps.Map("map", {
        center: [37.787509, -122.444838],
        zoom: 13,
        controls: []
    });
 
    myMap.behaviors.disable('scrollZoom');
 
    myMap.controls.add("zoomControl", {
        position: {top: 15, left: 15}
    });
	
	 var myPlacemark = new ymaps.Placemark([37.787509, -122.444838] , {},
        { iconLayout: 'default#image',
          iconImageHref: './images/marker.png',
          iconImageSize: [59, 60],
          iconImageOffset: [-15, -50] });     
 
    myMap.geoObjects.add(myPlacemark);
}
