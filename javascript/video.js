var figure = $(".cellContentApp").hover( hoverVideo, hideVideo );

function hoverVideo(e) { 

	//Mute the video
	$('video', this).get(0).muted = true;
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause();
    $('video', this).get(0).currentTime = 0;
	// $('video', this).get(0).load();
}


