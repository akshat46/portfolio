var animate_arrow = anime({
  targets: '.arrow',
  duration: 800,
  loop: true,
  autoplay: false,
  left: ['-85%', 0],
});

function slide_horz(target, duration, easing, offs=0, slide_amount=[], opacity_amount=[1,1]){
  var sf = {
    targets: target,
    left: slide_amount,
    opacity: opacity_amount,
    duration: duration,
    easing: easing,
    autoplay: false,
    offset: offs,
  };
  return sf;
}

function slide_vert(target, duration, easing, offs=0, slide_amount=[], opacity_amount=[1,1]){
  var sf = {
    targets: target,
    translateY: slide_amount,
    duration: duration,
    opacity: opacity_amount,
    easing: easing,
    autoplay: false,
    offset: offs,
  };
  return sf;
}

function scale(target, duration, easing, offs=0, scale_amounts){
  var sc = {
    targets: target,
    scale: scale_amounts,
    duration: duration,
    easing: easing,
    autoplay: false,
    offset: offs,
  }
  return sc;
}

//animate background with variable on/off
function animate_overlays(on, selector){
  var overlay_timeline = anime.timeline();
  if(on){
    overlay_timeline
      .add(slide_horz(selector.concat('#project-transition-overlay'), 2000, 'easeInOutQuart', 0,['100%', 0]))
      .add(slide_horz(selector.concat('.project-element-box'), 2000, 'easeInOutQuart', 0,'-100%'))
      .add(slide_horz(selector.concat('#project-detail-background'), 2000, 'easeOutQuart', '-=1000', ['100%', 0]))
      .add(scale(selector.concat('#project-detail-background'), 1000, 'easeInOutQuart', '-=500', [0.7, 1]))
      .add(slide_vert(selector.concat('#project-detail-background .project-preview-landscape-enlarged'), 800, 'easeOutCirc', '-=500', ['60%', 0], [0, 1]))
      .add(slide_vert(selector.concat('#project-detail-background .project-title'), 600, 'easeOutQuart', '-=600', ['60%', 0], [0, 1]))
      .add(slide_vert(selector.concat('.project-description .align-left'), 400, 'easeOutCirc', '-=500', ['60%', 0], [0, 1]))
      .add(slide_horz(selector.concat('#project-detail-background .arrow-wrapper'), 2000, 'easeOutQuart', '-=1000', ['100%', '5%'], [0,1]));
  }
  else{
    overlay_timeline
      .add(scale(selector.concat('#project-detail-background'), 1000, 'easeInOutQuart', 0, [1, 0.7]))
      .add(slide_vert(selector.concat('#project-detail-background .project-preview-landscape-enlarged'), 800, 'easeOutCirc', '-=1000', [0, 0], [1, 0]))
      .add(slide_vert(selector.concat('#project-detail-background .project-title'), 600, 'easeOutQuart', '-=800', [0, 0], [1, 0]))
      .add(slide_vert(selector.concat('.project-description .align-left'), 400, 'easeOutCirc', '-=600', [0, 0], [1, 0]))
      .add(slide_horz(selector.concat('#project-detail-background .arrow-wrapper'), 200, 'easeOutQuart', '-=1000', ['5%', '5%'], [1, 0]))
      .add(slide_horz(selector.concat('#project-detail-background'), 1500, 'easeInQuart', '-=1000', [0, '100%']))
      .add(slide_horz(selector.concat('.project-element-box'), 1500, 'easeInOutQuart', 0, '0'))
      .add(slide_horz(selector.concat('#project-transition-overlay'), 1500, 'easeInOutQuart', '-=700',[0, '100%']));
  }
  overlay_timeline.play();
}

function mouseover_trigger(){
  animate_arrow.play();
}

function mouseleave_trigger(){
  animate_arrow.pause();
}

$(".project-element-box").hover(function(){
  mouseover_trigger();
});

$(".project-element-box").mouseleave(function(){
  mouseleave_trigger();
});

$("#Uniride-Web .project-element-box").click(function(event){
  $(document.body).css({'overflow-y': 'hidden'});
  animate_overlays(true, '#Uniride-Web ');
});

$("#Uniride-Android .project-element-box").click(function(event){
  $(document.body).css({'overflow-y': 'hidden'});
  animate_overlays(true, '#Uniride-Android ');
});

$('#Uniride-Web #project-detail-background .arrow-wrapper').click(function(){
  console.log($(this).parent());
  $(document.body).css({'overflow-y': 'auto'});
  animate_overlays(false, '#Uniride-Web ');
})

$('#Uniride-Android #project-detail-background .arrow-wrapper').click(function(){
  console.log($(this).parent());
  $(document.body).css({'overflow-y': 'auto'});
  animate_overlays(false, '#Uniride-Android ');
})

function tilt_parallax(target){
  VanillaTilt.init(document.querySelector(target), {
    max: 10,
    speed: 500,
    scale: 0.97,
    transition: true,
    perspective: 1000,
    reverse: true,
    easing: "cubic-bezier(.18,.39,.59,.87)",
  });
}

tilt_parallax("#Uniride-Web .project-element-box");
tilt_parallax("#Uniride-Android .project-element-box");
