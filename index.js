

$("#gallary").click(function gallary(){
        
    $("#bg-cover-add").removeClass("hidden").addClass("in").removeClass("out");
    $("#hero-disc").addClass("out").removeClass("in");
$("#add-hidden").removeClass("hidden").addClass("in");
$(".show-type").removeClass("hidden");
$(".show-type").attr("id", "mobile-hamburger-in");
    // each pictures on click

        

})

$("#add-hidden").click(function(){
    $("#bg-cover-add").removeClass("in").addClass("out").addClass("hidden");
    $(this).addClass("hidden").removeClass("in").addClass("out");
    $("#hero-disc").removeClass("out").addClass("in");
  $(".show-type").addClass("hidden").removeClass("in");
  $(".show-type").attr("id", "mobile-hamburger-out");
  $('.extended-size').toggleClass("zoomOut").attr('class', 'size').addClass("height");

    })


// gallary image replacement

$(document).ready(function() {
    // Find all img elements with a data-src attribute
    $('img[data-src]').hover(
      // Hover handler: change the src attribute to data-src
      function() {
        $(this).attr('src', $(this).data('src'));
      },
      // Mouseout handler: change the src attribute back to its original value
      function() {
        $(this).attr('src', $(this).attr('src'));
      }
    );
  });
  
    // hamburger menu

    $("#hamburger").click(menuClicked);
    $("#close-menu").click(closeMenuClicked);
    $(".hero").click(mainPageClicked);



    function menuClicked(){
      $("#translate").attr('id', 'mobile-hamburger-in');
      $("#mobile-hamburger-out").attr('id', 'mobile-hamburger-in' );
        $(this).toggleClass("hide");
        $("#close-menu").toggleClass("hide");
    }
    function closeMenuClicked(){
      $("#mobile-hamburger-in").attr("id", "mobile-hamburger-out");
      $("#hamburger").toggleClass("hide");
      $(this).toggleClass("hide");
    }

    function mainPageClicked(){
      $("#mobile-hamburger-in").attr("id", "mobile-hamburger-out");
      $("#hamburger").removeClass("hide");
      $("#close-menu").addClass("hide");
      
    }

   
// image gallery

      let btnGallary = $("#btn-gallary");
      let btnZoom = $("#btn-zoom");

        btnGallary.click(function(){
          $('.extended-size').toggleClass("zoomOut").attr('class', 'size').addClass("height");
        })

        btnZoom.click(function(){
          
          $('.size').toggleClass("zoomIn").attr('class', 'extended-size').removeClass("height");

        })



// $("#add-hidden").click(function(){
//     $("#bg-cover-add").addClass("hidden").addClass("out")
//     $(this).addClass("hidden").addClass("out")
//     $("#hero-disc").addClass("out").removeClass("in");

//     console.log("clicked-home")

// })

// contact for PHP



// function contact_form(){

//     $(".contact_form #send_message").on('click', function(){

//         var name 		= $(".contact_form #name").val();
//         var email 		= $(".contact_form #email").val();
//         var message 	= $(".contact_form #message").val();
//         // var subject 	= jQuery(".contact_form #subject").val();
//         var success     = $(".contact_form .returnmessage").data('success');

//         jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
//         //checking for blank fields	
//         if(name===''||email===''||message===''){

//             jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
//         }
//         else{
//             // Returns successful data submission message when the entered information is stored in database.
//             jQuery.post("./contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {

//                 jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph


//                 if(jQuery(".contact_form .returnmessage span.contact_error").length){
//                     jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
//                 }else{
//                     jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
//                     jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
//                 }

//                 if(data===""){
//                     jQuery("#contact_form")[0].reset();//To reset form fields on success
//                 }

//             });
//         }
//         return false; 
//     });
// }
// contact_form();