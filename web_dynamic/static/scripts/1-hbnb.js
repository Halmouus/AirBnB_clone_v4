$(document).ready(function() {
    let checked = {};
  
    $('input[type="checkbox"]').on('change', function() {
  
      if ($(this).is(':checked')) {
        checked[$(this).data('id')] = $(this).data('name');
      } else {
        delete checked[$(this).data('id')];
      }
  
      $('div#Amenities h4').text(Object.values(checked).join(', '));
    });
  });
  