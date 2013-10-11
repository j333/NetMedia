// PRELOADER
$(window).load(function() {
	$("#status").fadeOut();
	$("#preloader").delay(350).fadeOut("slow");
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
            $(".cbp-spmenu #showMenu").css({ 'top' : '-200px'});
            $(".cbp-spmenu .ascensorLinkPrev").css({ 'top' : '10px'});
            bandera = true;
         }
}

var windowsize;

showMenu.onclick = function() {
    classie.toggle( menuLeft, 'cbp-spmenu-open' );
    
    if (windowsize < 640){
        menuMobile(true);
    }
};
/*$(".cbp-spmenu ul li a").click(function(){
    if (windowsize < 640){
        classie.toggle( menuLeft, 'cbp-spmenu-vertical' );
    }else{
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
    }
});*/

$(document).ready(function () {
    windowsize = $(window).width();
});

$(window).resize(function() {
    windowsize = $(window).width();
    if (windowsize > 640){
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
	$('#ri-grid').gridrotator();
});

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

function mostrarUs(nombre){
    $("#ivan-info").hide(0);
    $("#ally-info").hide(0);
    $("#asier-info").hide(0);
    $("#maroun-info").hide(0);
    $(nombre).show("slow");
    $('.about').animate({scrollTop:altoScroll}, 750);
}

$("#ivan").click(function() {
    mostrarUs("#ivan-info");
});
$("#ally").click(function() {
    mostrarUs("#ally-info");
});
$("#asier").click(function() {
    mostrarUs("#asier-info");
});
$("#maroun").click(function() {
    mostrarUs("#maroun-info");
});

$(".icon").hover(function(){
    //$(this).next('div').children().children("h1").animate({opacity : '1', top : '80px'},500);
    $(this).next('div').children().children("h1").css("opacity","1");
    $(this).next('div').children().children("h1").css("top","80px");
});
$(".icon").mouseout(function(){
    //$(this).next('div').children().children("h1").delay( 2000 ).animate({opacity : '0', top : '60px'},500);
    $(this).next('div').children().children("h1").css("opacity","0");
    $(this).next('div').children().children("h1").css("top","60px");
});

//GOOGLE MAPS
window.onload = function () {
    var styles = [
        {
            featureType: 'water',
            elementType: 'all',
            stylers: [
                { hue: '#ffffff' },
                { saturation: -100 },
                { lightness: 100 },
                { visibility: 'on' }
            ]
        },{
            featureType: 'road',
            elementType: 'all',
            stylers: [
                { hue: '#b3b3b3' },
                { saturation: -100 },
                { lightness: 17 },
                { visibility: 'on' }
            ]
        },{
            featureType: 'poi',
            elementType: 'all',
            stylers: [
                { hue: '#f1f1f1' },
                { saturation: -100 },
                { lightness: 75 },
                { visibility: 'off' }
            ]
        },{
            featureType: 'administrative',
            elementType: 'all',
            stylers: [
                { hue: '#ffffff' },
                { saturation: 0 },
                { lightness: 100 },
                { visibility: 'off' }
            ]
        },{
            featureType: 'poi.business',
            elementType: 'all',
            stylers: [
                { hue: '#ffffff' },
                { saturation: -100 },
                { lightness: 100 },
                { visibility: 'off' }
            ]
        }
    ];

var options = {
    mapTypeControlOptions: {
        mapTypeIds: ['Styled']
    },
    center: new google.maps.LatLng(25.069491,55.116337),
    zoom: 13,
    disableDefaultUI: true, 
    mapTypeId: 'Styled'
};
var div = document.getElementById('map-canvas');
var map = new google.maps.Map(div, options);


var companyLogo = new google.maps.MarkerImage('img/map.png',
    new google.maps.Size(45,50),
    new google.maps.Point(0,0),
    new google.maps.Point(50,50)
);
var companyPos = new google.maps.LatLng(25.069491,55.146337);
var companyMarker = new google.maps.Marker({
    position: companyPos,
    map: map,
    icon: companyLogo,
    title:"NetMedia Factory"
});

var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
map.mapTypes.set('Styled', styledMapType);

}









