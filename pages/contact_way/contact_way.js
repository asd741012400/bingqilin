nDataAjax( url+"kmc/api/contact/GetList" , "get" , function( data ){

	if( data.status == 0 )
	{
		var contactWayData  = JSON.parse(data.data)[0];
		console.log( contactWayData )


		$('.contact_way_text ul').append(`<li style="background-image: url(${contactWayData.c_addressicon})" class="address">地址：${contactWayData.c_address}</li>`)
		$('.contact_way_text ul').append(`<li style="background-image: url(${contactWayData.c_telicon})" class="tel">电话：${contactWayData.c_tel}</li>`)
		$('.contact_way_text ul').append(`<li style="background-image: url(${contactWayData.c_emaiicon})" class="email">电子邮件：${contactWayData.c_email}</li>`)


	}

})



$('.submit_message span').click(() => {

	var username,email,phone,content;

	username = $('.name').val();
	email = $('.email').val();
	phone = $('.phone').val();
	content = $('.leave_word').val();

	if( username && content )
	{
	
		yDataAjax( url+"kmc/api/contact/msgAdd" , "post" , {
			c_username : username,
			c_email : email,
			c_phone : phone,
			c_content : content
		} , function( data ){

			if( data.status == 0 )
			{	

				inform( "提交成功" )

			}
			else
			{
				inform( "请刷新重试" )
				
			}

		})

	}
	else if( !username )
	{
		inform( "请输入姓名" )
	}
	else if( !content )
	{
		inform( "请输入内容" )
	}

})



function inform( text ){

	$('.inform').html( text )

	$('.inform').show();

	setTimeout(function(){
		$('.inform').hide();
	},1000)

}



