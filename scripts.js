var color = 'rgb(128, 128, 128)';

$('.color').click( function() {
  color = $(this).css('background-color');
});


$('td').click( function() {
  console.log($(this).css('background-color'))
  if ($(this).css('background-color') != color) {
    $(this).css('background-color', color);
  }
  else {
    $(this).css('background-color', 'rgba(0, 0, 0, 0)');
  }
} );
