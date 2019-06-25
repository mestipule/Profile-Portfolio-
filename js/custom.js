// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    $("#demo01").animatedModal();
    $("#demo02").animatedModal2();
    $("#demo03").animatedModal3();
    $("#demo04").animatedModal4();
    $("#demo05").animatedModal5();
    $("#demo06").animatedModal6();
    $("#demo07").animatedModal7();
    $("#demo08").animatedModal8();
    $("#demo09").animatedModal9();
   
    // Contact Form 	
    var config = {
        apiKey: "AIzaSyBi6ahKUyVLMk8paMDhOrpTbLEE9dwQytI",
        authDomain: "myresume-2343e.firebaseapp.com",
        databaseURL: "https://myresume-2343e.firebaseio.com",
        projectId: "myresume-2343e",
        storageBucket: "",
        messagingSenderId: "1084806413897",
        appId: "1:1084806413897:web:1a4e9b1a24abbfdb"
    }
    firebase.initializeApp(config);
    var database = firebase.database();
    $("#contact-form #submit").on("click", function (event){
        console.log("enter submit");
        var name = $("#contact-form [name='name']").val().trim();
        var email = $("#contact-form [name='email']").val().trim();
        var phone = $("#contact-form [name='phone']").val().trim();
        var message = $("#contact-form [name='message']").val().trim();
        var newMessage = {
            name : name,
            email : email,
            phone : phone,
            message : message
        };
        database.ref().push(newMessage);
        $("#contact-form [name='name']").val("");
        $("#contact-form [name='email']").val("");
        $("#contact-form [name='phone']").val("");
        $("#contact-form [name='message']").val("");
        return false;
    });

});