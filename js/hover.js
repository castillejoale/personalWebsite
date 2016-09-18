function handleHover(ev) { 
	var target = $(ev.target);
	//Get id (project)
	var elId = target.attr('id');  
	$('#'+elId+' .textbox').addClass('appear');
	console.log ( 'Target: '+ target.attr('class') );  
	console.log ( 'The mouse is hovering: '+ elId );   
	console.log ( 'Hover' );      
};

$.fn.exists = function () {
    return this.length !== 0;
};

function handleLeave(ev) {
	var target = $(ev.target);

	//Modify target depending on hierarchy, must change because it's quite hacky.
	if(target.parent().hasClass("textbox")){
		target = target.parent();
	} else if (target.parent().hasClass("button")){
		target = target.parent().parent();
	}
	//Get id (project)
	var elId = target.parent().attr('id');
	$('#'+elId+' .textbox').removeClass('appear');
	console.log ( 'No Hover' );      
};

//I don't like that I need to add the methods to different classes, again quite hacky.
$(".container-image").mouseover(handleHover);
$(".textbox").mouseleave(handleLeave);
