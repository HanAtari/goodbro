/*
 * Toasty v0.1.2
 * Show Dan Forden's Toasty from Mortal Kombat as an Easter Egg for your website
 * (c)2014 Ruben Torres - rubentdlh@gmail.com
 * Released under the MIT license
 */

 (function($) {

 	//singleton
 	var singlePenetration;

 	function Penetration(elem, options){
 		this.options=options;
 	}

	 Penetration.prototype = {

 		//initialize including neccesary elements in DOM
 		init: function(){
 			//Add to dom needed elements
 			$("body").append('<div id="penetration-guy-dan"><img src="'+ this.options.image +'" alt="penetration"></div>');
			$('#penetration-guy-dan').css('position', 'fixed');
			$('#penetration-guy-dan').css('right', '0px');
			$('#penetration-guy-dan').css('bottom', '-300px');
			if(this.options.sound){
				$("body").append('<audio id="penetration-audio"><source src="'+ this.options.sound +'" type="audio/mpeg"></source></audio>');
 			}
 		},

 		pop: function(){
 			var audio = document.getElementById('penetration-audio');
			audio.play();
			$("#penetration-guy-dan").addClass("show-pen");
			setTimeout( function(){ $("#penetration-guy-dan").removeClass("show-pen"); }, 4000);
 		}

 	}

 	$.fn.penetration = function(options) {

 		this.each(function(){
			// Check if we should operate with some method
			if (/^(pop)$/i.test(options)) {
				// Normalize method's name
				options = options.toLowerCase();
				switch(options){
					case 'pop':
						singlePenetration.pop();
						break;
				}
			}else if (typeof options == 'object' || !options) {
				options = $.extend({}, $.fn.penetration.defaults, options);
				if(!singlePenetration){
					singlePenetration = new Penetration($(this), options);
					singlePenetration.init();
				}
			}
 		});

	}

	$.fn.penetration.defaults = {
 		sound: true,
 		image: 'images/1.png',
 		sound: 'penetration.mp3'
 	};

})(jQuery);
