function open(){
  $('.stick-wrap').each(function(){
    $(this).css({'margin-bottom':'0px'});
  });
  anime({
    targets: '#circle',
    scale: [0, 15, 8],
    opacity: [0.1, 0],
    easing: 'easeInCirc',
    duration: 800
  });
  anime({
    targets: '#one',
    rotate: '45deg',
    duration: 800,
    easing: 'easeOutExpo',
    backgroundColor: '#AB3958'
  });
  anime({
    targets: '#two',
    rotate: '135deg',
    duration: 800,
  });
  anime({
    targets: '#three',
    rotate: '45deg',
    duration: 800,
    easing: 'easeOutExpo',
    backgroundColor: '#AB3958'
  });
  anime({
    targets: '.third-right',
    translateX: 140,
    translateY: 80,
    rotate: '45deg',
    scale: 0,
    delay: 100,
    easing: 'easeOutQuint',
    duration: 800
  });
  anime({
    targets: '.third-left',
    translateX: '-200',
    translateY: '-40',
    rotate: '45deg',
    scale: 0,
    delay: 100,
    easing: 'easeOutQuint',
    duration: 1400
  });
  return true;
}

function close(){
  $('.stick-wrap').each(function(){
    $(this).css({'margin-bottom':'10%'});
  });
  anime({
    targets: '#one',
    rotate: '0',
    duration: 800,
    backgroundColor: '#D93958'
  });
  anime({
    targets: '#two',
    rotate: '0deg',
    duration: 800
  });
  anime({
    targets: '#three',
    rotate: '0deg',
    duration: 800,
    backgroundColor: '#783958'
  });
  anime({
    targets: '.third-right',
    translateY: [40,0],
    scale: 1,
    easing: 'easeOutExpo',
    delay: 150,
    duration: 800
  });
  anime({
    targets: '.third-left',
    translateY: ['-40',0],
    scale: 1,
    easing: 'easeOutExpo',
    delay: 100,
    duration: 800
  });
  anime({
    targets: '#circle',
    scale: 0,
    opacity: 0,
    easing: 'easeOutExpo',
    duration: 100
  });
  return false;
}

module.exports = {
  open: open,
  close: close
}
