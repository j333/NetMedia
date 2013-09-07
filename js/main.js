// PRELOADER
$(window).load(function() { // makes sure the whole site is loaded
	$("#status").fadeOut(); // will first fade out the loading animation
	$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
})
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