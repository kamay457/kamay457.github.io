$(function() {
  $.get('/canvas', function(canvas) {
    canvases.forEach(function(canvas) {
      $('#canvas').append('<span>' + canvas[0] + '</span>');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var submit_bt = $('input#submit_bt').val();
    $.post('/canvases?' + $.param({ messageText: messageText, question: 'the question', answer: 'the answer' }), function() {
      $('#canvas').append('<span>' + messageText + '</span>');
      $('input#submit_bt').val('');
      $('input').focus();
    });
  });
});
