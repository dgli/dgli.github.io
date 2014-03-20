/*
 * slide in slide out
 *
 */
$(document).ready(function() {

  var slideWidth = $('#pageslide').outerWidth(); //grab width of the sliding menu so that this can be controlled in the css only

  $('.slideIt, #pageslide a.close, #one').on("click", function(){  //click function
    $('.slideIt').toggleClass('active'); //toggle the active close vs open icon
    
    if($('#pageslide').is(':visible')) {  //if visible then hide it 
      $('#pageslide').animate({
        left: '-'+slideWidth
      }, 400, function(){
        $('#pageslide').hide();
      } );
      $('.wrapper').animate({
        marginLeft: '0'
      }, 400 );
      $('.slideIt span').text('☰');
    } 
    else{                                //else show it
      $('#pageslide').show().animate({
        left: '0'
      }, 400 );
      $('.wrapper').animate({
        marginLeft: slideWidth
      }, 400 );
    }
  });


  /*
   *
   * PROJECT TILES
   *
   */
  if(this.title == "Projects"){
    $('.slideIt').click();
  }



	$("div.tile").mouseenter(function() {
		$('.tile').css("height", "12%");
		$(this).css({"height":"20%", 

      "filter": "grayscale(0%)",
      "-webkit-filter": "grayscale(0%)",
      "-moz-filter": "grayscale(0%)",
      "-ms-filter": "grayscale(0%)",
      "-o-filter": "grayscale(0%)",

    });
	})

	$("div.tile").mouseleave(function(){
		$('.tile').css({"height":"12.5%", 

      "filter": "grayscale(100%)",
      "-webkit-filter": "grayscale(100%)",
      "-moz-filter": "grayscale(100%)",
      "-ms-filter": "grayscale(100%)",
      "-o-filter": "grayscale(100%)",

    });
	});


  /*
   * BACKGROUND CHANGE
   */
  $('#one').hover(function(){
    $('#image_code').stop();

    $('#image_code').animate({"z-index":"1"}, 0);
    $('#image_code').animate({"opacity":"1"}, 250);


  },function(){
    $('#image_code').stop();

    $('#image_code').animate({"z-index":"0"}, 0);
    $('#image_code').animate({"opacity":"0"}, 250);
  });


  $('#two').hover(function(){
    $('#image_about').stop();

    $('#image_about').animate({"z-index":"1"}, 0);
    $('#image_about').animate({"opacity":"1"}, 250);


  },function(){
    $('#image_about').stop();

    $('#image_about').animate({"z-index":"0"}, 0);
    $('#image_about').animate({"opacity":"0"}, 250);
  });


  $('#three').hover(function(){
    $('#image_starcraft').stop();

    $('#image_starcraft').animate({"z-index":"1"}, 0);
    $('#image_starcraft').animate({"opacity":"1"}, 250);


  },function(){
    $('#image_starcraft').stop();

    $('#image_starcraft').animate({"z-index":"0"}, 0);
    $('#image_starcraft').animate({"opacity":"0"}, 250);
  });

  /*
  REDIRECTION!
  */

  $(".tile").click(function(){
    $(iframe).attr('src', locations[++i % len]);
  })
});


