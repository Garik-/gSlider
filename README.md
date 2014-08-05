Слайер объединяет в себе 2 jquery плагина bxSlider и backstretch 

http://bxslider.com/
http://srobbin.com/jquery-plugins/backstretch/

Что бы добиться такого эффекта при изменении размеров экрана слайдер подстраивается под его размер + фон меняет свой размер и адаптируется под разрешение без искажений.

Вот пример проекта где используется этот слайдер http://diafan.ru/

Подключение
```js
<!-- bxslider -->
<link rel="stylesheet" type="text/css" href="js/bxslider/jquery.bxslider.css" media="screen" />
<script type="text/javascript" src="js/bxslider/jquery.bxslider.js"></script>

<script src="js/jquery.backstretch.min.js"></script>

<script type="text/javascript" src="js/jquery.gslider.js"></script>

<script type="text/javascript">
$(document).ready( function() {
  if($('.banner-slider').length) {
    $(window).resize(function () {
        $('.top-banner, .banner-slider__item > .container').height($(window).height() - $('header').height()); 
    }).trigger('resize');
         
    $(".banner-slider").gSlider({item:'.banner-slider__item'});
  }
});
</script>
```
```html

 <div class="banner-slider">

          <div class="banner-slider__item" data-bg="img/main/slider/001.jpg">
             content html
          </div>
          
          <div class="banner-slider__item" data-bg="img/main/slider/002.jpg">
             content html
          </div>
</div>
```
