var boofleApp = {};

boofleApp.raptorize = $('#raptorize');
boofleApp.booflize = $('#boofle');
boofleApp.slotherize = $('#slotherize');
boofleApp.raptorSound = $('#raptorShriek');	
boofleApp.raptorImg = $('<img id="raptor-img" src="assets/raptor.png" style="display:none;" />');
boofleApp.slothImg = $('<img id="sloth-img" src="assets/sloth.png" style="display:none;" />');
// boofleApp.raptorAudioMarkup = '<audio id="elRaptorShriek" preload="auto"><source src="assets/raptor-sound.mp3" /><source src="assets/raptor-sound.ogg" /></audio>';	
// boofleApp.raptorAudioId = $('#elRaptorShriek');

boofleApp.displayRaptor = function(){
	boofleApp.raptorize.on('click', function(){
		$('div#surprise').append(boofleApp.raptorImg);
		boofleApp.raptorImg.css({
			"position" : "fixed",
			"bottom" : "0px",
			"right" : "0px",
			"display" : "block"
		});
		boofleApp.animateRaptor();
		$('body').css({
			'background-image' : 'url(assets/jungle1.jpg)',
			'background-size' : 'cover',
			'background-repeat' : 'no-repeat'

		});
	});
};
boofleApp.animateRaptor = function() {
	boofleApp.raptorImg.animate({
		"bottom" : "0",
		"right" : "0"
	},	function() { 			
			$(this).animate({
				"bottom" : "0px"
			}, 100, 
			function() {
				var offset = (($(this).position().left)+1000);
				$(this).delay(500).animate({
					"right" : offset
				}, 2200, 
				function() {
					boofleApp.raptorImg = $('#elRaptor').css({
						"bottom": "0px",
						"right" : "0px"
					});
				});
			});
		});
}
boofleApp.displaySloth = function(){
	boofleApp.slotherize.on('click', function(){
		$('div#surprise').append(boofleApp.slothImg);
		boofleApp.slothImg.css({
			"position": "fixed",
			"bottom": "0px",
			"right" : "0px",
			"display" : "block"
		});
		$('body').css({
			'background' : 'url(assets/jungle2.jpg)'
		});
	});
	boofleApp.animateSloth();
};
boofleApp.animateSloth = function() {
	boofleApp.slothImg.animate({
		"bottom" : "0",
		"right" : "0"
	},	function() { 			
			$(this).animate({
				"bottom" : "0px"
			}, 100, 
			function() {
				var offset = (($(this).position().left)+2000);
				$(this).delay(1000).animate({
					"right" : offset
				}, 50000, 
				function() {
					boofleApp.slothImg = $('#elSloth').css({
						"bottom": "0px",
						"right" : "0px"
					});
				});
			});
		});
}
// Sound Hilarity
// boofleApp.playSound = function(){
// 	boofleApp.raptorAudioId.play();
// };
boofleApp.init = function() {
	boofleApp.displayRaptor();
	boofleApp.displaySloth();
	// boofleApp.playSound();
};
$(function(){
	boofleApp.init();
});
