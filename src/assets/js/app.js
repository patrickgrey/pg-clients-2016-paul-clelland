$(document).foundation();
//offset() measures how far down the sticky element is from the top of the window
var stickyTop = $(".sticky").offset().top;

//whenever the user scrolls, measure how far we have scrolled
//
//NEED TO DEBOUNCE THIS!!!
$(window).scroll(function() {
  var windowTop = $(window).scrollTop();

  //check to see if we have scrolled past the original location of the sticky element
  if (windowTop > stickyTop) {

    //if so, change the sticky element to fised positioning
    $(".sticky").addClass("stuck");
  } else {
    $(".sticky").removeClass("stuck");
  }
});
