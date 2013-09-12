// PRELOADER
$(window).load(function() { // makes sure the whole site is loaded
	$("#status").fadeOut(); // will first fade out the loading animation
	$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
})

// SCROLL

// ASCENSOR
$('#ascensor').ascensor();
	var menuLeft = document.getElementById( 'cbp-spmenu-s' ),
        body = document.body;
// MENU
showMenu.onclick = function() {
    classie.toggle( menuLeft, 'cbp-spmenu-open' );
};
ascensor.onclick = function() {
    classie.remove( menuLeft, 'cbp-spmenu-open' );
};

//ACCORDION
$(".vision h2").click(function() {
    if( $(this).next("p").is(":visible")){
    	$(this).next("p").slideUp("fast");
    	}
    	else {
        	$(".vision p").slideUp("fast");
        	$(this).next("p").slideToggle("fast");
    }
});

//GOOGLE MAPS
var map;
var myOptions = {
    zoom: 15,
    center: new google.maps.LatLng(25.254322,55.259686),
    mapTypeId: 'roadmap'
};
map = new google.maps.Map($('#map')[0], myOptions)

//TRIANGULO GOOGLE MAPS
function trianguloGoogle(){
    if ($(window).width() > 1000) {
        $("#ampliar").hover(function(){
            $("#triangulo").animate({
                borderWidth: "700px 1000px 0 0"
            }, 500 );
        });
        $("#triangulo").hover(function(){
            $("#triangulo").animate({
                borderWidth: "1200px 1500px 0 0"
            }, 500 );
        });
    }
    else {
        $("#ampliar").hover(function(){
            $("#triangulo").animate({
                borderWidth: "800px 800px 0 0"
            }, 500 );
        });
        $("#triangulo").hover(function(){
            $("#triangulo").animate({
                borderWidth: "1000px 1000px 0 0"
            }, 500 );
        });
    }
}


//MENU MOBILE
function menuMobile(){
    if ($(window).width() < 700) {

        var bandera = false;

        $("#showMenu").click(function(){
            if(bandera == true){
                $(".cbp-spmenu #showMenu").css({ 'top' : '-110px'});
                $(".cbp-spmenu .ascensorLinkPrev").css({ 'top' : '-70px'});
                $(".cbp-spmenu-left ul").css({ 'margin-top' : '-90px'});          
                bandera = false;
            }else{
                $(".cbp-spmenu #showMenu").css({ 'top' : '-30px'});
                $(".cbp-spmenu .ascensorLinkPrev").css({ 'top' : '10px'});
                $(".cbp-spmenu-left ul").css({ 'margin-top' : '0'});
                bandera = true;
            }
        });
    }
}
$(document).ready(function () {
    trianguloGoogle();
    menuMobile();
});

$(window).resize(function() { 
    trianguloGoogle();
    menuMobile();
});