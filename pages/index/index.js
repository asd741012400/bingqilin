nDataAjax( url+"kmc/api/home/getList" , "get" , function( data ){

	if( data.status == 0 )
	{

		if( data.data.menuinfo )
		{
			var menuinfo = data.data.menuinfo;


			$.each( menuinfo, function(index, val) {
				
				if( val.childrenlist.length != 0 )
				{
					$('.menu ul').append(`<li cid="${val.c_id}"><a href="javascript:;">${val.c_title}</a></li>`)
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

			$('.menu ul li:first').addClass('active')

			$('.menu_btn a').attr("href" , $('.menu ul li div p:first a').attr("href"))
			

		}



		if( data.data.bannerinfo )
		{

			var bannerinfo = data.data.bannerinfo;

			$.each( bannerinfo , function(index, val) {

				$('.banner .banner_img').append(`<p cid="${val.c_id}"><a herf="${val.c_returnurl}"><img src="${val.c_imgurl}" alt=""></a></p>`)

			});
			bannerChange()

		}
		



		if( data.data.diffinfo )
		{
			var diffinfo = data.data.diffinfo;


			$('.make div h2').html( diffinfo.c_differencetitle1 )
			$('.make div p').html( diffinfo.c_differencetitle2 )
			$('.make div ul li:eq(0)').html( diffinfo.c_differencetitle3 )
			$('.make div ul li:eq(1)').html( diffinfo.c_differencetitle4 )
			$('.make div ul li:eq(2)').html( diffinfo.c_differencetitle5 )

		}
		

	}


})


function bannerChange()
{
	$(function(){

		var target = $(window).width();
		var oTimer = null;

		loadImg( $('.banner .banner_img p:first') , function(){

			// $('.banner').height( $('.banner .banner_img p:first').height() )
			$('.banner_img p').width( target )
			$('.banner_img').width( target * $('.banner_img p').length )
			
		})

		$('.changeLeft').click( () => {

			if( !$('.banner_img').is(":animated") ){

				$('.banner_img').animate({left : "-="+target}, 500 ,function(){

					var $firstP = $('.banner .banner_img p:first');
					$('.banner_img').css("left", 0)
					$('.banner_img').append( $firstP.clone() )
					$firstP.remove()
				})
			}
		})

		$('.changeRight').click( () => {

			var $lastP = $('.banner .banner_img p:last');

			if( !$('.banner_img').is(":animated") ){

				$('.banner_img').prepend( $lastP.clone() )
				$lastP.remove()
				$('.banner_img').css({
					left : "-="+target,
				})
				$('.banner_img').animate({left : "+="+target}, 500)
			}
		})


		oTimer = setInterval( bannerChange2 , 3000)

		$('.banner').hover(function() {

			// $('.banner .change div').animate({opacity : 1}, 500)

			clearInterval(oTimer)


		}, function() {

			// $('.banner .change div').animate({opacity : 0}, 500)

			oTimer = setInterval( bannerChange2 , 3000)

		});

	})

}


function bannerChange2()
{
	var $lastP = $('.banner .banner_img p:last');
	var target = $(window).width();
	$('.banner_img').prepend( $lastP.clone() )
	$lastP.remove()
	$('.banner_img').css({
		left : "-="+target,
	})
	$('.banner_img').animate({left : "+="+target}, 500)
}
