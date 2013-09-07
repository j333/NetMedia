$('#ascensor').ascensor();
var menuLeft = document.getElementById( 'cbp-spmenu-s' ),
                body = document.body;

            showMenu.onclick = function() {
                classie.toggle( menuLeft, 'cbp-spmenu-open' );
            };
            ascensor.onclick = function() {
                classie.remove( menuLeft, 'cbp-spmenu-open' );
            };