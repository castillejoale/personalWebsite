function navigationBarElementClicked(e) {

	// console.log($(this).get(0).class());

	var target = $(e.target);

	console.log ( 'Target: '+ target.attr('id') );

	if (target.attr('id') == "element1") {

		var element = $('#sectionPresent')[0];
		var top = $('#sectionPresent').position().top;
		$('html,body').animate({ scrollTop: top }, 400);

	} else if (target.attr('id') == "element2") {

		var element = $('#sectionFuture')[0];
		var top = $('#sectionFuture').position().top;
		$('html,body').animate({ scrollTop: top }, 400);

	}

}

$(".navigationBarElement").click(navigationBarElementClicked);
