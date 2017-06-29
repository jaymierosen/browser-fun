//*** VARIABLES ** //
// EMPTY OBJECTS
const app = {};
app.buttons = {};
app.images = {};
app.functions = {};
app.audio = {};
app.css = {};
//BUTTONS
app.buttons.raptorize = $('#raptorize');
app.buttons.slotherize = $('#slotherize');
app.buttons.unicornerize = $('#unicornerize');
app.buttons.batmanerize = $('#batmanerize');
app.buttons.doggyerize = $('#doggyerize');
app.buttons.turtlerize = $('#turtlerize');
//IMAGES
app.images.raptorImg = $('<img id="raptor-img" src="assets/raptor.png" class="invisible" />');
app.images.slothImg = $('<img id="sloth-img" src="assets/sloth.png" class="invisible" />');
app.images.unicornImg = $('<img id="unicorn-img" src="assets/unicorn.png" class="invisible" />');
app.images.batmanImg = $('<img id="batman-img" src="assets/batman.png" class="invisible" />');
app.images.doggyImg = $('<img id="doggy-img" src="assets/doggy.png" class="invisible" />');
app.images.turtleImg = $('<img id="turtle-img" src="assets/turtle.png" class="invisible" />');
//AUDIO
app.audio.raptorAudio = new Audio('assets/raptor-sound.mp3');
//METHODS
app.css.imageCSS = {
	"position" : "fixed",
	"bottom" : "0px",
	"right" : "0px"
};
app.css.visible = 'visible';
app.css.bodyCSS = function() {
	if(app.images.raptorImg.hasClass(app.css.visible)) {
		$('body').css({
			'background' : 'url(assets/jungle1.jpg)',
			'background-size' : 'cover',
			'background-repeat' : 'no-repeat',
			'z-index' : 1
		})
	} else if(app.images.slothImg.hasClass(app.css.visible)) {
		$('body').css({
			'background' : 'url(assets/jungle2.jpg)',
			'background-size' : 'cover',
			'background-repeat' : 'no-repeat',
			'z-index' : 1
		})
	} else if(app.images.unicornImg.hasClass(app.css.visible)) {
		$('body').css({
			'background' : 'url(assets/rainbow.jpg)',
			'background-size' : 'cover',
			'background-repeat' : 'no-repeat',
			'z-index' : 1
		})
	} else if(app.images.batmanImg.hasClass(app.css.visible)) {
		$('body').css({
			'background' : 'url(assets/city.jpg)',
			'background-size' : 'cover',
			'background-repeat' : 'no-repeat',
			'z-index' : 1
		})
	} else if(app.images.doggyImg.hasClass(app.css.visible)) {
		$('body').css({
			'background' : 'url(assets/park.jpg)',
			'background-size' : 'cover',
			'background-repeat' : 'no-repeat',
			'z-index' : 1
		})
	} else if(app.images.turtleImg.hasClass(app.css.visible)) {
		$('body').css({
			'background' : 'url(assets/ocean.jpg)',
			'background-size' : 'cover',
			'background-repeat' : 'no-repeat',
			'z-index' : 1
		})
	}
};
//RAPTOR
app.displayRaptor = function(){
	app.buttons.raptorize.on('click', function(e){
		e.preventDefault();
		$('div#surprise').append(app.images.raptorImg);
		app.images.raptorImg.css(app.css.imageCSS);
		app.images.raptorImg.addClass(app.css.visible);
		app.animateRaptor();
		app.audio.raptorAudio.play();
		app.css.bodyCSS();
	});
};
app.animateRaptor = function() {
	app.images.raptorImg.animate({
		"bottom" : "-20px",
		"right" : "0px"
	},	function() {
			$(this).animate({
				"bottom" : "-20px"
			}, 100,
			function() {
				var offset = (($(this).position().left)+1000);
				$(this).delay(500).animate({
					"right" : offset
				}, 2200,
				function() {
					app.images.raptorImg = $('#raptor-img').css({
						"bottom": "-20px",
						"right" : "0px"
					});
				});
			});
		});
};
//SLOTH
app.displaySloth = function(){
	app.buttons.slotherize.on('click', function(e){
		e.preventDefault();
		$('div#surprise').append(app.images.slothImg);
		app.images.slothImg.css(app.css.imageCSS);
		app.images.slothImg.addClass(app.css.visible);
		app.css.bodyCSS();
	});
	app.animateSloth();
};
app.animateSloth = function() {
	app.images.slothImg.animate({
		"bottom" : "0px",
		"right" : "0px"
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
					app.images.slothImg = $('#sloth-img').css({
						"bottom": "0px",
						"right" : "0px"
					});
				});
			});
		});
};
//UNICORN
app.displayUnicorn = function(){
	app.buttons.unicornerize.on('click', function(e){
		e.preventDefault();
		$('div#surprise').append(app.images.unicornImg);
		app.images.unicornImg.css(app.css.imageCSS);
		app.images.unicornImg.addClass(app.css.visible);
		app.css.bodyCSS();
	});
	app.animateUnicorn();
};
app.animateUnicorn = function() {
	app.images.unicornImg.animate({
		"bottom" : "0px",
		"right" : "0px"
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
					app.images.unicornImg = $('#unicorn-img').css({
						"bottom": "0px",
						"right" : "0px"
					});
				});
			});
		});
};
//BATMAN
app.displayBatman = function(){
	app.buttons.batmanerize.on('click', function(e){
		e.preventDefault();
		$('div#surprise').append(app.images.batmanImg);
		app.images.batmanImg.css(app.css.imageCSS);
		app.images.batmanImg.addClass(app.css.visible);
		app.css.bodyCSS();
	});
	app.animateBatman();
};
app.animateBatman = function() {
	app.images.batmanImg.animate({
		"bottom" : "0px",
		"right" : "0px"
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
					app.images.batmanImg = $('#batman-img').css({
						"bottom": "0px",
						"right" : "0px"
					});
				});
			});
		});
};
//DOGGY
app.displayDoggy = function(){
	app.buttons.doggyerize.on('click', function(e){
		e.preventDefault();
		$('div#surprise').append(app.images.doggyImg);
		app.images.doggyImg.css(app.css.imageCSS);
		app.images.doggyImg.addClass(app.css.visible);
		app.css.bodyCSS();
	});
	app.animateDoggy();
};
app.animateDoggy = function() {
	app.images.doggyImg.animate({
		"bottom" : "0px",
		"right" : "0px"
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
					app.images.doggyImg = $('#doggy-img').css({
						"bottom": "0px",
						"right" : "0px"
					});
				});
			});
		});
};
//TURTLE
app.displayTurtle = function(){
	app.buttons.turtlerize.on('click', function(e){
		e.preventDefault();
		$('div#surprise').append(app.images.turtleImg);
		app.images.turtleImg.css(app.css.imageCSS);
		app.images.turtleImg.addClass(app.css.visible);
		app.css.bodyCSS();
	});
	app.animateTurtle();
};
app.animateTurtle = function() {
	app.images.turtleImg.animate({
		"bottom" : "0px",
		"right" : "0px"
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
					app.images.turtleImg = $('#turtle-img').css({
						"bottom": "0px",
						"right" : "0px"
					});
				});
			});
		});
};

//attempting a custom clear button function
//not working :-(

// app.buttons.clear = function(){
// 	$('#btn__clear').on('click', function(){
// 		for(var i in app.images) {
// 			console.log(app.images[i]);
// 			app.images[i].css({
// 				'display' : 'none'
// 			});
// 		};
// 		$('body').css({
// 			'background' : 'linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E)'
// 		});
// 	});
// };
// app.buttons.clear = function() {
// 	$('#btn__clear').on('click', function(){
// 		app.images.turtleImg.stop();
// 	});
// }
//INIT FUNCTION
app.init = function() {
	app.displayRaptor();
	app.displaySloth();
	app.displayUnicorn();
	app.displayBatman();
	app.displayDoggy();
	app.displayTurtle();
	// app.buttons.clear();
};
//DOCUMENT READY
$(function(){
	app.init();
});
