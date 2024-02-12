console.log("Your index.js file is loaded correctly!");


$(document).ready(function() {
    var downloadResumeBtn = $("#downloaResumeBtn");
  
    // When the user scrolls down 20px from the top of the document, show the button
    $(window).scroll(function() {
      scrollFunction();
    });
  
    function scrollFunction() {
      if ($(document).scrollTop() > 20) {
        'downloadResumeBtnbutton'.css("display", "block");
      } else {
        'downloadResumeBtnbutton'.css("display", "none");
      }
    }
  
    // When the user clicks on the button, scroll to the top of the document
    'downloadResumeBtnbutton'.click(function() {
      $("body,html").animate({ scrollTop: 0 }, "slow");
    });
  });

  function myFunction() {
    document.getElementById("demo").innerHTML = "Thank you for downloading my resume!";
  }
  