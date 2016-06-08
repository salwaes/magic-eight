$(document).ready(function() {

$('button').on("click",function() {
  $('img').removeClass();
  setTimeout(function(){$('img').addClass('animated zoomIn')}, 1
    );
  });
});
