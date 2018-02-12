
nDataAjax( url+"kmc/api/home/conpanyinfo" , "get" , function( data ){

	if( data.status == 0 )
	{
		$('.about_content').html(data.data)
	}

})




