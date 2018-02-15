/*eslint-env jquery*/

"use strict";

$('.smoothscroll').click(function() {
	$(".current").removeClass("current");
    $(this).addClass('current');
})

$(document).ready(function(){

	var imgItems = $('.slider li').length; // Numero de Slides
	var imgPos = 1;

	// Agregando paginacion --
	for(var i = 1; i <= imgItems; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	} 
	$(".slider li").hide();
	$(".slider li:first").show();
	$(".pagination li:first").css({"color": "#CD6E2E"});

	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);

function pagination(){
	var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada
	$('.slider li').hide(); // Ocultamos todos los slides
	$('.slider li:nth-child('+ paginationPos +')').show(); // Mostramos el Slide seleccionado

	// Dandole estilos a la paginacion seleccionada
	$('.pagination li').css({'color': '#858585'});
	$(this).css({'color': '#CD6E2E'});

	imgPos = paginationPos;

}

function nextSlider(){

	if( imgPos >= imgItems){imgPos = 1;} 
	else {imgPos++;}

	$('.pagination li').css({'color': '#858585'});
	$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});
	$('.slider li').hide(); // Oculta todos los slides
	$('.slider li:nth-child('+ imgPos +')').show(); // Muestra el Slide seleccionado

}

function prevSlider(){
	if( imgPos <= 1){imgPos = imgItems;} 
	else {imgPos--;}

	$('.pagination li').css({'color': '#858585'});
	$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

	$('.slider li').hide(); // Oculta todos los slides
	$('.slider li:nth-child('+ imgPos +')').show(); // Muestra el Slide seleccionado
}
})  

