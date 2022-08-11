$(document).ready(function(){

   $('#big_slider').slick(
      {
         dots: false,
         infinite: true,
         speed: 300,
         slidesToShow: 1
      }
   );

   const pages = $("#big_slider").slick("getSlick").slideCount;
   $(".number_pages").text(pages);

   $('.s-next').on('click', ()=> {
      $(".slick-next").click();
      $(".current_page").text(getCurrentPage());
   });

   $('.s-prev').on('click', ()=> {
      $(".slick-prev").click();
      $(".current_page").text(getCurrentPage());
   });

   $('#big_slider').on('swipe', () => {
      $(".current_page").text(getCurrentPage());
    });

   const getCurrentPage = () => {
      const index = document.querySelector('#big_slider .slick-active')
      .getAttribute('data-slick-index');

      let currentPage  = parseInt(index) + 1;

      if(currentPage >= 10) {
         return currentPage;
      }
      else {
         return "0" + currentPage;
      }
   }

   $('#smoll_slider').slick({
      infinite: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 3 
   });

 });
    