var showingMessage1 = 1;
var showingMessage2 = 0;
var showingMessage3 = 0;

function fadeInText(e) {

	e.fadeTo(2000, 1);
	// console.log("fading in: ");
	// console.log(e.attr("id"));

}

function fadeOutText(e) {

	e.fadeTo(300, 0);
	// console.log("fading out: ");
	// console.log(e.attr("id"));

}

var text1 = $(".text-1");
var firstText = text1.eq(0);
fadeInText(firstText);

$(document).scroll(function() {

  var y = $(this).scrollTop();
	var screenHeight = $(window).height();

	message1Offset = $('#message1').offset().top;
	message1Height = $('#message1').height();

	if ((y + screenHeight > message1Offset) && (y < message1Offset + message1Height)) {
		if (showingMessage1 != 1) {
			var message1 = $("#message1");
			message1.finish();
			message1.fadeTo(2000, 1);
			showingMessage1 = 1;
		}
	} else {
		if (showingMessage1 != 0) {
			var message1 = $("#message1");
			message1.finish();
			message1.fadeTo(100, 0);
			showingMessage1 = 0;
		}
	}

	message2Offset = $('#message2').offset().top;
	message2Height = $('#message2').height();

	if ((y + screenHeight > message2Offset) && (y < message2Offset + message2Height)) {
		if (showingMessage2 != 1) {
			var message2 = $("#message2");
			message2.finish();
			message2.fadeTo(2000, 1);
			showingMessage2 = 1;
		}
	} else {
		if (showingMessage2 != 0) {
			var message2 = $("#message2");
			message2.finish();
			message2.fadeTo(100, 0);
			showingMessage2 = 0;
		}
	}

	message3Offset = $('#message3').offset().top;
	message3Height = $('#message3').height();

	if ((y + screenHeight > message3Offset) && (y < message3Offset + message3Height)) {
		if (showingMessage3 != 1) {
			var message3 = $("#message3");
			message3.finish();
			message3.fadeTo(2000, 1);
			showingMessage3 = 1;
		}
	} else {
		if (showingMessage3 != 0) {
			var message3 = $("#message3");
			message3.finish();
			message3.fadeTo(100, 0);
			showingMessage3 = 0;
		}
	}

});
