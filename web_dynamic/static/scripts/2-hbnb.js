$(document).ready(function() {
  const url = 'http://0.0.0.0:5001/api/v1/status/';

  $.get(url, function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });

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
  