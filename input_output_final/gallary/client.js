// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  $.get('/messages', function(messages) {
    messages.forEach(function(message) {
      $('#messages').append('<li>' + message[0] + '</li>');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var messageText = $('input#messageText').val();
    $.post('/messages?' + $.param({ messageText: messageText, question: 'the question', answer: 'the answer' }), function() {
      $('#messages').append('<li>' + messageText + '</li>');
      $('input#messageText').val('');
      $('input').focus();
    });
  });
});
