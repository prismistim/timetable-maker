$(function(){
  $('#save').click(function() {
    html2canvas($('#result'), {
      onrendered : function(canvas) {
        $('#preview').empty();
        $('#preview').append(canvas);
      }
    });
  });

  $()
})