$(function(){
	
	$('#profilecardname').text(Cookies.get('name'));
	$('#profilecarduid').text('@'+Cookies.get('uid'));
	
	$statslistitemcount = $('#statslistitemcount');
	
	$totalchars = $('#totalchars');
	
	$posttweetta = $('#posttweetta');
	
	$tweetscontainer = $('#tweetscontainer');
	
	$posttweetta.keypress(function(e){
		if (e.keyCode == 13 && !e.shiftKey)
		{
		  e.preventDefault();
		  return false;
		}
		
	});
	
	$posttweetta.keyup(function(e){
		$totchars = $(this).val().length;
		if($totchars <= 250)
			$totalchars.text($totchars);
		else
		{
			$totalchars.text('250');
			$(this).val($(this).val().substring(0, 250));
		}
	});
	
	$('#posttweetbut').click(function(){
		if(($taval = $.trim($posttweetta.val())).length > 0)
		{
			$tweetscontainer.prepend(tweetitem($taval));
			$posttweetta.val('');	
			$statslistitemcount.text(parseInt($statslistitemcount.text()) + 1);	
		}
	});
	
	$tweetscontainer.on('click', 'span.retweet', function(){
		$tweetstatscount = $(this).children('.tweetstatscount');
		$tweetstatscount.text(parseInt($tweetstatscount.text()) + 1);
		
		$tweetscontainer.prepend(tweetitem($tweetstatscount.closest('.tweetcontainer').find('p').text()));
		$statslistitemcount.text(parseInt($statslistitemcount.text()) + 1);	
	});
	
	$tweetscontainer.on('click', 'span.like', function(){
		$tweetstatscount = $(this).children('.tweetstatscount');
		if($(this).hasClass('red'))
		{
			$(this).removeClass('red');
			$tweetstatscount.text(parseInt($tweetstatscount.text()) - 1);
		}
		else
		{
			$(this).addClass('red');
			$tweetstatscount.text(parseInt($tweetstatscount.text()) + 1);
		}
	});
	
	function tweetitem($taval)
	{
		return '<li class="tweetcontainer">'+
					'<img class="tweetprofimg" src="http://3.bp.blogspot.com/-JCYefwq__2U/TxCfC3s1ZpI/AAAAAAAAKcM/u5mw7qPAL0w/s300-c/Camilla-Belle-6.jpg">'+
					'<span class="tweetprofname">'+Cookies.get('name')+'</span>'+
					'<span class="tweetprofuid">@'+Cookies.get('uid')+'</span>'+
					'<div class="ml58px">'+
						'<p style="margin: 0px;">'+$taval+'</p>'+
						'<div class="mt10px">'+
							'<span class="retweet tweetstats">'+
								'<i class="fa fa-retweet"></i>'+
								'<span class="tweetstatscount">0</span>'+
							'</span>'+
							'<span class="like tweetstats">'+
								'<i class="fa fa-heart-o"></i>'+
								'<span class="tweetstatscount">0</span>'+
							'</span>'+
						'</div>'+
					'</div>'+
				'</li>';
	}
});