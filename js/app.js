
$(document).ready(function(){
      

// hero carousel    
  $("#carouselHome").on("slide.bs.carousel", function(event) {
    $(".barra", this)
      .removeClass("anima").css("width", "0%");
  }).on("slid.bs.carousel", function (event) {
    $(".barra", this)
      .addClass("anima").css("width", "100%");
  });

  $(".barra", "#carouselHome").css("width", "100%");



})
$('#btn-mercadoLivre').click(function(){
  $(this).attr('target', '_blank')
})

$('.caixa').mouseenter(function(){
    $(this).addClass('caixaMod')
})

$('.caixa').mouseleave(function(){
  $(this).fadeOut('fast', function(){
      $(this).removeClass('caixaMod')
  }).fadeIn('fast')
})