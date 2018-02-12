





$('.select_city p').click((ev) => {

	ev.stopPropagation()
	$('.select_city ul').show()

});

$('.select_city ul').delegate('li', 'click', function(ev) {


	ev.stopPropagation();
	var cid = $(this).attr("cid"); 
	$('.select_city p').html( $(this).html()+"<i><</i>");
	$('.select_city p').attr( "cid" , cid );
	$('.select_city ul').hide()

	StoreCityList( cid )
});

$(document).click(() => {

	$('.select_city ul').hide()
});


$('.select_address .select_img').click(() => {

	var cid = $('.select_city p').attr( "cid" );
	var name = $('.select_address .select_input input').val()
	console.log( "cid---",cid)
	console.log( "name---",name)

	StoreCityList( cid , name )
});



nDataAjax( url+"kmc/api/menu/CityList" , "get" , function( data ){

	if( data.status == 0 )
	{

		$.each( data.data , function(index, val) {
			
			$('.select_city ul').append(`<li cid="${val.c_id}"><a>${val.c_name}</a></li>`)
		});


		var cid = $('.select_city ul li:first').attr("cid")
		$('.select_city p').html( $('.select_city ul li:first').html()+"<i><</i>");
		$('.select_city p').attr( "cid" , $('.select_city ul li:first').attr("cid") );

		StoreCityList( cid )

	}

})


function StoreCityList( cid , name )
{

	yDataAjax( url+"kmc/api/menu/StoreCityList" , "post" , {
		c_cityid : cid,
		c_name : name
	} ,function( data ){

		if( data.status == 0 )
		{

			$('.address_list').html("")


			if( data.data.length )
			{

				$.each( data.data , function(index, val) {
					
					$('.address_list').append(
						`<li cid="${val.c_id}">
							<h4>${val.c_name}</h4>
							<p>${val.c_address}</p>
							<a>电话：${val.c_tel}</a>
						</li>`)
					
				});

			}
			else
			{
				console.log(222)
				$('.address_list').html("暂无门店")
			}
			console.log( data )
		}

	})


}

