$(function() {
		var div = $('.gallery-grid');
		var width = div.width();
		div.css('height', 0.5627*width + 20);
		console.log ( 'Size' );  
});
window.onresize = function(event) {
	$(function() {
		var div = $('.gallery-grid');
		var width = div.width();
		div.css('height', 0.5627*width + 20);
		console.log ( 'Size' );  
	});
};