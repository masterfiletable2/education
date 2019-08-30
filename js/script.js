$("#scrollTop").click((
    ()=>{
      $('html, body').animate({
           scrollTop: $('#container').offset().top
      }, 500);
  }
  ))


  $(".search__toggler").click(()=>{
      $(".search__input").toggleClass("search--toggle")
      $(".search__button").toggleClass("search__button--toggle")
  })

