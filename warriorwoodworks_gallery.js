// 'use strict';

// $(function() {

//     //settings for slider
//     var width = 720;
//     var animationSpeed = 1000;
//     var pause = 3000;
//     var currentSlide = 1;

//     //cache DOM elements
//     var $slider = $('#slider');
//     var $slideContainer = $('.slides', $slider);
//     var $slides = $('.slide', $slider);

//     var interval;

//     function startSlider() {
//         interval = setInterval(function() {
//             $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
//                 if (++currentSlide === $slides.length) {
//                     currentSlide = 1;
//                     $slideContainer.css('margin-left', 0);
//                 }
//             });
//         }, pause);
//     }
//     function pauseSlider() {
//         clearInterval(interval);
//     }

//     $slideContainer
//         .on('mouseenter', pauseSlider)
//         .on('mouseleave', startSlider);

//     startSlider();


// });


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
// }

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}
