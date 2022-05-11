//Set count for total number of sections
$('.section-count').text($('.section').size());

//Increase counter i when section passes
$('.section').each(function (i,el) {
  var waypoint = new Waypoint({
	 element: el,
	 offset: '50%',
	 handler: function (direction) {
		if (direction == 'down') {
			 $('.section-current').text(i+1);
		} else {
			 $('.section-current').text(i);
		}
	 }
  })
});

//Scroll back to top
var $toplink = $('.page-count');
$toplink.click(function() {
    $('html, body').animate({
        scrollTop: $('body').offset().top
    }, 500);
});

//Full Height Sections
//http://stackoverflow.com/questions/9214040/how-to-properly-set-the-100-div-height-to-match-document-window-height
$(function(){
	 var fullHeight = $('.section');
    var windowH = $(window).height();
    var wrapperH = fullHeight.height();
    if(windowH > wrapperH) {                            
        fullHeight.css({'min-height':($(window).height())+'px'});
    }                                                                               
    $(window).resize(function(){
        var windowH = $(window).height();
        var wrapperH = fullHeight.height();
        var differenceH = windowH - wrapperH;
        var newH = wrapperH + differenceH;
        //var truecontentH = $('#truecontent').height();
        //if(windowH > truecontentH) {
            fullHeight.css('min-height', (newH)+'px');
        //}

    })          
});

//Example Work Popups
$('.section-popup').each(function (i,el) {
  var waypoint = new Waypoint({
	 element: el,
	 offset: '50%',
	 handler: function (direction) {
		if (direction == 'down') {
			$('.section-popup .pop-item').addClass('popped'); 
		}
	 }
  })
});

//Fancy Grid Start Animation
$('.fancy-grid-section').each(function (i,el) {
  var waypoint = new Waypoint({
	 element: el,
	 offset: '75%',
	 handler: function (direction) {
		if (direction == 'down') {
			 //Grid Loading Animation
			//https://codepen.io/tjbenton21/pen/LEpqmg?editors=0100
			(function(){ 
			  var speed = 2500,
					containers = document.getElementsByClassName("u-fancy-load");
			  for(var c = 0; c < containers.length; c++){
				 var container = containers[c],
					  children = container.children;

				 if(!container.classList.contains("delay-set")){
					container.classList.add("delay-set");

					for(var i = 0; i < children.length; i++){
					  var child = children[i],
							childOffset = child.getBoundingClientRect(),
							offset = childOffset.left*0.8 + childOffset.top,
							delay = parseFloat(offset/speed).toFixed(2);

					  child.style.webkitTransitionDelay = delay + "s";
					  child.style.transitionDelay = delay + "s";
					}
				 }
				 container.classList.add("u-fancy-load--in");
			 }
			})();
		}
	 }
  })
});





//Hero Background Fadein
$('.bg-shell').ready(function() {
    $('.bg-fadein').fadeIn(750);
});


//Fade words in Footer -- Waypoints
$('footer').each(function (i,el) {
  var waypoint = new Waypoint({
	 element: el,
	 offset: '50%',
	 handler: function (direction) {
		if (direction == 'down') {
			 $('.rise-up').addClass('seen'); 
		}
	 }
  })
});