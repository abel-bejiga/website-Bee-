$('.anime').click(function(e) {
    e.preventDefault();    
    $('.overlay-anime').removeClass("ov-z-index");
    $('.overlay-anime').addClass('show')
   
    $(".content-about").removeClass("hidden").removeClass("zoom-out").addClass("in-delay").load('about.html');
$("#add-hidden").removeClass("hidden").addClass("in");
      $("#about-link").addClass("out").addClass("hidden");
      $("#gallary").addClass("out").addClass("hidden");
    $(".bg-cover").addClass("hidden").removeClass("in");

}); 
$("#add-hidden").click(function(){
    $(".content-about").removeClass("in-delay").addClass("zoom-out").addClass("hidden");
    $('.overlay-anime').toggleClass('show');
    
    $(this).addClass("hidden").removeClass("in-delay").addClass("out");
    $(".bg-cover").removeClass("hidden");
    $("#about-link").removeClass("out").addClass("in").removeClass("hidden");
    $("#gallary").removeClass("out").addClass("in").removeClass("hidden");
setTimeout(() => {
    $('.overlay-anime').toggleClass('ov-z-index');
    
}, 1000);

})


// $(document).ready(function() {
//     $('#about-link').click(function(event) {
//       event.preventDefault(); // prevent the default behavior of the link
//       $('#overlay-anime').load('about.html'); // load the about.html page into the #content element
//     });
//   });