
document.addEventListener('DOMContentLoaded', function () {
  const list = [];
  $('input:checkbox').on('change', function () {
    const id = $(this).data('id');
    const name = $(this).data('name');
    if ($(this).is(':checked')) { list[id] = name; } else { delete list[id]; }
    $('.amenities h4').text(Object.values(list).join(', '));
    $('.amenities h4').css({
      'white-space': 'nowrap',
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      height: '1.5em',
      'line-height': '1.5em'
    });
  });
});
