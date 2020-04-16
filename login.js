$(function(){
	$name = $('#full-name');
	$nameerror = $('#nameerror');
	
	$uid = $('#uid');
	$uiderror = $('#uiderror');
	
	$email = $('#email');
	$emailerror = $('#emailerror');
	
	$pass = $('#password');
	$passerror = $('#passerror');
	
	$('#submit_button').click(function(){
		
		$error = 0;
		$nameerror.hide();
		$uiderror.hide();
		$emailerror.hide();
		$passerror.hide();
		
		if(($nameval = $.trim($name.val())).length == 0)
		{
			$error = 1;
			$nameerror.show();
		}
		
		if(($uidval = $.trim($uid.val())).length == 0)
		{
			$error = 1;
			$uiderror.show();
		}
		else
		{
			$uidval = $uidval.replace(/\s+/g, '');
		}
		
		if(($emailval = $.trim($email.val())).length == 0)
		{
			$error = 1;
			$emailerror.show();
		}
		else if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test($emailval)))
		{
			$error = 1;
			$emailerror.show();
		}
		
		if(($passval = $.trim($pass.val())).length == 0)
		{
			$error = 1;
			$passerror.show();
		}
		
		if(!$error)
		{
			console.log($nameval);
			console.log($uidval);
			Cookies.set('name', $nameval);
			Cookies.set('uid', $uidval);
			
			console.log(Cookies.get('name'));
			
			location.href = 'profile.html';
		}
		
	});
});