$(document).ready(function() {
    $('.gallery-image').click(function() {
      var largeImageSrc = $(this).attr('data-large');
      $('#modal-image').attr('src', largeImageSrc);
      $('#myModal').show();
    });
  
    $('.close').click(function() {
      $('#myModal').hide();
    });
  
    $(window).click(function(e) {
      if ($(e.target).is('#myModal')) {
        $('#myModal').hide();
      }
    });
  });