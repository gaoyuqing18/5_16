require(["../../static/conf/config.js"], function(){
	require(["jquery","sw","router"], function($, Swiper, ROUTER){
		console.log($); 
		
		$.ajax({
			url: ROUTER.CATEGORY;
		})
	})
})