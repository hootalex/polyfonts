/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// script.js

//define background classes in css
var backgroundClasses = ['fps1', 'fps2', 'fps3', 'fps4', 'fps5'];

(function changeBackground() {
	var nOfBackgrounds = backgroundClasses.length;
	var i=0;

	setInterval(function() {
  	console.log("value of i=" + i);
    console.log("class removed: " + backgroundClasses[i]);
		$('.intro, .top, .copy, .rus').removeClass(backgroundClasses[i]);
		var newClass = (i+1) % nOfBackgrounds;
		$('.intro, .top, .copy, .rus').addClass(backgroundClasses[newClass]);
		i = newClass;
    console.log("class added: " + backgroundClasses[i]);
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
