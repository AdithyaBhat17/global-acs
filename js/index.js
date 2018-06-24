(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  // $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //     if (target.length) {
  //       $('html, body').animate({
  //         scrollTop: (target.offset().top - 48)
  //       }, 1000, "easeInOutExpo");
  //       return false;
  //     }
  //   }
  // });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

// scroll to..
$('a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'))

  if (target.length) {
    event.preventDefault()
    $('html, body').stop().animate({
      scrollTop: target.offset().top - 100
    }, 1000)
  }
})

// animatedmodal
!function(a){a.fn.animatedModal=function(n){function o(){m.css({"z-index":e.zIndexOut}),e.afterClose()}function t(){e.afterOpen()}var i=a(this),e=a.extend({modalTarget:"animatedModal",position:"fixed",width:"100%",height:"100%",top:"0px",left:"0px",zIndexIn:"9999",zIndexOut:"-9999",color:"#39BEB9",opacityIn:"1",opacityOut:"0",animatedIn:"zoomIn",animatedOut:"zoomOut",animationDuration:".6s",overflow:"auto",beforeOpen:function(){},afterOpen:function(){},beforeClose:function(){},afterClose:function(){}},n),d=a(".close-"+e.modalTarget),s=a(i).attr("href"),m=a("body").find("#"+e.modalTarget),l="#"+m.attr("id");m.addClass("animated"),m.addClass(e.modalTarget+"-off");var r={position:e.position,width:e.width,height:e.height,top:e.top,left:e.left,"background-color":e.color,"overflow-y":e.overflow,"z-index":e.zIndexOut,opacity:e.opacityOut,"-webkit-animation-duration":e.animationDuration,"-moz-animation-duration":e.animationDuration,"-ms-animation-duration":e.animationDuration,"animation-duration":e.animationDuration};m.css(r),i.click(function(n){n.preventDefault(),a("body, html").css({overflow:"hidden"}),s==l&&(m.hasClass(e.modalTarget+"-off")&&(m.removeClass(e.animatedOut),m.removeClass(e.modalTarget+"-off"),m.addClass(e.modalTarget+"-on")),m.hasClass(e.modalTarget+"-on")&&(e.beforeOpen(),m.css({opacity:e.opacityIn,"z-index":e.zIndexIn}),m.addClass(e.animatedIn),m.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",t)))}),d.click(function(n){n.preventDefault(),a("body, html").css({overflow:"auto"}),e.beforeClose(),m.hasClass(e.modalTarget+"-on")&&(m.removeClass(e.modalTarget+"-on"),m.addClass(e.modalTarget+"-off")),m.hasClass(e.modalTarget+"-off")&&(m.removeClass(e.animatedIn),m.addClass(e.animatedOut),m.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",o))})}}(jQuery);

// animated modal demo

$("#demo01").animatedModal(
  {modalTarget:'animatedModal1'}
);
$("#demo02").animatedModal(
  {modalTarget:'animatedModal2'}
);
$("#demo03").animatedModal(
  {modalTarget:'animatedModal3'}
);
$("#demo04").animatedModal(
  {modalTarget:'animatedModal4'}
);

