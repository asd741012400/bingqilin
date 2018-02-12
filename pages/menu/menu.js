nDataAjax( url+"kmc/api/home/productindex" , "get" ,function( data ){

	if( data.status == 0 )
	{

		console.log( data )

		if( data.data.topinfo )
		{
			var topinfo = data.data.topinfo;

			$.each( topinfo, function(index, val) {

				$('.menu_content .menu_title').append(`<p><img src="${val.c_imgurl}" alt=""></p>`)

			});

			loadImg( $('.menu_content .menu_title p img') , function(){

				firstImgWidth = $('.menu_content .menu_title p:first').outerWidth()+31;
				ImgSum = $('.menu_content .menu_title p').length;

				$('.menu_content .menu_title').width( firstImgWidth * ImgSum )

			} )



		}

		if( data.data.stepinfo1 )
		{

			var stepinfo1 = data.data.stepinfo1;


			$('.menu_one h3').html(`<img src="${stepinfo1[0].c_imgurl}" alt="">`)


			for (var i = 1; i < 4; i++) {

				$('.menu_one .box').append(`<p><img src="${stepinfo1[i].c_imgurl}" alt=""></p>`)
				
			}

			for (var i = 4; i < stepinfo1.length; i++) {

				$('.menu_one ul').append(
					`<li>
						<span><img src="${stepinfo1[i].c_imgurl}" alt=""></span>
						<p><img src="${stepinfo1[i].c_imgurl1}" alt=""></p>
						<em><img src="${stepinfo1[i].c_imgurl2}" alt=""></em>
					</li>`)
				
			}




			$('.menu_one ul').delegate('li p', 'click', function(event) {

				event.stopPropagation();
				var	explainImg = $(this).siblings('em').html();
				


				window.addEventListener('DOMMouseScroll',scrollFunc,false);

				window.addEventListener('mousewheel',scrollFunc,false);


				$('.text_explain div').html(explainImg)

				$('.text_explain').show()

			});


			$(document).click(() => {

				$('.text_explain').hide();

				$('.text_explain div').html("");



				window.removeEventListener('DOMMouseScroll',scrollFunc,false);

				window.removeEventListener('mousewheel',scrollFunc,false);



			});

		}

		if( data.data.stepinfo2 )
		{
			var stepinfo2 = data.data.stepinfo2;
				imageinfo = stepinfo2.imageinfo,
				newsinfo = stepinfo2.newsinfo,
				dataArr = [];
			
			$('.menu_two h3').html(`<img src="${imageinfo[0].c_imgurl}" alt="">`)

			$.each(newsinfo, function(index, val) {
				
				if( index % 4 == 0 )
				{
					$('.menu_two .menu_list_ul').append(`<li class="news_list"></li>`)
				}
				

				$('.menu_two .menu_list_ul .news_list').eq( $('.menu_two .news_list').length-1 ).append(
				`<div>
					<h4>${val.c_title}</h4>
					<ul>
					</ul>
				</div>`)

				$.each( val.childlist, function(index2, val2) {

					$('.menu_two .news_list div').eq( $('.menu_two .news_list div').length-1 ).find('ul').append(
						`<li style="background-image: url('${val2.c_imageurl}')">${val2.c_title}</li>`)

				});

				

			});

			$.each(imageinfo, function(index, val) {

				if( index != 0 )
				{
					$(".menu_two .menu_list_img").append(`<p><span><img src="${val.c_imgurl}" alt=""></span></p>`)
				}

			});




		} 

		if( data.data.stepinfo3 )
		{
			var stepinfo3 = data.data.stepinfo3;
				imageinfo = stepinfo3.imageinfo,
				newsinfo = stepinfo3.newsinfo,
				dataArr = [];



			
			$('.menu_three h3').html(`<img src="${imageinfo[0].c_imgurl}" alt="">`)

			$.each(newsinfo, function(index, val) {
				
				if( index % 4 == 0 )
				{
					$('.menu_three .menu_list_ul').append(`<li class="news_list"></li>`)
				}
				

				$('.menu_three .menu_list_ul .news_list').eq( $('.menu_three .news_list').length-1 ).append(
				`<div>
					<h4>${val.c_title}</h4>
					<ul>
					</ul>
				</div>`)

				$.each( val.childlist, function(index2, val2) {

					$('.menu_three .news_list div').eq( $('.menu_three .news_list div').length-1 ).find('ul').append(
						`<li style="background-image: url('${val2.c_imageurl}')">${val2.c_title}</li>`)

				});

				

			});

			$.each(imageinfo, function(index, val) {

				if( index != 0 )
				{
					$(".menu_three .menu_list_img").append(`<p><span><img src="${val.c_imgurl}" alt=""></span></p>`)
				}

			});




		} 

		if( data.data.stepinfo4 ) 
		{
			var stepinfo4 = data.data.stepinfo4;
			$('.menu_four h3').html(`<img src="${stepinfo4[0].c_imgurl}" alt="">`)
			$('.menu_four .step').html(`<img src="${stepinfo4[1].c_imgurl}" alt="">`)

			for (var i = 2; i < stepinfo4.length; i++) {
				$('.menu_four .finished_product').append(`<p><img src="${stepinfo4[i].c_imgurl}" alt=""></p>`)
			}

		} 

		if( data.data.stepinfo5 ) 
		{
			var stepinfo5 = data.data.stepinfo5;
			$(".menu_icon").html(`<img src="${stepinfo5[0].c_imgurl}" alt=""><span>${stepinfo5[0].c_title}</span>`)
		}                                            



	}

})



var scrollFunc=function(e){

	e=e||window.event;

	if (e&&e.preventDefault){ 

		e.preventDefault();

	    e.stopPropagation();

	}else{ 
		
		e.returnvalue=false;  

		return false;     

	}

}

