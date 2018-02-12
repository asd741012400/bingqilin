bannerChange()

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


/*		oTimer = setInterval( bannerChange2 , 3000)

		$('.banner').hover(function() {

			$('.banner .change div').animate({opacity : 1}, 500)

			clearInterval(oTimer)


		}, function() {

			$('.banner .change div').animate({opacity : 0}, 500)

			oTimer = setInterval( bannerChange2 , 3000)

		});*/

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