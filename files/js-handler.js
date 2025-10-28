$(document).ready(function(){
	/* MENU SCRIPT */
	$('#menu-wrap').prepend('<div id="menu-trigger">MENU</div>');
	$('#menu-trigger').on('click', function(){
	  $('#menu').slideToggle();
	});
	if($(window).width() > 1023){
		/* SEARCH */
		$('.search a').click(function(){
			$('.search-div').animate({top:'0'}, 500, function(){
				$(this).find('input[type="text"]').focus();	
			});
		});
		$('.search-div input[type="text"]').blur(function(){
			$(this).parent().animate({top:'-138px'}, 400);
		});	
	}
	/* TABS CLICK */
	$('.button-wrapper #tab1').addClass("tab-active");
	$('.button-wrapper span').click(function(){
		$scope = $(this);
		openTab($(this).attr("id"), $scope);
	});
	function openTab(tabname, $scope){
		$clicked = tabname;	
		$scope.parents('.button-wrapper').find('span').removeClass("tab-active").addClass("tab-inactive");
		$scope.removeClass("tab-inactive").addClass("tab-active");
		$('.slide-down-hack').show();
		$scope.parents('.tab-panel').find('.tab-div').stop().fadeOut(0);
		if($(window).width() > 767){
			$('.tab-panel').find('.'+$clicked).css({"opacity":"0"}).stop().slideDown(400).animate({opacity:1}, {queue:false, duration:500});	
			$('.slide-down-hack').hide();
		} else {
			$('.tab-panel').find('.'+$clicked).stop().fadeIn(500);
			$('.slide-down-hack').hide();	
		}	
	}
	/* GALLERY HOVER */
	var gh = $('.outer').height();
	var gh2 = gh * -1;
	var gh2px = gh2 + 'px';
	$imgwidth = $('.outer .full-wide').width() + 'px';
	$('.outer').find('.overlay').css({"top":gh2px, "width":$imgwidth});
	if($(window).width() > 1023){
		$('.outer').mouseenter(function(){
			$(this).find('.overlay').stop().animate({
				top:"0"
			}, 200);		
		});
		$('.outer').mouseleave(function(){
			$(this).find('.overlay').stop().animate({
				top:gh2px
			}, 200);		
		});	
	}
	if($(window).width() < 1023){
		$('.outer').css({"cursor":"pointer"});
		$('.outer').click(function(){
			$(this).find('.overlay').stop().animate({
				top:"0"
			}, 200);		
		});
	}
	/* CART INCREMENT/DECREMENT */
	$('.inc').click(function(){
		$cartSpan = parseInt($('.cart-quantity span').html());
		$cartSpan++;
		$cartIncrement = $cartSpan;
		$('.cart-quantity span').html($cartIncrement);
	});
	$('.dec').click(function(){
		$cartSpan = parseInt($('.cart-quantity span').html());
		$cartSpan--;
		$cartDecrement = $cartSpan;
		if($cartDecrement < 1){
			$cartDecrement = 1;	
		}
		$('.cart-quantity span').html($cartDecrement);
	});
	/* SPRY */
	$open = $('.panel').find('.acc-open');
	$open.parent('div').find('.panel-heading').addClass("up");
	$('.panel-heading').click(function(){
		$(this).each(function(){
			$('.panel-heading').removeClass("up").addClass("down");					  
		});
		setTimeout(function(){
			$open = $('.panel').find('.acc-open');
			$open.parent('div').find('.panel-heading').removeClass("down").addClass("up");	
		}, 10);					   
	});
});