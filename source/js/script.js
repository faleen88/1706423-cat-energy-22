const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--opend');
});

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [59.938635, 30.323118],
    zoom: 14,
    behaviors: ['drag']
  }, {
    searchControlProvider: 'yandex#search'
  }),

  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'ул. Большая Конюшенная, д. 19/8, офис 101',
    balloonContent: [
      '<div class="map__balloon">',
      '<img src="../img/logo-map.png" alt="Логотип магазина">',
      '<p>Функциональное питание для котов</p>',
      '</div>'
    ].join('')
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map-pin.png',
    iconImageSize: [57, 53],
    iconImageOffset: [-29, -44]
  })

  myMap.geoObjects
    .add(myPlacemark);
});
