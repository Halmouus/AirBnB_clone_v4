
document.addEventListener('DOMContentLoaded', function () {
  let listlocations = [];
  $('.locations input:checkbox').on('change', function () {
    const id = $(this).data('id');
    const name = $(this).data('name');
    if ($(this).is(':checked')) { listlocations[id] = name; } else { delete listlocations[id];}
    $('.locations h4').text(Object.values(listlocations).join(', '));
    $('.locations h4').css({
      'white-space': 'nowrap',
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      height: '1.5em',
      'line-height': '1.5em',
      'padding-bottom': '0'
    });
  });
  let listamenities = [];
  $('.amenities input:checkbox').on('change', function () {
    const id = $(this).data('id');
    const name = $(this).data('name');
    if ($(this).is(':checked')) { listamenities[id] = name; } else { delete listamenities[id];}
    $('.amenities h4').text(Object.values(listamenities).join(', '));
    $('.amenities h4').css({
      'white-space': 'nowrap',
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      height: '1.5em',
      'line-height': '1.5em',
      'padding-bottom': '0'
    });
  });

  $.ajax({
    url: 'http://127.0.0.1:5001/api/v1/status/',
    success: (data) => {
      if (data.status === 'OK') { $('#api_status').addClass('available'); }
    }
  });
  

  $('button').on('click', () => {
    let chosenFilters = {"amenities": listamenities};
    $.ajax({
      url: 'http://127.0.0.1:5001/api/v1/places_search/',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(Object.keys(chosenFilters)),
      success: function (places) {
        const section = $('.places');
        section.empty();
        places.forEach(place => {
          const article = `<article>
            <div class="title_box">
             <h2>${place.name}</h2>
             <div class="price_by_night">${place.price_by_night}</div>
            </div>
            <div class="information">
             <div class="max_guest">${place.max_guest} Guest</div>
             <div class="number_rooms">${place.number_rooms} Bedroom</div>
             <div class="number_bathrooms">${place.number_bathrooms} Bathroom</div>
            </div>
             <div class="description">${place.description}</div>
           </article>`;
          section.append(article);
        });
      }
    });
  });
});
