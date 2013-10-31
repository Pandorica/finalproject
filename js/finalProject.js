$(document).ready(function(){
	$('.bar').click(function(){

		if($(this).hasClass('active_bar')){
			$(this).removeClass('active_bar');
		}
		else {
			$('.bar.active_bar').removeClass('active_bar');
			$(this).addClass('active_bar');
		}

	});

	$('#question_bar ul li#guest').click(function() {
	  handleQuestionBarClick($('#guest_bar'))
	})

	$('#question_bar ul li#host').click(function() {
	  handleQuestionBarClick($('#host_bar'))
	})

	$('#question_bar ul li#other').click(function() {
	  handleQuestionBarClick($('#other_bar'))
	})

	function handleQuestionBarClick($element){
		if($element.is(':visible')){
		  $element.slideUp();
        }
        else {
          if($('.select_bar:visible').length > 0){
          	$('.select_bar:visible').slideUp("slow", function(){
              $element.slideDown();		
          	});
          }
          else
          	$element.slideDown(); 
        }
	}

});