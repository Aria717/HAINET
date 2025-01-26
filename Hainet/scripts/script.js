// when screen is resized to small
    // display the hamburger menu
    // hide nav list
// when screen is resized to large
    // display nav list
    // hide the hamburger menu
    $(document).ready(function() {
        if (window.matchMedia("(max-width: 1000px)").matches) {
          $("#nav-hamburger").removeClass("hidden");
          $("#nav-list").addClass("hidden");
        } else {
          $("#nav-hamburger").addClass("hidden");
          
        }
      });
      
    $(window).on("resize", function() {
        if (window.matchMedia("(max-width: 1200px)").matches) {
            $("#nav-hamburger").removeClass("hidden");
            $("#nav-list").addClass("hidden");
          } else {
            $("#nav-hamburger").addClass("hidden");
            $("#nav-list").removeClass("hidden");
          }
      });
    //When hamburger menu is clicked display nav list
  //When it is clicked again hide it
  $("#nav-hamburger").on("click", function() {
    if ($("#nav-list").hasClass("hidden")) {
      $("#nav-list").removeClass("hidden");
    } else {
      $("#nav-list").addClass("hidden");
    }
  });


  document.getElementById('year').textContent = new Date().getFullYear();