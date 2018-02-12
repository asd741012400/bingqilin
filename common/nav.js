nDataAjax( url+"kmc/api/home/menulist" , "get" , function( data ){

	if( data.status == 0 )
	{
	
		$.each( data.data, function(index, val) {

			if( val != 0 )
			{
				if( val.childrenlist.length == 0 )
				{
					$('.menu ul').append(`<li cid="${val.c_id}"><a href="${val.c_linkurl}">${val.c_title}</a></li>`)
				}
				else
				{
					$('.menu ul').append(`<li cid="${val.c_id}"><a href="javascript:;">${val.c_title}</a></li>`)
				}
				$('.menu ul li').eq(index).append("<div></div>")
				$.each( val.childrenlist , function(index2, val2) {
					$('.menu ul li').eq(index).find('div').append(
						`<p>
							<a href="${val2.c_linkurl}">${val2.c_title}</a>
							<em></em>
						</p>`)
				});
			}
			else
			{
				$('.menu ul').append(`<li cid="${val.c_id}"><a href="${val.c_linkurl}">${val.c_title}</a></li>`)
			}

		});


		var elemLi = null;
		switch( window.location.pathname )
		{
			case "/kmc/webui/pages/about/about.html":
				elemLi = forA( $('.menu ul li > a') , "品牌介绍" )
				elemLi.addClass('active');
				break;
			case "/kmc/webui/pages/contact_way/contact_way.html":
				elemLi = forA( $('.menu ul li > a') , "联系我们" )
				elemLi.addClass('active');
				break;	
			case "/kmc/webui/pages/product/product.html":
				elemLi = forA( $('.menu ul li > a') , "产品介绍" , "产品" )
				elemLi.addClass('active');
				break;
			case "/kmc/webui/pages/shop/shop.html":		
				elemLi = forA( $('.menu ul li > a') , "店铺展示" )
				elemLi.addClass('active');
				break;
			case "/kmc/webui/pages/menu/menu.html":
				elemLi = forA( $('.menu ul li > a') , "产品介绍" , "菜单" )
				elemLi.addClass('active');
				break;	
		}



	}

})



function forA( obj , text , text2 )
{
	var elemLi = null;
	if( text == "产品介绍" )
	{

		$.each( obj , function(index, val) {

			switch( $(this).html() )
			{
				case text:
					elemLi = $(this).parents('li');

			}

		});


		$.each( obj.parents('li').find('div').find('p').find('a') , function(index, val) {

				switch( $(this).html() )
				{
					case text2:
						$(this).parent('p').find('em').css("opacity" , 1);
				}
		});
			
 




	}
	else
	{


		$.each( obj , function(index, val) {


			switch( $(this).html() )
			{
				case text:
					elemLi = $(this).parents('li');

			}

		});
	}

	return elemLi;
}