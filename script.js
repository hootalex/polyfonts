/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// script.js

//define background classes in css
var backgroundClasses = ['fps1', 'fps2', 'fps3', 'fps4', 'fps5'];

(function changeBackground() {
	var nOfBackgrounds = backgroundClasses.length;
	var i=0;

	setInterval(function() {
  	// console.log("value of i=" + i);
    // console.log("class removed: " + backgroundClasses[i]);
		$('.intro, .top, .copy, .rus').removeClass(backgroundClasses[i]);
		var newClass = (i+1) % nOfBackgrounds;
		$('.intro, .top, .copy, .rus').addClass(backgroundClasses[newClass]);
		i = newClass;
    // console.log("class added: " + backgroundClasses[i]);
	}, 100);

})();

var backgroundClasses2 = ['casual1', 'casual2', 'casual3', 'casual4', 'casual5'];

(function changeBackground2() {
	var nOfBackgrounds = backgroundClasses2.length;
	var i=0;

	setInterval(function() {
  	// console.log("value of i=" + i);
    // console.log("class removed: " + backgroundClasses2[i]);
		$('.casual').removeClass(backgroundClasses2[i]);
		var newClass = (i+1) % nOfBackgrounds;
		$('.casual').addClass(backgroundClasses2[newClass]);
		i = newClass;
    // console.log("class added: " + backgroundClasses2[i]);
	}, 100);

})();

$(function() {
  $(".theme").click(function() {
    $('body').toggleClass("dark");
    $('p').toggleClass("darkline");
    $('.theme').toggleClass("light");
  $('body').removeClass("red yellow blue green purple");
  });
});

$(function() {
  $(".red").click(function() {
    $('body').attr('class', 'red');
  });
});

$(function() {
  $(".yellow").click(function() {
    $('body').attr('class', 'yellow');
  });
});

$(function() {
  $(".green").click(function() {
    $('body').attr('class', 'green');
  });
});

$(function() {
  $(".blue").click(function() {
    $('body').attr('class', 'blue');
  });
});

$(function() {
  $(".purple").click(function() {
    $('body').attr('class', 'purple');
  });
});

$(document).ready(function(){
    $(".moonrisealt").keyup(function(){
        $(".moonrisefill").html($(this).html());
    });
});

$(document).ready(function() {
    $('#paypalamt').keyup(function() {
      var amount = $('#paypalamt').val();
			var url = "https://www.paypal.com/cgi-bin/webscr?business=hoot@birdlover.com&cmd=_xclick&currency_code=USD&amount=";
			var product = "&item_name=Polyphony%20Fonts";
			$("#payment").attr("href", url+amount+product);
			console.log(url+amount+product);
    });
});

$(function() {
  $(".download").click(function() {
    $('.soliciting').addClass('show');
  });
});

$(function() {
  $("#close").click(function() {
    $('.soliciting').removeClass('show');
  });
});
