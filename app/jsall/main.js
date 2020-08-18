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

    // btn popup win tff
    $('.app-resalts').click(function(){
        $('.win-popup, .button-bottom, .button-bottom__reviews-cross, .popup-opacity, .header, html').addClass('active');
        
    });

    $('.button-bottom__reviews-cross').click(function(){
        $('.win-popup, .button-bottom, .button-bottom__reviews-cross, .popup-opacity, .header, html').removeClass('active');

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

// Simplebar нестандартный скролл для победителей tff
if (document.getElementById('win-popup_scroll')) {
    new SimpleBar(document.getElementById('win-popup_scroll'), {
        autoHide: false,  
        scrollbarMaxSize: 100 
    });
}



// оформление заказа



let btnStep1 = document.querySelector('.btn-step1');

let name,
    phone,
    email;

// проверка есть ли данный элемент на открывшейся странице, иначе будет ошибка, 
// и ниже написанный код для других страниц работать не будет
if (btnStep1) {
    
    btnStep1.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('name').style.border = "none";
        document.getElementById('phone').style.border = "none";
        document.getElementById('email').style.border = "none";
        name = document.getElementById('name').value;
        phone = document.getElementById('phone').value;
        email = document.getElementById('email').value;
        if (name && phone && email) {
            document.querySelector('.ordering__step-1').style.display = "none";
            document.querySelector('.step-span1').classList.remove('active');
            document.querySelector('.ordering__step-2').style.display = "block";
            document.querySelector('.step-span2').classList.add('active');
        }
        else {
            if (!name) {
                document.getElementById('name').style.border = "1px solid #FE6C61";
            }
            if (!phone) {
                document.getElementById('phone').style.border = "1px solid #FE6C61";
            }
            if (!email) {
                document.getElementById('email').style.border = "1px solid #FE6C61";
            }
        }
    

    });

}

let btnStep2 = document.querySelector('.btn-step2');
let back2 = document.querySelector('.btn-back-2');

let region,
    index,
    city,
    street,
    home,
    flat;

if (btnStep2) {
    
    btnStep2.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('region').style.border = "none";
        document.getElementById('index').style.border = "none";
        document.getElementById('city').style.border = "none";
        document.getElementById('street').style.border = "none";
        document.getElementById('home').style.border = "none";
        document.getElementById('flat').style.border = "none";
        region = document.getElementById('region').value;
        index = document.getElementById('index').value;
        city = document.getElementById('city').value;
        street = document.getElementById('street').value;
        home = document.getElementById('home').value;
        flat = document.getElementById('flat').value;

        document.querySelector('.step3-region-wrap').style.display = "";
        document.querySelector('.step3-index-wrap').style.display = "";
        document.querySelector('.step3-city-wrap').style.display = "";
        document.querySelector('.step3-street-wrap').style.display = "";
        document.querySelector('.step3-home-wrap').style.display = "";
        document.querySelector('.step3-flat-wrap').style.display = "";

        document.querySelector('.step3-pickup').style.display = "";
        document.querySelector('.step3-delivery').style.display = "";

        if ( (region && index && city && street && home && flat) || (document.querySelector('.ordering__step2-pickup .ordering__step2-circul').classList.contains('active')) ) {
            if ( document.querySelector('.ordering__step2-pickup .ordering__step2-circul').classList.contains('active') ) {
                document.querySelector('.ordering__step-2').style.display = "none";
                document.querySelector('.step-span2').classList.remove('active');
                document.querySelector('.ordering__step-3').style.display = "block";
                document.querySelector('.step-span3').classList.add('active');
                document.querySelector('.step3-name').innerHTML = name;
                document.querySelector('.step3-phone').innerHTML = phone;
                document.querySelector('.step3-email').innerHTML = email;
                document.querySelector('.step3-delivery').style.display = "none";

                document.querySelector('.step3-region-wrap').style.display = "none";
                document.querySelector('.step3-index-wrap').style.display = "none";
                document.querySelector('.step3-city-wrap').style.display = "none";
                document.querySelector('.step3-street-wrap').style.display = "none";
                document.querySelector('.step3-home-wrap').style.display = "none";
                document.querySelector('.step3-flat-wrap').style.display = "none";
            }
            else {
                document.querySelector('.ordering__step-2').style.display = "none";
                document.querySelector('.step-span2').classList.remove('active');
                document.querySelector('.ordering__step-3').style.display = "block";
                document.querySelector('.step-span3').classList.add('active');
                document.querySelector('.step3-name').innerHTML = name;
                document.querySelector('.step3-phone').innerHTML = phone;
                document.querySelector('.step3-email').innerHTML = email;
                document.querySelector('.step3-pickup').style.display = "none";

                document.querySelector('.step3-region').innerHTML = region;
                document.querySelector('.step3-index').innerHTML = index;
                document.querySelector('.step3-city').innerHTML = city;
                document.querySelector('.step3-street').innerHTML = street;
                document.querySelector('.step3-home').innerHTML = home;
                document.querySelector('.step3-flat').innerHTML = flat;
            } 

        }
        else {
            if (!region) {
                document.getElementById('region').style.border = "1px solid #FE6C61";
            }
            if (!index) {
                document.getElementById('index').style.border = "1px solid #FE6C61";
            }
            if (!city) {
                document.getElementById('city').style.border = "1px solid #FE6C61";
            }
            if (!street) {
                document.getElementById('street').style.border = "1px solid #FE6C61";
            }
            if (!home) {
                document.getElementById('home').style.border = "1px solid #FE6C61";
            }
            if (!flat) {
                document.getElementById('flat').style.border = "1px solid #FE6C61";
            }
        }

    });
}


let btnBack2 = document.querySelector('.btn-back-2');

if (btnBack2) {

    btnBack2.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.ordering__step-2').style.display = "none";
        document.querySelector('.step-span2').classList.remove('active');
        document.querySelector('.ordering__step-1').style.display = "block";
        document.querySelector('.step-span1').classList.add('active');
    });
}

let btnBack3 = document.querySelector('.btn-back-3');

if (btnBack3) {

    btnBack3.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.ordering__step-3').style.display = "none";
        document.querySelector('.step-span3').classList.remove('active');
        document.querySelector('.ordering__step-2').style.display = "block";
        document.querySelector('.step-span2').classList.add('active');
    });
}


let delivery = document.querySelector(".ordering__step2-delivery");
let pickup = document.querySelector(".ordering__step2-pickup");

if (delivery) {

    delivery.addEventListener('click', function() {
        document.querySelector('.pickup-wrap').style.display = "none";
        document.querySelector('.ordering__step2').style.display = "block";
        document.querySelector('.ordering__step2-delivery .ordering__step2-circul').classList.add('active');
        document.querySelector('.ordering__step2-pickup .ordering__step2-circul').classList.remove('active');
    });
}

if (pickup) {
    pickup.addEventListener('click', function() {
        document.querySelector('.ordering__step2').style.display = "none";
        document.querySelector('.pickup-wrap').style.display = "block";
        document.querySelector('.ordering__step2-pickup .ordering__step2-circul').classList.add('active');
        document.querySelector('.ordering__step2-delivery .ordering__step2-circul').classList.remove('active');
    });
}


