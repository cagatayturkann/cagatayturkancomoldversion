/* active menu item on click */
$(document).ready(function() {    
    'use strict';        
    $('.navbar-nav li a').click(function(){        
        'use strict';        
        $('.navbar-nav li a').parent().removeClass("active");        
        $(this).parent().addClass("active");    
    });
});

// highlight menu item on scroll
$(document).ready(function() {    
    'use strict';    
    $(window).scroll( function() {     
        $('.navbar-nav li a').parent().removeClass("active");
        'use strict';        
        $("section").each(function()  {            
            'use strict';            
            var bb = $(this).attr("id");  // ABOUT, PORTFOLIO, CONTACT
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 120;        
                
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {             
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");                           
            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");                
            }           
        });   
    });   
});

// Add animation/ Initialize Woo
$(document).ready(function() {    
    'use strict';   
    new WOW().init();    
});

//carousel transition time
$('.carousel').carousel({
    interval: 2000
  })

let formButton = document.querySelector('.submit-btn');
formButton.disabled = true;