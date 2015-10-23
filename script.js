$(document).ready(function(){
	function getWindowDims(x){
		$(w).width()
		$(w).height()
		
	}
	$('.videos').find('a').click(function(e){
		e.preventDefault();
		
		var url = $(this).attr('href');
		var vid = url.substring(url.lastIndexOf('/') + 1);
		
		var newURL = 'https://player.vimeo.com/video/'+vid+'?byline=0&portrait=0'
		$('#vimeovideos').attr('src',newURL);
		
		//then load that ID and refresh video
		
	});
	
	$('.threeD-video').click(function(){
		//get width of window
		//get height of window
		//set width of iframe 
		//set width of video_window class
		//set top and left of video_window class
		
		$('.video_window').fadeIn('slow');
		
	});
	
	$('.info').click(function(){
		var w = $(window).width();
		//get id of project so we can match it with a folder of images
		var projectName = $(this).closest('.view').attr('id');
		var folder;
		
		//get window size so we can select which folder to pull images, sm, md, or lg
		var h = $(window).height();
		
		if(w >1600){
			//use large images	
			console.log('large');
			folder = 'lg';
		}else if(w>1200 && w<1800){
			//use medium images
			console.log(w, 'medium');	
			folder = 'md';
			//use 1280 x 720
			//but even if window is too small, resize the image to fit
			//just make sure to use the closest image size
		}else{
			//use small images	
			console.log('small');
			folder = 'sm';
		}
		
		$.ajax({
				url: 'buildSlides.php',//consider grabbing just the first image, then upon fade In, do a callback function to grab the rest
				type: 'GET',
				data: { title: projectName, folder: folder },
				datatype: 'json',
				success: function(data){
				//this is executed when ajax call finished well
				$('.overlay').fadeTo('fast', 0.65, function(){
					$(data).insertAfter('.overlay').fadeIn('fast');
				
				});
				},
				error: function (xhr, status, error) {
		// executed if something went wrong during call
		if (xhr.status > 0) alert('got error: ' + status); // status 0 - when load is interrupted
		}
			});		
		
		//use ajax to run PHP script that builds a slideshow of images
		
		//get size of window
		//based on window size select an image folder
		//get folder with same name as class of thumbnail clicked
		//Dynamically using php script build an array of images
		//just show one image at first, but store the array,
		//use jquery's set src to move to next image
		//we are not creating a slideshow
		
	});
	
	function advanceSlide($dir){
		if($dir == "back"){
			var $slide = $('#projectImageHolder .active').prev('img');
		}else{
			var $slide = $('#projectImageHolder .active').next('img');
		}
		
		if($slide.length){
			$('#projectImageHolder .last-active').removeClass('last-active');
			$('#projectImageHolder .active').addClass('last-active').fadeOut('slow', function(){
					$(this).removeClass('active');	
				});
			$slide.fadeIn('slow', function(){
					$(this).addClass('active');
				});
		}
	}
	
	$('body').on('click', '.fa-chevron-left',function(){ 
			advanceSlide("back");
		});
	$('body').on('click', '.fa-chevron-right',function(){
			advanceSlide("forward");
		});
	
	$('body').on('click','#close',function(){
		$('#projectImageHolder').fadeOut('slow',function(){
			$(this).remove();
		
		});
		$('.video_window').fadeOut('slow',function(){
			$(this).remove();
		});
		$('.overlay').fadeOut();
		
	});

});
