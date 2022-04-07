$(function(){
    $('.burar_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,

        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            }
          },
        ]
      });
})