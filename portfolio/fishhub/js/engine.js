(function($) {
    "use strict";

  

    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#main").offset().top > 30) {
        $("#main").addClass("navbar-background");
      } else {
        $("#main").removeClass("navbar-background");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  

 
  })(jQuery); // End of use strict