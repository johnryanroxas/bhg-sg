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
        responsive: [
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }],
    });

    // Special Promo Slider Small
    $('.s-items').slick({
        arrows: false,
        autoplay: false,
        autoplaySpeed: 7000,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        }],
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
            responsive: [
                {
                breakpoint: 959,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        
            ],
        });
    });

    // Special Promo Sliders

    $('.special-promo-slider').slick({
        arrows: false,
        autoplay: false,
        autoplaySpeed: 7000,
        dots: true,
        appendDots: $('.paging'),
        slidesToShow: 1,
        slidesToScroll: 1,
    });


    // Next and Prev Arrow for Sliders
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

    // Dropdown Cart
    $('.actions .cart').click(function(e){
        e.preventDefault();
        $('.cart-dropdown').toggle();
    });
    $('.cart-dropdown .nav a').click(function(e){
        e.preventDefault();
        $('.cart-dropdown').toggle();
    });

    // Custom Select Input
    $('.f-select .selected .arrow').click(function(e){
        e.preventDefault();
        var a = $(this).closest('.f-select');
        a.find('.down').toggle();
        a.find('.up').toggle();
        a.find('.lists').toggle();
        a.toggleClass('active');
    });
    $('.f-select .lists div').click(function(e){
        e.preventDefault();
        var x = $(this),
            a = x.closest('.f-select'),
            b = x.text(),
            c = a.find('.selected span').text();

        a.find('.down').toggle();
        a.find('.up').toggle();
        a.find('.lists').toggle();
        a.find('.selected span').text(b);
        a.toggleClass('active');
    });

    // Custom Select Filter for Mobile
    $('.filters-mobile-btn').click(function(){
        var x = $(this);
        var a = x.closest('.filters-for-mobile-wrap');
        x.find('.down').toggle();
        x.find('.up').toggle();
        a.find('.filters-mobile').toggle();
        x.toggleClass('active');
    });

    // Custom Sorter Input
    $('.f-sorter').click(function(){
        var a = $(this);
        a.find('.down').toggle();
        a.find('.up').toggle();
    });

    // Custom Filter Dropdown Checkbox 
    $('.f-filter-drop .arrow').click(function(){
        var a = $(this).closest('.f-filter-drop');
        a.find('.down').toggle();
        a.find('.up').toggle();
        a.find('.lists').toggle();
    });

    // Custom Filter Range
    $('.f-filter-price .range input').change(function(){
        $(this).closest('.f-filter-price').find('.price').text($(this).val());
    });

    // Custom Filter Reset
    $('.f-reset-btn').click(function(){
        $('.filters input').prop("checked",false);
        $('.f-filter-price .range input').val(1000);
        $('.f-filter-price .price').text('1000');
    });

    // Mobile Menu {
    $('.mobile-menu').click(function(){
        $('.mobile-overlay').toggle();
        $('.mobile-overlay-dropdown').toggle();
    });
    $('.mobile-overlay').click(function(){
        $(this).toggle();
        $('.mobile-overlay-dropdown').toggle();
    });
    $('.close-mobile-menu').click(function(){
        $('.mobile-overlay').toggle();
        $('.mobile-overlay-dropdown').toggle();
    });
    $('.mobile-overlay-dropdown .pml').click(function(e){
        var x = $(this);
        if(x.attr('href') == '') {
            e.preventDefault();
            $('.mobile-overlay-dropdown .parent-menu').toggle();
            x.closest('.parent-menu').toggleClass('active');
            x.toggleClass('active');
            x.closest('.parent-menu').find('.sub-menu').toggle();
        }
        
    });
    $('.mobile-overlay-dropdown .sml').click(function(e){
        var x = $(this);
        if(x.attr('href') == '') {
            e.preventDefault();
            x.closest('.parent-menu').find('.sub-menu-child').hide();
            x.closest('li').find('.sub-menu-child').toggleClass('active');
            x.toggleClass('active');
        }
        
    });


    // Product Individual Page
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.product-details-btn button.btn, .featured-item-box button.btn').click(function () {
        $(this).toggleClass("btn-clicked");
    });

    // Checkout Page
    $('.enable-save-additional-add').click(function(){
        if($(this).is(':checked')) {
            $('.check-field.sub-level').css('display','flex');
        } else {
            $('.check-field.sub-level').css('display','none');
        }
    });

    $('.vachour .content').click(function(){
        var x = $(this);
        if(x.hasClass('active')) {
            x.toggleClass('active');
            $('.vachour').find('.more-detail').hide();
            x.find('input').prop('checked', false);
        } else {
            $('.vachour').find('.more-detail').hide();
            $('.vachour .content').removeClass('active');
            $('.vachour input').prop('checked', false);
            x.closest('.vachour').find('.more-detail').toggle();
            x.addClass('active');
            x.find('input').prop('checked', true);
        }
    });

    //custom accordion
    
    $('#product-individual-page div#tabs-section.mobile .tabs .tabs-nav ul li .accordion').hide(); 

    $('#product-individual-page div#tabs-section.mobile .tabs .tabs-nav ul li').click(function() {

        $('#product-individual-page div#tabs-section.mobile .tabs .tabs-nav ul li .accordion').slideUp();    
        $(this).find(".accordion").slideToggle();  
        $(this).find(".accordion").toggleClass("active");
               
        return false;
    });


});

