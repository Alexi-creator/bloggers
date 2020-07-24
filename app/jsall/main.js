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




// Select Categories

let select = function () {
    let selectHeader = document.querySelectorAll('.select-categories__header');
    let selectItem = document.querySelectorAll('.select-categories__item');

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
        select = this.closest('.select-categories'),
        currentText = select.querySelector('.select-categories__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};

select();



// Select Name

let select2 = function () {
    let selectHeader2 = document.querySelectorAll('.select-name__header');
    let selectItem2 = document.querySelectorAll('.select-name__item');

    selectHeader2.forEach(item => {
        item.addEventListener('click', selectToggle2)
    });

    selectItem2.forEach(item => {
        item.addEventListener('click', selectChoose2)
    });

    function selectToggle2() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose2() {
        let text2 = this.innerText,
        select2 = this.closest('.select-name'),
        currentText2 = select2.querySelector('.select-name__current');
        currentText2.innerText = text2;
        select2.classList.remove('is-active');

    }

};

select2();








// Simplebar нестандартный скролл для товара

new SimpleBar(document.getElementById('goods-buy_scroll'), {
    autoHide: false,  // чтобы ползунок не пропадал
    scrollbarMaxSize: 100 // максимальная высота ползунка
});

// Simplebar нестандартный скролл для отзывов

new SimpleBar(document.getElementById('reviews-popup_scroll'), {
    autoHide: false,  // чтобы ползунок не пропадал
    scrollbarMaxSize: 100 // максимальная высота ползунка
});

// Simplebar нестандартный скролл для совместных покупок

new SimpleBar(document.getElementById('together-popup_scroll'), {
    autoHide: false,  // чтобы ползунок не пропадал
    scrollbarMaxSize: 100 // максимальная высота ползунка
});

// Simplebar нестандартный скролл для описания товара

new SimpleBar(document.getElementById('details-popup_scroll'), {
    autoHide: false,  // чтобы ползунок не пропадал
    scrollbarMaxSize: 100 // максимальная высота ползунка
});

// Simplebar нестандартный скролл для добавления поста авторизованному пользователю

new SimpleBar(document.getElementById('post-popup_scroll'), {
    autoHide: false,  // чтобы ползунок не пропадал
    scrollbarMaxSize: 100 // максимальная высота ползунка
});













