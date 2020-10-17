"use strict"

$(document).ready(function() {
    
    // Burger menu
    $('.burger-wrap').on('click', function(event) {
		$('.burger-wrap, .header__menu, .header__shadow, html').toggleClass('active'); 
		
    });
    
    // Filter menu
    $('.select__filter').on('click', function(event) {
		$('.select-choose-wrap, .select__wrap, .categories__filter').toggleClass('active'); 
		$('.categories__filter').toggleClass('active2'); 
		
    });

    // hover camera post
    $('.menu__camera').on('mouseover', function(){
        $('.label-post').addClass('active');

    });
    
    $('.menu__camera').on('mouseout', function(){
        $('.label-post').removeClass('active');

    });

    // hover vip label
    $('.card__label').on('mouseover', function(){
        $(this).children('.tooltip').addClass('active');      
    });

    $('.card__label').on('mouseout', function(){
        $('.tooltip').removeClass('active');       
    });

    $('.tooltip').on('mouseover', function(event){
        $(event.target).addClass('active'); 
    });

    $('.tooltip').on('mouseout',function(){
        $('.tooltip').removeClass('active');    
    });


    // hover tooltip goods-buy
    $('.goods-buy__price-sale-img').on('mouseover', function(){
        $('.goods-buy__tooltip').addClass('active');
        $('.goods-buy__price-sale-img').addClass('active');
    });

    $('.goods-buy__price-sale-img').on('mouseout', function(){
        $('.goods-buy__tooltip').removeClass('active');
        $('.goods-buy__price-sale-img').removeClass('active');
    });

    $('.goods-buy__tooltip').on('mouseover', function(){
        $('.goods-buy__tooltip').addClass('active');
        $('.goods-buy__price-sale-img').addClass('active');
    });

    $('.goods-buy__tooltip').on('mouseout', function(){
        $('.goods-buy__tooltip').removeClass('active');
        $('.goods-buy__price-sale-img').removeClass('active');
    });


    // hover tooltip goods-buy more
    $('.goods-buy__price-more-img').on('mouseover', function(){
        $('.goods-buy__tooltip-more').addClass('active');
        $('.goods-buy__price-more-img').addClass('active');
    });

    $('.goods-buy__price-more-img').on('mouseout', function(){
        $('.goods-buy__tooltip-more').removeClass('active');
        $('.goods-buy__price-more-img').removeClass('active');
    });

    $('.goods-buy__tooltip-more').on('mouseover', function(){
        $('.goods-buy__tooltip-more').addClass('active');
        $('.goods-buy__price-more-img').addClass('active');
    });

    $('.goods-buy__tooltip-more').on('mouseout', function(){
        $('.goods-buy__tooltip-more').removeClass('active');
        $('.goods-buy__price-more-img').removeClass('active');
    });


    // hover categories item

    $('.card-categories__item').on('mouseover', function(){
        $(this).addClass("active");
        $(this).children(".card-categories__descr").addClass("active");
    });
    $('.card-categories__item').on('mouseout', function(){
        $(this).removeClass("active");
        $(this).children(".card-categories__descr").removeClass("active");
    });

    

    // Btn left On
    $('.left').on('click', function() {
        $('.header__wrap, html').removeClass('active2');
        $('.sign, .button-mobile__btn, .button-entry, .left, .header__wrap, html').toggleClass('active'); 
        $('.contact, .button-mobile-right__btn, .button-contact, .right').removeClass('active');
        $('.button-bottom').toggleClass('entry');
        $('.button-bottom').removeClass('cont');
    
    });

    // Btn left Off
    $('.sign__cross').on('click', function() {
		$('.sign, .button-mobile__btn, .button-entry, .left, .header__wrap, html').toggleClass('active'); 
        $('.button-bottom').toggleClass('entry');
            
    });

    // Btn right On
    $('.right').on('click', function() {
        $('.header__wrap, html').removeClass('active');
        $('.header__wrap, html').toggleClass('active2');
		$('.contact, .button-mobile-right__btn, .button-contact, .right').toggleClass('active'); 
        $('.sign, .button-mobile__btn, .button-entry, .left').removeClass('active');
        $('.button-bottom').toggleClass('cont');
        $('.button-bottom').removeClass('entry');
    
    });

    // Btn right Off
    $('.contact__cross').on('click', function() {
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
    $(".goods-buy__select-size-item").on('click', function() {
        $(".goods-buy__select-size-item").removeClass("active");
        $(this).addClass("active");
                
    });
   
    // btn popup reviews
    $('.goods-buy__reviews-title').on('click', function(){
        $('.reviews-popup, .button-middle, .popup-opacity, html').addClass('active');
        
    });
        
    $('.button-middle__reviews-cross').on('click', function(){
        $('.reviews-popup, .button-middle, .popup-opacity, html').removeClass('active');

    });

    // btn popup win tff-inner
    $('.app-resalts').on('click', function(){
        $('.win-popup, .button-middle, .popup-opacity, html').addClass('active');
        
    });

    $('.button-middle__reviews-cross').on('click', function(){
        $('.win-popup, .button-middle, .popup-opacity, html').removeClass('active');

    });

    // btn popup совместные покупки
    $('.goods-buy__price-more-btn').on('click', function(){
        $('.together-popup, .button-middle, .popup-opacity, html').addClass('active');
        
    });
    
    $('.button-middle__reviews-cross').on('click', function(){
        $('.together-popup, .button-middle, .popup-opacity, html').removeClass('active');

    });

    // btn popup подробнее о товаре
    $('.goods-buy__descr-more').on('click', function(){
        $('.details-popup, .button-middle, .popup-opacity, html').addClass('active');
        
    });
    
    $('.button-middle__reviews-cross').on('click', function(){
        $('.details-popup, .button-middle, .popup-opacity, html').removeClass('active');

    });

    // btn popup добавить пост
    $('.goods-buy__reviews-btn').on('click', function(){
        $('.post-wrap, html').addClass('active');
        
    });
    
    $('.post-popup__cross').on('click', function(){
        $('.post-wrap, html').removeClass('active');

    });


    // btn shops-menu (goods sp tff follower conatact)   
    $('.shop-goods').on('click', function(){
        $('.top-memu__list-item').removeClass('active');
        $(this).addClass('active');
        $('.shop-block').removeClass('active');
        $('.view').removeClass('active');
        $('.shops-goods').addClass('active');
        $('.inner-menu__right').removeClass('active');
    });

    $('.shop-sp').on('click', function(){
        $('.top-memu__list-item').removeClass('active');
        $(this).addClass('active');
        $('.shop-block').removeClass('active');
        $('.view').removeClass('active');
        $('.inner-menu__right').addClass('active');
    });

    $('.shop-tff').on('click', function(){
        $('.top-memu__list-item').removeClass('active');
        $(this).addClass('active');
        $('.shop-block').removeClass('active');
        $('.view').removeClass('active');
        $('.inner-menu__right').addClass('active');
    });

    $('.shop-followers').on('click', function(){
        $('.top-memu__list-item').removeClass('active');
        $(this).addClass('active');
        $('.shop-block').removeClass('active');
        $('.view').removeClass('active');
        $('.inner-menu__right').addClass('active');
    });

    $('.shop-contact').on('click', function(){
        $('.top-memu__list-item').removeClass('active');
        $(this).addClass('active');
        $('.shop-block').removeClass('active');
        $('.shops-contacts').addClass('active');
        $('.view').addClass('active');
        $('.inner-menu__right').addClass('active');
    });

    
    $('.filter-dopClass').on('click', function(){
        $('.filter-wrap').toggleClass('active');
    });

});




document.addEventListener('DOMContentLoaded', function() {


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
            this.parentElement.style.overflow = "visible";
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
            select.style.overflow = "hidden";
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
    
    
    
    
    // оформление заказа ordering
    
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
    
    
    
    // Юридическая информация 
    
    let shopInfo = document.querySelector('.shops-contacts__title');
    let infoText = document.querySelector('.shops-contacts__text');
    if (shopInfo) { //  чтобы на других страницах не было ошибки, т.к. данного элемента не будет
        shopInfo.onclick = function() {
            infoText.classList.toggle('active');
            this.classList.toggle('active');
        }
    }
    
    
    // Складывание баннера в белую полоску на shops-inner
    
    let shopsItem = document.querySelector('.shops-itemJs') // весь блок с баннером
    let shopsTop = document.querySelector('.item-shops')    // название магаз кнопка в баннере
    let scrollMenu = document.querySelector('.scroll-menu') // мой рейтинг в шапке
    let headerTop = document.querySelector('.header-shops') // название магаз кнопка в шапке
    let blockContent = document.querySelector('.shops-content') // весь блок с меню и карточками товара
    let menu = document.querySelector('.goods-menu') // меню
    let menuTop = document.querySelector('.top-memu') // меню: товары sp tff итд
    let filter = document.querySelector('.filter') // меню товары sp tff итд
    let blockCard = document.querySelector('.shops-inner-card') // блок с карточками товара
    
    function scrolShopsItem() {
        let topItem = shopsItem.getBoundingClientRect()
    
        if (document.body.getBoundingClientRect().top < -10) {
            scrollMenu.style.display = 'none'
            shopsTop.style.display = 'none'
        }
        if (topItem.top <= -180) {      
            shopsItem.style.height = '1px'
            headerTop.classList.add('active')
            blockContent.style.paddingTop = '450px'
            menu.classList.add('active')
            menuTop.classList.add('active')
            filter.classList.add('active3')  
            if (window.getComputedStyle(menu, null).getPropertyValue('display') == 'block') {
                blockCard.style.paddingLeft = '310px'
            }
            else { blockCard.style.paddingLeft = '0px' }
            
        }
        if (topItem.top >= -179) {
            shopsItem.style.display = 'block'
            headerTop.classList.remove('active')
            shopsItem.style.height = 'auto'
            blockContent.style.paddingTop = '0px'
            menu.classList.remove('active')
            menuTop.classList.remove('active')
            filter.classList.remove('active3')  
            blockCard.style.paddingLeft = '0px'
        }
        if (document.body.getBoundingClientRect().top > -10) {
            scrollMenu.style.display = 'block'
            shopsTop.style.display = 'flex'     
        }
        
         
    }
    if (shopsItem) {
        window.addEventListener('scroll', scrolShopsItem)
        window.addEventListener('resize', scrolShopsItem)
    }



})



