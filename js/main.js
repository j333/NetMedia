// PRELOADER
$(window).load(function() { // makes sure the whole site is loaded
	$("#status").fadeOut(); // will first fade out the loading animation
	$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
    $("html").css({ 'overflow-y' : 'auto'});
    $("body").css({ 'overflow-y' : 'auto'});
})

// ASCENSOR
$('#ascensor').ascensor();
	var menuLeft = document.getElementById( 'cbp-spmenu-s' ),
        body = document.body;

// MENU
ascensor.onclick = function() {
    classie.remove( menuLeft, 'cbp-spmenu-open' );
};
var bandera = false;
function menuMobile(boleano){

        if(bandera == boleano){
            $(".cbp-spmenu-left ul").css({ 'margin-top' : '-90px'});
            $(".cbp-spmenu #showMenu").css({ 'top' : '-110px'});
            $(".cbp-spmenu .ascensorLinkPrev").css({ 'top' : '-70px'});
            bandera = false;
        }else{
            $(".cbp-spmenu-left ul").css({ 'margin-top' : '0px'});
            $(".cbp-spmenu #showMenu").css({ 'top' : '-30px'});
            $(".cbp-spmenu .ascensorLinkPrev").css({ 'top' : '10px'});
            bandera = true;
         }
}

var windowsize;

showMenu.onclick = function() {
    classie.toggle( menuLeft, 'cbp-spmenu-open' );
    
    if (windowsize < 700){
        menuMobile(true);
    }
};

$(document).ready(function () {
    windowsize = $(window).width();
});

$(window).resize(function() {
    windowsize = $(window).width();
    if (windowsize > 700){
        $(".cbp-spmenu-left ul").css({ 'margin-top' : '0px'});
    }else{
        $(".cbp-spmenu-left ul").css({ 'margin-top' : '-90px'});
        $(".cbp-spmenu #showMenu").css({ 'top' : '-110px'});
        $(".cbp-spmenu .ascensorLinkPrev").css({ 'top' : '-70px'});
    }
});

// PORTFOLIO
$("#sig_portfolio,#ant_portfolio").click(function(){
    $(".set1,.set2").fadeToggle("fast");
});

var cant_pics = new Array();
for(var i=1; i<=$(".left_grid span").length; i++){
    cant_pics.push(i);
}
//alert(cant_pics);
jQuery.each( cant_pics, function() {
    var valor = this;

    $(".trabajo_pic"+valor+" span").hover( function(){
        if (windowsize > 1200){
            $(".trabajo"+valor).css("display","block");
        }
    });
    $(".trabajo_pic"+valor+" span").mouseout( function(){
        if (windowsize > 1200){
            $(".trabajo"+valor).css("display","none");
        }
    });

});

$(document).ready(function() {
    $(".fancybox").fancybox();
});
// VISION
/*$(".profile").click(function() {
    if( $(this).next(".column2").is(":visible")){
        $(this).next(".column2").slideUp("fast");
        $(".profile").removeClass("profile-active");
        }
        else {
            $(".about .column2").slideUp("fast");
            $(this).next(".column2").slideToggle("slow");
            $(".profile").removeClass("profile-active");
            $( this ).toggleClass("profile-active");
    }
});*/
$(".profile").click(function() {
    if( $(this).next(".column2").is(":visible")){
        $(".profile").removeClass("profile-active");
    }else {
        $(".profile").removeClass("profile-active");
        $( this ).toggleClass("profile-active");
    }
});
$(".profile-info-close").click(function() {
    $(".about .column2").hide("slow");
    $(".profile").removeClass("profile-active");
    $('.about').animate({scrollTop:$(".about").offset().top}, 500);
    return false;
});

var altoScroll = $('.equipe').height() + 1000;

$("#ivan").click(function() {
    $("#ivan-info").show("slow");
    $("#ally-info").hide(0);
    $("#asier-info").hide(0);
    $('.about').animate({scrollTop:altoScroll}, 750);
});
$("#ally").click(function() {
    $("#ally-info").show("slow");
    $("#ivan-info").hide(0);
    $("#asier-info").hide(0);
    $('.about').animate({scrollTop:altoScroll}, 750);
});
$("#asier").click(function() {
    $("#asier-info").show("slow");
    $("#ivan-info").hide(0);
    $("#ally-info").hide(0);
    $('.about').animate({scrollTop:altoScroll}, 750);
});

//GOOGLE MAPS
function initialize() {
    var myLatlng = new google.maps.LatLng(25.068826,55.14748);
  var mapOptions = {
    zoom: 15,
    center: myLatlng,
    panControl:false,
    zoomControl:false,
    streetViewControl:false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var iconBase = 'http://hotelcalafquen.com/img/';
  var marker = new google.maps.Marker({
      position:myLatlng,
      map: map,
      title: 'NetMedia Factory',
      icon: iconBase + 'icon-home.png'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);








