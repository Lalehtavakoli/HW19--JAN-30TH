console.log("Your index.js file is loaded correctly!");


$(document).ready(function() {
    var learnMoreBtn = $("#learnMoreBtn");
  
    // When the user scrolls down 20px from the top of the document, show the button
    $(window).scroll(function() {
      scrollFunction();
    });
  
    function scrollFunction() {
      if ($(document).scrollTop() > 20) {
        learnMoreBtnbutton.css("display", "block");
      } else {
        learnMoreBtnbutton.css("display", "none");
      }
    }
  
    // When the user clicks on the button, scroll to the top of the document
    learnMoreBtnbutton.click(function() {
      $("body,html").animate({ scrollTop: 0 }, "slow");
    });
  });
  