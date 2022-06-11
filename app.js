




// var btns = document.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }



let mask = $(".mask");

$(window).on("load", function(){
  mask.addClass("hide");
  setTimeout(() => {
   mask.remove();
    }, 600)
});


$(function() {

  let btns = $(".btn");
  for (var i = 0; i < btns.length; i++) {
    $(btns[i]).on("click", function() {
    let current = $(".active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

  // let mask = document.querySelector('.mask');

  // window.addEventListener('load', () => {
  //   mask.classList.add('hide');
  //   setTimeout(() => {
  //       mask.remove();
  //   }, 600)
  // });


  let header = $("#header");
  let info = $("#zaholovok");
  let infoH = info.innerHeight();
  let scrollPos = $(window).scrollTop();
  let nav = $("#nav");
  let navToggle = $("#navToggle");

  checkScroll(scrollPos, infoH);

  $(window).on("scroll  resize", function(){

      infoH = info.innerHeight();
      scrollPos = $(this).scrollTop();
      checkScroll(scrollPos, infoH);

  });

  function checkScroll(scrollPos, infoH){
      if( scrollPos > infoH ){
          header.addClass("fixed");
      } else{
          header.removeClass("fixed");
      }

  }

  $("[data-scroll]").on("click", function(event) {
      event.preventDefault();
      let elementId = $(this).data('scroll');
      let elementOffset = $(elementId).offset().top;
      nav.removeClass("show");
      $("html, body").animate({
          scrollTop: elementOffset
      },1000);

  });

    navToggle.on("click", function(event) {
      event.preventDefault();
      nav.toggleClass("show");


  });



});


