$("#scrollTop").click((
    ()=>{
      $('html, body').animate({
           scrollTop: $('#container').offset().top
      }, 500);
  }
  ))


  $(".search__button").click(()=>{
      $(".search").toggleClass("search--toggle")
  })