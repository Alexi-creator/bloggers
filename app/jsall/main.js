"use strict"

$(document).ready(function() {
    
    // Burger menu
    $('.burger-wrap').click(function(event) {
		$('.burger-wrap, .header__menu, .header__shadow, html').toggleClass('active'); 
		
    });
    
    // Filter menu
    $('.select__filter').click(function(event) {
		$('.select-choose-wrap, .select__wrap').toggleClass('active'); 
		
    });

    // hover camera post
    $('.menu__camera').mouseover(function(){
        $('.label-post').addClass('active');

    });
    
    $('.menu__camera').mouseout(function(){
        $('.label-post').removeClass('active');

    });

    // hover vip label
    $('.card__label').mouseover(function(){
        $('.tooltip').addClass('active');
        
    });

    $('.card__label').mouseout(function(){
        $('.tooltip').removeClass('active');
        
    });

    $('.tooltip').mouseover(function(){
        $('.tooltip').addClass('active');
    
    });

    $('.tooltip').mouseout(function(){
        $('.tooltip').removeClass('active');
        
    });


    // hover tooltip goods-buy
    $('.goods-buy__price-sale-img').mouseover(function(){
        $('.goods-buy__tooltip').addClass('active');
        $('.goods-buy__price-sale-img').addClass('active');
    });

    $('.goods-buy__price-sale-img').mouseout(function(){
        $('.goods-buy__tooltip').removeClass('active');
        $('.goods-buy__price-sale-img').removeClass('active');
    });

    $('.goods-buy__tooltip').mouseover(function(){
        $('.goods-buy__tooltip').addClass('active');
        $('.goods-buy__price-sale-img').addClass('active');
    });

    $('.goods-buy__tooltip').mouseout(function(){
        $('.goods-buy__tooltip').removeClass('active');
        $('.goods-buy__price-sale-img').removeClass('active');
    });


    // hover tooltip goods-buy more
    $('.goods-buy__price-more-img').mouseover(function(){
        $('.goods-buy__tooltip-more').addClass('active');
        $('.goods-buy__price-more-img').addClass('active');
    });

    $('.goods-buy__price-more-img').mouseout(function(){
        $('.goods-buy__tooltip-more').removeClass('active');
        $('.goods-buy__price-more-img').removeClass('active');
    });

    $('.goods-buy__tooltip-more').mouseover(function(){
        $('.goods-buy__tooltip-more').addClass('active');
        $('.goods-buy__price-more-img').addClass('active');
    });

    $('.goods-buy__tooltip-more').mouseout(function(){
        $('.goods-buy__tooltip-more').removeClass('active');
        $('.goods-buy__price-more-img').removeClass('active');
    });


    // hover categories item

    $('.card-categories__item').mouseover(function(){
        $(this).addClass("active");
        $(this).children(".card-categories__descr").addClass("active");
    });
    $('.card-categories__item').mouseout(function(){
        $(this).removeClass("active");
        $(this).children(".card-categories__descr").removeClass("active");
    });

    

    // Btn left On
    $('.left').click(function(event) {
        $('.header__wrap, html').removeClass('active2');
        $('.sign, .button-mobile__btn, .button-entry, .left, .header__wrap, html').toggleClass('active'); 
        $('.contact, .button-mobile-right__btn, .button-contact, .right').removeClass('active');
        $('.button-bottom').toggleClass('entry');
        $('.button-bottom').removeClass('cont');
    
    });

    // Btn left Off
    $('.sign__cross').click(function(event) {
		$('.sign, .button-mobile__btn, .button-entry, .left, .header__wrap, html').toggleClass('active'); 
        $('.button-bottom').toggleClass('entry');
            
    });

    // Btn right On
    $('.right').click(function(event) {
        $('.header__wrap, html').removeClass('active');
        $('.header__wrap, html').toggleClass('active2');
		$('.contact, .button-mobile-right__btn, .button-contact, .right').toggleClass('active'); 
        $('.sign, .button-mobile__btn, .button-entry, .left').removeClass('active');
        $('.button-bottom').toggleClass('cont');
        $('.button-bottom').removeClass('entry');
    
    });

    // Btn right Off
    $('.contact__cross').click(function(event) {
		$('.contact, .button-mobile-right__btn, .button-contact, .right').toggleClass('active'); 
        $('.button-bottom').toggleClass('cont');
        $('.header__wrap, html').removeClass('active2');

    });


    // Slider goods
    $('.goods-slider__container').slick({
		slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
		fade: true,
        prevArrow: '<div class="slider-arrows slider-arrows__left" ></div>',     
        nextArrow: '<div class="slider-arrows slider-arrows__right" ></div>',
        asNavFor: '.goods-slider__container-dots, .mw1200'
    });
    $('.goods-slider__container-dots').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.goods-slider__container'
    });
    $('.mw1200').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.goods-slider__container'
    });
    

    // select-size
    $(".goods-buy__select-size-item").click(function() {
        $(".goods-buy__select-size-item").removeClass("active");
        $(this).addClass("active");
                
    });
   
    // btn popup reviews
    $('.goods-buy__reviews-title').click(function(){
        $('.reviews-popup, .button-bottom, .button-bottom__reviews-cross, .popup-opacity, .header, html').addClass('active');
        
    });
    
    $('.button-bottom__reviews-cross').click(function(){
        $('.reviews-popup, .button-bottom, .button-bottom__reviews-cross, .popup-opacity, .header, html').removeClass('active');

    });

    // btn popup совместные покупки
    $('.goods-buy__price-more-btn').click(function(){
        $('.together-popup, .button-bottom, .button-bottom__reviews-cross, .popup-opacity, .header, html').addClass('active');
        
    });
    
    $('.button-bottom__reviews-cross').click(function(){
        $('.together-popup, .button-bottom, .button-bottom__reviews-cross, .popup-opacity, .header, html').removeClass('active');

    });

    // btn popup подробнее о товаре
    $('.goods-buy__descr-more').click(function(){
        $('.details-popup, .button-bottom, .button-bottom__reviews-cross, .popup-opacity, .header, html').addClass('active');
        
    });
    
    $('.button-bottom__reviews-cross').click(function(){
        $('.details-popup, .button-bottom, .button-bottom__reviews-cross, .popup-opacity, .header, html').removeClass('active');

    });

    // btn popup добавить пост
    $('.goods-buy__reviews-btn').click(function(){
        $('.post-wrap, .header, html').addClass('active');
        
    });
    
    $('.post-popup__cross').click(function(){
        $('.post-wrap, .header, html').removeClass('active');

    });

               

});


// ширина блока комментов зависит от ширины слайдера
// если данный элемент есть на загруженной странице то запускаем код
// иначе будет ошибка в консоле, и ниже написанные скрипты работать не будут
function widthComments() {
    if (document.querySelector('.seller__slider') && window.innerWidth > 992) {
        let widthSlider = document.querySelector('.seller__slider').offsetWidth;
        let distanceSlider = document.querySelector('.seller__slider').getBoundingClientRect().left;
        document.querySelector('.seller-descr').style.width = widthSlider + 'px';
        document.querySelector('.seller-descr').style.marginLeft = (distanceSlider - 100) + 'px';
    }
    if (document.querySelector('.seller__slider') && window.innerWidth < 992) {
        document.querySelector('.seller-descr').style.width = 100 + "%";
    }
};

widthComments();

// запуск данной функции при смене ширины браузера
window.addEventListener("resize", widthComments);



// filter для всех фильтров на всех страницах

let select = function () {
    let selectHeader = document.querySelectorAll('.filter__header');
    let selectItem = document.querySelectorAll('.filter__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
        select = this.closest('.filter-wrap'),
        arrow = select.querySelector('.filter__icon'),
        currentText = select.querySelector('.filter__current');
        arrow.style.backgroundPosition = "0 9px";
        currentText.innerText = text;
        currentText.style.color = "#FE6C61";
        select.classList.remove('is-active');
    }

};

select();



// Simplebar нестандартный скролл для товара 
// с проверкой есть ли на загруженной странице элемент к котору нужно подключить simplebar иначе будет ошибка
if (document.getElementById('goods-buy_scroll')) {
    new SimpleBar(document.getElementById('goods-buy_scroll'), {
        autoHide: false,  
        scrollbarMaxSize: 100 
    });
}

// Simplebar нестандартный скролл для отзывов
if (document.getElementById('reviews-popup_scroll')) {
    new SimpleBar(document.getElementById('reviews-popup_scroll'), {
        autoHide: false,  
        scrollbarMaxSize: 100 
    });
}

// Simplebar нестандартный скролл для совместных покупок
if (document.getElementById('together-popup_scroll')) {
    new SimpleBar(document.getElementById('together-popup_scroll'), {
        autoHide: false,  
        scrollbarMaxSize: 100 
    });
}

// Simplebar нестандартный скролл для описания товара
if (document.getElementById('details-popup_scroll')) {
    new SimpleBar(document.getElementById('details-popup_scroll'), {
        autoHide: false,  
        scrollbarMaxSize: 100 
    });
}

// Simplebar нестандартный скролл для добавления поста авторизованному пользователю
if (document.getElementById('post-popup_scroll')) {
    new SimpleBar(document.getElementById('post-popup_scroll'), {
        autoHide: false,  
        scrollbarMaxSize: 100 
    });
}

// Simplebar нестандартный скролл для публикации продавца
if (document.getElementById('review-seller__goods_scroll') && window.innerWidth > 665) {
    new SimpleBar(document.getElementById('review-seller__goods_scroll'), {
        autoHide: false,
        scrollbarMaxSize: 100
    });
}

