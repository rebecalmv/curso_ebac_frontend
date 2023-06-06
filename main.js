$(document).ready(function() {
  $('#addTaskBtn').click(function() {
    var task = $('#taskInput').val();
    if (task.trim() !== '') {
      $('#taskList').append('<li>' + task + '</li>');
      $('#taskInput').val('');
    }
  });

  $('#taskList').on('click', 'li', function() {
    $(this).addClass('completed');
  });
});
