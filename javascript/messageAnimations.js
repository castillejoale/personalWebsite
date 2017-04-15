var previousY = -10000;
var y = $(this).scrollTop();
var screenHeight = $(window).height();

function animateMessages() {

	y = $(this).scrollTop();
	screenHeight = $(window).height();

	var messages = document.getElementsByClassName("text-1");

	for (var i = 0; i < messages.length; i++) {
		console.log(messages[i]);
		id = $(messages[i]).attr('id')
	  animateMessage($("#".concat(id)));
	}

	previousY = y;

}

function animateMessage(e) {

	messageOffset = e.offset().top;
	messageHeight = e.height();

	if ((y + screenHeight > messageOffset) && (y < messageOffset + messageHeight)) {
		if (!((previousY + screenHeight > messageOffset) && (previousY < messageOffset + messageHeight))) {
			e.finish();
			e.fadeTo(2000, 1);
		}
	} else {
		if (((previousY + screenHeight > messageOffset) && (previousY < messageOffset + messageHeight))) {
			e.finish();
			e.fadeTo(100, 0);
		}
	}

}

$(document).scroll(function() {

  animateMessages();

});

animateMessages();
