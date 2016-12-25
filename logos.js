function handleHoverOfListElement(ev) { 

	console.log('handleHoverOfListElement');

	var target = $(ev.target);
	var classList = target.attr('class').split(/\s+/);
	var linkType = classList[2];
	// console.log(linkType);
	var url = "url(images/socialMedia/" + linkType + "-dark.png)"
	$( this ).css("background-image", url);   

};

function handleLeaveOfListElement(ev) {

	console.log('handleLeaveOfListElement');

	var target = $(ev.target);
	var classList = target.attr('class').split(/\s+/);
	var linkType = classList[2];
	// console.log(linkType);
	var url = "url(images/socialMedia/" + linkType + "-light.png)"
	$( this ).css("background-image", url); 

};

//Set initial images when web starts
$( ".listElement").each(function() {

	// console.log($( this ).attr('class'));
	var classList = $( this ).attr('class').split(/\s+/);
	var linkType = classList[2];
	// console.log(linkType);
	var url = "url(images/socialMedia/" + linkType + "-light.png)"
	$( this ).css("background-image", url); 

});

$(".listElement").mouseover(handleHoverOfListElement);
$(".listElement").mouseleave(handleLeaveOfListElement);
