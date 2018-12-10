$(document).ready(function(){
          
          $("#carouselExampleIndicators").on("slide.bs.carousel", function(event) {
            $(".barra", this)
              .removeClass("anima").css("width", "0%");
          }).on("slid.bs.carousel", function (event) {
            $(".barra", this)
              .addClass("anima").css("width", "100%");
          });

          $(".barra", "#carouselExampleIndicators").css("width", "100%");


          $(window).scroll(function() {
            if ($(".navbar").offset().top > 50) {
              $(".navbar-fixed-top").addClass("opaque");
            } else {
              $(".navbar-fixed-top").removeClass("opaque");
            }
          });
        })


