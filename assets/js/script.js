$(function(){
	// Tooltip
	$('[data-toggle="tooltip"]').tooltip()
	
	// Modal
	$('#myModal').on('shown.bs.modal', function () {
  		$('#myInput').trigger('focus')
	})
	
 // Smooth
	$("a").on('click', function(event) {
    if (this.hash !== "") {
       event.preventDefault();

      // Variable del hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

		window.location.hash = hash;
      });
    } // End if
  });
	
 // Fin Smooth	
});