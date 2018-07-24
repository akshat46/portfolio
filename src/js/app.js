console.log(
  (() => 'ES6 Bundle ok')()
);

var particles = require("./particles");
var project_animations = require("./project_animations");
var burger = require("./burger");
var nav = require("./nav");

var nav_collapsed = false;
var burger_open = burger.open();
var i = 0;
var alerted = false;
$('#attention-overlay').hide();

size_alert();

function size_alert(){
  $(document).ready(function(){
    var body = $(window);
    if((body.width() < 400 || body.height() < 600) && !alerted){
      $('#attention-overlay').show();
      console.log('here inside');
      alerted = true;
    }
  });
}

$(window).resize(function(){
  size_alert();
})

$('#attention-button').click(function(){
  $('#attention-overlay').hide();
})

$(function() {
    var $body = $(document.body);
    $body.bind('scroll', function() {
        // "Disable" the horizontal scroll.
        if ($body.scrollLeft() !== 0) {
            $body.scrollLeft(0);
        }
    });

});

function first_animation(){
  if(i>0){return false;}
  else{return true;}
}

$('#burger').click(function(){
  if(!burger_open){
    burger_open = burger.open();
    nav_collapsed = nav.expand();
  }
  else{
    burger_open = burger.close();
    nav_collapsed = nav.collapse(first_animation());
    i += 1;
  }
});

$(document.body).scroll(function(){
  if($(document.body).scrollTop() > 500 && first_animation()){
    nav_collapsed = nav.collapse(first_animation());
    burger_open = burger.close();
    i+=1;
  }
});

//document.body.style.overflow = 'hidden';

(function($) {
  $.fn.goTo = function() {
    var difference = Math.abs($(document.body).scrollTop() - $(this).offset().top);
    if(difference > 500){
      nav_collapsed = nav.collapse(first_animation());
      burger_open = burger.close();
      i+=1;
    }
    $('html, body').animate({
      scrollTop: $(document.body).scrollTop() + $(this).offset().top + 'px'
    }, 2000, 'easeInOutExpo');
    return this; // for chaining...
  }
})(jQuery);

//TODO: scroll to project when clicked
// listeners TODO: turn into functions to be reused for arrows
$(".nav-element:nth-child(1)").click(function(){
  console.log('about-clicked: ' + $('#bio-wrapper').offset().top);
  $('#bio-wrapper').goTo();
});
$(".nav-element:nth-child(2)").click(function(){
  console.log('skills-clicked: ' + $('#skills-wrapper').offset().top);
  $('#skills-wrapper').goTo();
});
$(".nav-element:nth-child(3)").click(function(){
  console.log('projects-clicked: ' + $('#project').offset().top);
  $('#project').goTo();
});
$(".nav-element:nth-child(4)").click(function(){
  // scroll_to("#contact");
});

particles.set_particles("triangle-overlay2"); // must be at end
