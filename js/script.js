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


  $(".menu__link--dropdown").click(function(){
      $(".menu__dropdown").toggle(function(){
        $(".menu__dropdown").insertAfter(".menu")
      })
      $(".search__button").toggleClass("search__button--toggle")
  })

