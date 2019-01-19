$(function(){
  $('#save').on('click', function() {
    html2canvas(document.querySelector('#result')).then(canvas => {
      var image = canvas.toDataURL('image/png');

      $('#dl').attr("download", "timetable.png")
        .attr("href", image);  
      
      var evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      document.getElementById("dl").dispatchEvent(evt);
    });
  });
});