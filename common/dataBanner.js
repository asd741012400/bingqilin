

function sourceBanner( sources )
{

	yDataAjax( url+"kmc/api/home/inslideinfo" , "get" , {
		source : sources
	} ,function( data ){

		if( data.status == 0 )
		{
			
			$('.banner_img').html(`<p><a><img src="${data.data}" alt=""></a></p>`)
		}

	})
}

