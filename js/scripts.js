/* Punimet  */


$(document).ready(function(){
  var $grid = $('.punimet-wrap');
  $grid.isotope({
      // options
      filter: '*',
      itemSelector: '.punim',
      animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
  });
  $('.portfolio-nav>ul>li>a').click(function(){
      $('.portfolio-nav .selected').removeClass('.selected');
      $(this).addClass('.selected');
  });  
  var selektuar = $(this).attr('data-filter');
  $grid.isotope({
    filter: selectuar,
      animationOptions: {
        duration: 750,
          easing: 'linear',
          queqe: false
      }
  });
    return false;
});