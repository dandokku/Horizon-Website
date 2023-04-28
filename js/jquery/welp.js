$(function(){

    $('.cookies-section').delay(2000).slideDown()
    // $(".overlay").removeClass('hidden');

    $('#btn1').click(function(){
      $('.cookies-section').slideUp()
      $(".thanks-section").delay(1000).fadeIn().delay(2000).slideUp();
      // $(".overlay").addClass('hidden');
    })

    $("#btn2").click(function(){
      $(".cookies-section").slideUp()
      $(".sorry-section").delay(1000).fadeIn().delay(2000).fadeOut();
      // $(".overlay").addClass('hidden');
    })

    $(".subscribe-btn").click(function(){
      $(".sub-section").delay(1000).fadeIn().delay(2000).fadeOut();
    })

  })