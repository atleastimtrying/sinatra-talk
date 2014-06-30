$(function(){
  var position = 1;
  var previousSlide, nextSlide;
  
  var animate = function(){
    previousSlide.hide("slide", { direction: "left" }, 300, function(){
      nextSlide.show("slide", { direction: "right" }, 300);
    });
  };

  var assignSlides = function(previousIndex, nextIndex){
    previousSlide = $('.slide:eq(' + previousIndex + ')');
    nextSlide = $('.slide:eq(' + nextIndex + ')');
  };

  var moveSlide = function(forwards){
    var previous = position;
    position = calculateNext(forwards);
    assignSlides(previous, position);
    animate();
  };

  var calculateNext = function(forwards){
    var next = position - 1;
    if(position == 0){
      next = $('.slide').length - 1;
    }
    if(forwards){
      next = position + 1;
      if(position == $('.slide').length - 1){
        next = 0;
      }
    }
    return next;
  };
  
  var forwardKey = function(event){
    return (event.keyCode == 32);
  };

  var keyUp = function(event){
    moveSlide(forwardKey(event));
  };
  $('.slide').hide();
  $(window).on('keyup', keyUp);
});