$(function(){

    // Homepage Main Banner
    $('#home-banner').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
        customPaging: function(slick,index) {
            return '<button class="home-banner-dot"></button>';
        },
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // Promo Slider
    $('#home-promo .products').slick({
        arrows: false,
        autoplay: false,
        autoplaySpeed: 7000,
        customPaging: function(slick,index) {
            return '<button class="promo-dot"></button>';
        },
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
    });

    // Quantity input to accept number only
    $.fn.inputFilter = function(inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
          if (inputFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
          } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
          } else {
            this.value = "";
          }
        });
    };

    $(".q-input-num").inputFilter(function(value) {
        return /^\d*$/.test(value);
    });
    
    //Increment and Decrement quantity
    $('.q-plus').on('click',function(){
        var x = $(this).closest('.q-input').find('.q-input-num');
        var a = parseInt(x.val());
        var b = a + 1;
        x.val(b);
    });

    $('.q-minus').on('click',function(){
        var x = $(this).closest('.q-input').find('.q-input-num');
        var a = parseInt(x.val());
        var b = a - 1;
        if(b == 0 || b < 0) {
            x.val(0);
        } else {
            x.val(b);
        }
        
    });

    // Tabs
    $('.tabs-nav a').on('click',function(e){
        e.preventDefault();
        var a = $(this),
            b = a.attr('href'),
            c = b + ' .product-list .items';
        
        a.closest('.tabs-nav').find('li').removeClass('active');
        a.closest('li').addClass('active');

        a.closest('.tabs').find('.tab').removeClass('active');
        a.closest('.tabs').find(b).addClass('active');

        $(c).slick('setPosition');

    });

    // Tabs Slides
    $('.tabs-content .tab').each(function(){
        var a = $(this).attr('id'),
            b = '#'+a+' .product-list .items';
        $(b).slick({
            arrows: false,
            autoplay: false,
            autoplaySpeed: 7000,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 4,
        });
    });

    $('.next').click(function(){
        var x = $(this);
        var parent = x.parent().parent().attr('class');
        if( parent == 'product-list'){
            var a = x.closest('.tab').attr('id'),
                b = '#' + a + ' .product-list .items';
            $(b).slick('slickNext');
        } else if (parent == 'special-promo-slider-wrapper') {
            var d = x.closest('.special-promo-slider-wrapper').find('.special-promo-slider');
            $(d).slick('slickNext');
        } else {
            c = x.closest('.items-slider').find('.s-items');
            $(c).slick('slickNext');
        }
    });

    $('.prev').click(function(){
        var x = $(this);
        var parent = x.parent().parent().attr('class');
        console.log(parent);
        if( parent == 'product-list'){
            var a = x.closest('.tab').attr('id'),
                b = '#' + a + ' .product-list .items';
            $(b).slick('slickPrev');
        } else if (parent == 'special-promo-slider-wrapper') {
            var d = x.closest('.special-promo-slider-wrapper').find('.special-promo-slider');
            $(d).slick('slickPrev');
        } else {
            c = x.closest('.items-slider').find('.s-items');
            $(c).slick('slickPrev');
        }
    });

    // Special Promo Slider Small
    $('.s-items').slick({
        arrows: false,
        autoplay: false,
        autoplaySpeed: 7000,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 6,
    });

    $('.special-promo-slider').slick({
        arrows: false,
        autoplay: false,
        autoplaySpeed: 7000,
        dots: true,
        appendDots: $('.paging'),
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // Dropdown Cart
    $('.actions .cart').click(function(e){
        e.preventDefault();
        $('.cart-dropdown').toggle();
    });
    $('.cart-dropdown .nav a').click(function(e){
        e.preventDefault();
        $('.cart-dropdown').toggle();
    });
});

