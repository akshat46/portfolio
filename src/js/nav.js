// right: -60%, rotate(60deg)
function collapse(first=false){
  var anim_nav = anime.timeline();
  if(first){
    anim_nav
    .add({
      targets: '#triangle',
      duration: 1500,
      delay: 200,
      translateY: '-80%',
      easing: [.2,-0.2,0,1],
    })
    .add({
      targets: '#triangle',
      duration: 2000,
      delay: 0,
      rotate: '70deg',
      translateY: '-80%',
      translateX: '77%',
      easing: [.2,-0.2,0,1],
      offset: '-=500'
    })
    .add({
      targets: '#burger',
      duration: 1500,
      rotate: '-130deg',
      easing: 'easeOutExpo',
      offset: '-=1300',
      complete: function(){
        $('#nav-bar').hide();
      }
    });
  }else{
    anim_nav
    .add({
      targets: '#nav-bar-2',
      opacity: 0,
      translateY: '-30',
      complete: function(){
        $('#nav-bar-2').css({'visibility': 'hidden'});
      }
    })
    .add({
      targets: '#triangle',
      duration: 1500,
      offset: '-=800',
      right: ['10%','-5%'],
      easing: [.2,-0.2,0,1],
    });
  }
  anim_nav.play();
  return true;
}

function expand(){
  var anim_nav = anime.timeline();
  anim_nav
  .add({
    targets: '#triangle',
    duration: 1500,
    delay: 200,
    right: ['-5%','10%'],
    // rotate: '0deg',
    easing: [.2,-0.2,0,1]
  })
  .add({
    targets: '#nav-bar-2',
    offset: '-=500',
    translateY: ['30', 0],
    easing: 'easeOutExpo',
    opacity: 1,
    update: function(){
      $('#nav-bar-2').css({'visibility': 'visible'});
    }
  });
  anim_nav.play();
  return false;
}

module.exports = {
  collapse: collapse,
  expand: expand
}
