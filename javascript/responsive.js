function responsive()
{
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
	var screenWidth = $(document).width();
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

	//Make height of the section header
	var screenHeight = $(window).height();

	if (screenWidth < 480){
		$('#section0').css({
		    'height': 2*(screenHeight/3.0) + 'px'
		});
	} else {
		$('#section0').css({
		    'height': screenHeight/3.0 + 'px'
		});
	}

}

//Call for the first time
responsive();

//Call everytime the screen resizes
window.onresize = responsive;
