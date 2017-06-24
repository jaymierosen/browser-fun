var boofleApp = {};

boofleApp.raptorize = $('#raptorize');
boofleApp.booflize = $('#boofle');
boofleApp.slotherize = $('#slotherize');
boofleApp.unicornerize = $('#unicornerize');
boofleApp.nylerize = $('#nylerize');
// boofleApp.raptorSound = $('#raptorShriek');
boofleApp.raptorImg = $('<img id="raptor-img" src="assets/raptor.png" style="display:none;" />');
boofleApp.slothImg = $('<img id="sloth-img" src="assets/sloth.png" style="display:none;" />');
boofleApp.unicornImg = $('<img id="unicorn-img" src="assets/unicorn.png" style="display:none;" />');
boofleApp.nyleImg = $('<img id="nyle-img" src="assets/nyle.png" style="display:none;" />');
boofleApp.raptorAudio = new Audio('assets/raptor-sound.mp3');
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
		boofleApp.raptorAudio.play();
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
			'background' : 'url(assets/jungle2.jpg)',
			'background-size' : 'cover',
			'background-repeat' : 'no-repeat'
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
boofleApp.displayUnicorn = function(){
	boofleApp.unicornerize.on('click', function(){
		$('div#surprise').append(boofleApp.unicornImg);
		boofleApp.unicornImg.css({
			"position": "fixed",
			"bottom": "0px",
			"right" : "-600px",
			"display" : "block"
		});
		$('body').css({
			'background' : 'url(assets/rainbow.jpg)',
			'background-size' : 'cover',
			'background-repeat' : 'no-repeat'
		});
	});
	boofleApp.animateUnicorn();
};
boofleApp.animateUnicorn = function() {
	boofleApp.unicornImg.animate({
		"bottom" : "0",
		"right" : "0"
	},	function() {
			$(this).animate({
				"bottom" : "0px",
				"right" : "0px"
			}, 100,
			function() {
				var offset = (($(this).position().left)+2000);
				$(this).delay(1000).animate({
					"right" : offset
				}, 8000,
				function() {
					boofleApp.unicornImg = $('#elUnicorn').css({
						"bottom": "0px",
						"right" : "0px"
					});
				});
			});
		});
}
boofleApp.displayNyle = function(){
	boofleApp.nylerize.on('click', function(){
		$('div#surprise').append(boofleApp.nyleImg);
		boofleApp.nyleImg.css({
			"position": "fixed",
			"bottom": "0px",
			"right" : "-400px",
			"display" : "block"
		});
		$('body').css({
			'background' : 'url(assets/ocean.jpg)',
			'background-size' : 'cover',
			'background-repeat' : 'no-repeat'
		});
	});
	boofleApp.animateNyle();
};
boofleApp.animateNyle = function() {
	boofleApp.nyleImg.animate({
		"bottom" : "0",
		"right" : "0"
	},	function() {
			$(this).animate({
				"bottom" : "0px",
				"right" : "0px"
			}, 100,
			function() {
				var offset = (($(this).position().left)+2000);
				$(this).delay(1000).animate({
					"right" : offset
				}, 8000,
				function() {
					boofleApp.nyleImg = $('#elNyle').css({
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
	boofleApp.displayUnicorn();
	boofleApp.displayNyle();
	// boofleApp.playSound();
};
$(function(){
	boofleApp.init();
});
