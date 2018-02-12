yDataAjax( url+"kmc/api/product/getAll" , "get" , {
	pageIndex : 1,
	pageSize : 50
} ,function( data ){

	if( data.status == 0 )
	{


		$.each( data.data , function(index, val) {
			$('.product ul').append(
				`<li>
					<span><img src="${val.c_imageurl}" alt=""></span>
					<h6>${val.c_productname}</h6>
					<p>${val.c_producttitle}</p>
				</li>`)
		});

		console.log( data )

	}

})
