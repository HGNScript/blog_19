$(function(){
	// swiper初始化
	 var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });


	 // wow初始化
	var wow=new WOW({
		animateClass:'animated',
	});
	wow.init();



/*  $(".list li").click (function(){
      $(this).addClass("active");
      $('.list li').not($(this)).removeClass("active");
  })
*/
    $('.list li').mouseenter(function(){
        $(this).children("span").animate({height:"100%"},200);
    })

    $('.list li').mouseleave(function(){
        $('.list li').children("span").animate({height:0},100);
    })


})	

