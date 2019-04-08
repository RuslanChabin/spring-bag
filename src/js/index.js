//ripple effect
window.addEventListener('click', function(e) {
	document.querySelector(".ripple").style.transform = 'scale(1)';
	document.querySelector(".ripple").style.top = (e.pageY - 25) + 'px';
	document.querySelector(".ripple").style.left = (e.pageX - 25) + 'px';
}, false);

setInterval(function() {
  document.querySelector(".ripple").style.transform = 'scale(0)';
}, 400);

//modal

var popupBtn = document.querySelector(".button-write");
var popup = document.querySelector(".modal-window");
var closeBtn = popup.querySelector(".button-modal-close");

popupBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

closeBtn.addEventListener("click", function (evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

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

//calendar

function Calendar(id, year, month) {
var Dlast = new Date(year,month+1,0).getDate(),
	DayNow = new Date(),
    D = new Date(year,month,Dlast),
    DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
    DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
    calendar = '<tr>',
	dayCount = 33 - new Date(year, month-1, 33).getDate(),
	WeekDay = new Date(year, month,DNfirst-1).getDate(),
	monthPrev = dayCount - WeekDay,
    month=["January","February","March","April","May","June","July","August","September","October","November","December"];
	
//for previous month	
if (DNfirst != 0) {
  for(var  i = 1; i < DNfirst; i++) calendar += '<td class="calendar-table__date-cell calendar-table__date-cell--white">' + (monthPrev + i);
}else{
  for(var  i = 0; i < 6; i++) calendar += '<td class="calendar-table__date-cell calendar-table__date-cell--white">' + (26 + i);
}

//for present month
for(var  i = 1; i <= Dlast; i++) {
  if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
    calendar += '<td class="today">' + i;
  }else{
    calendar += '<td class="calendar-table__date-cell">' + i;
  }
  if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
    calendar += '<tr>';
  }
}

//for next month
for(var  i = 0; i < 7 - DNlast; i++) calendar += '<td class="calendar-table__date-cell calendar-table__date-cell--white">' + (1 + i);
//for data sets
document.querySelector('#'+id+' tbody').innerHTML = calendar;
document.querySelector('.calendar__date').innerHTML = DayNow.getDate();
document.querySelector('.calendar__month-title').innerHTML = month[D.getMonth()];
document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
//extraline
if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  
	document.querySelector('#'+id+' tbody').innerHTML += '<tr><td class="hidden">&nbsp;<td class="hidden">&nbsp;<td class="hidden">&nbsp;<td class="hidden">&nbsp;<td class="hidden">&nbsp;<td class="hidden">&nbsp;<td class="hidden">&nbsp;';
}
}
Calendar("calendar", new Date().getFullYear(), new Date().getMonth());
// button back
document.querySelector('.calendar-button--left').onclick = function() {
  Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month)-1);
}
// button next
document.querySelector('.calendar-button--right').onclick = function() {
  Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month)+1);
}

