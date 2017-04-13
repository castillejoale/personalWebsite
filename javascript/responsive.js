function responsive()
{

	var screenHeight = $(window).height();
	//I change from document to window, hopefully there are no issues
	var screenWidth = $(window).width();

	//Conserve grid cellContent's height-width ratio
	var cellWidth = $('.cell').width();
	var cellContentWidth = $('.cellContent').width();
	var cellContentAppHeight = 1.775*cellContentWidth;
	var cellContentProjectHeight = 0.562701*cellContentWidth;
	//For apps
	$(".app").children().each(function(){
		$(this).children(":first").css({
	    	'height': cellContentAppHeight + 'px'
		});
	});
	//For projects
	$(".project").children().each(function(){
		$(this).children(":first").css({
	    	'height': cellContentProjectHeight + 'px'
		});
	});

	//Set height of the cells based on the margins of the cellContent
	var cellContentAppMarginTop = parseInt($('.cellContentApp').css('margin-top'));
	var cellContentAppMarginBottom = parseInt($('.cellContentApp').css('margin-bottom'));

	var cellContentProjectMarginTop = parseInt($('.cellContentProject').css('margin-top'));
	var cellContentProjectMarginBottom = parseInt($('.cellContentProject').css('margin-bottom'));

	var cellViewHeight = $('.cellView').height();
	var cellViewMarginTop = parseInt($('.cellView').css('margin-top'));
	var cellViewMarginBottom = parseInt($('.cellView').css('margin-bottom'));

	//For apps
	$('.app').children().css({
	    'height': cellContentAppMarginTop + cellContentAppHeight + cellContentAppMarginBottom + cellViewMarginTop + cellViewHeight + cellViewMarginBottom + 'px'
	});
	//For projects
	$(".project").children().each(function(){
		$(this).css({
		    'height': cellContentProjectHeight + cellContentProjectMarginTop + cellContentProjectMarginBottom + cellViewMarginTop + cellViewHeight + cellViewMarginBottom + 'px'
		});
	});

	//Conserve grid height based on cells height. Assuming above 1001px screenWidth there will be 3 elements, below, 2 elements.
	var divider = 0;
	var gridPaddingTop = parseInt($('.grid').css('padding-top'));
	var gridPaddingBottom = parseInt($('.grid').css('padding-bottom'));

	$(".grid").each(function(){

		var cellHeight = $(this).children().height();
		var elements = $(this).children().length;

		if (screenWidth < 480){
			divider = 1;
		} else if (screenWidth < 1001){
			divider = 2;
		} else {
			divider = 3;
		}
		var multiplier = Math.ceil(elements/divider);

		$(this).css({
		    'height': multiplier*cellHeight + gridPaddingTop + gridPaddingBottom + 'px'
		});

	});


	//Navbar
	var navigationBarHeight = Math.floor(screenHeight*0.10);
	var navigationBarElementWidth = screenWidth*0.20;

	$("#navigationBar").css({
		'height': navigationBarHeight + 'px'
	});

	$(".navigationBarElement").css({
		'height': navigationBarHeight + 'px',
		'width': navigationBarElementWidth + 'px',
		'line-height': navigationBarHeight + 'px'
	});

	//World image
	var imageHeight = Math.floor(screenHeight*0.33);
	var imageWidth = screenWidth*0.80;
	var imageContainerRatio = imageWidth/imageHeight;
	var imageRatio = 2400 / 804;
	if (imageContainerRatio > imageRatio) {
		imageWidth = imageHeight * imageRatio;
	} else {
		imageHeight = imageWidth * 1/imageRatio;
	}

	//Add world image now
	headerImage = $("#headerImage")[0];
	headerImage.src = 'images/test.png';

	//sectionHeaderText
	var textHeight = screenHeight - imageHeight - navigationBarHeight


	$("#headerImageContainer").css({
		'height': imageHeight + 'px',
		'width': imageWidth + 'px'
	});

	$("#headerImage").css({
		'height': imageHeight + 'px',
		'width': imageWidth + 'px'
	});

	$("#sectionHeaderText").css({
		'height': textHeight + 'px'
	})

	//Home text
	var textTopMargin = Math.min(screenHeight * 0.15, screenWidth * 0.15);
	var textSideMargin = textTopMargin;

	var textHeight = screenHeight - imageHeight - textTopMargin - navigationBarHeight;
	var textWidth = screenWidth - textSideMargin;
	var textFontSize = ((textHeight * textWidth) / 17000.0) + 2.7*(1000/textWidth);

	$(".text-1").css({
		// 'height': textHeight + 'px',
		'font-size': textFontSize + 'px',
		// 'margin-top': textTopMargin + 'px',
		// 'margin-right': textSideMargin + 'px',
		// 'margin-left': textSideMargin + 'px'
	});


	// //Make height of the section header
	// var screenHeight = $(window).height();

	// if (screenWidth < 480){
	// 	$('#section0').css({
	// 	    'height': 2*(screenHeight/3.0) + 'px'
	// 	});
	// } else {
	// 	$('#section0').css({
	// 	    'height': screenHeight/3.0 + 'px'
	// 	});
	// }

}

//Call for the first time
responsive();

//Call everytime the screen resizes
window.onresize = responsive;
