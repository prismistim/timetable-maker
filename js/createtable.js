$('#create').click(function (){
  // 初期化
  $('#timetable').html('');
  $('#resultTitle').html('');
  $('#resultDate').html('');
  $('#resultPlace').html('');

  var form = document.forms.infoForm;
  var people = form.howmanyDJ.value;
  var eventTitle = form.eventTitle.value;
  var eventDate = form.eventDate.value;
  var startTime = form.startTime.value;
  var interval = form.interval.value;
  var place = form.eventPlace.value;
  var table = '';
  var time = '';

  // var bufdate = eventDate.replace(/-/g, '/');
  var date = moment(eventDate + ' ' + startTime);
  date.format('HH:mm:ss');
  console.log(date);

  time = date.format('HH:mm');

  table += '<table class="timetable">';
  table += '<thead><tr>';
  table += '<th>Time</th>';
  table += '<th>Name</th>';
  table += '</tr></thead><tbody>';
  
  for(var i = 0; i < people; i++){
    table += '<tr>';
    table += '<td>' + date.format('HH:mm') + '</td>';
    table += '<td><input type="text" class="djname"></td>';   
    date.add(interval, 'm');
    console.log(date);
  }

  table += '</tbody>';

  $('#resultTitle').append(eventTitle);
  $('#resultDate').append(eventDate);
  $('#resultTime').html('start ' + time);
  $('#resultPlace').append('at ' + place);
  $('#timetable').append(table);
  $('#resultCredit').html('created by TTMaker');
  $('#create').html('Update');
});

$('form').change(function (){
  $('#create').removeAttr('disabled', 'disabled');
  $('#reset').removeAttr('disabled', 'disabled');
});

$('#reset').click(function (){
  // htmlの出力を削除
  $('#timetable').html('');
  $('#resultTitle').html('');
  $('#resultDate').html('');
  $('#resultPlace').html('');

  // フォームの中身を削除
  $('form').find(':text').val('').end()
    .find('input[type="number"]').val('').end()
      .find('input[type="date"]').val('').end()
        .find('input[type="time"]').val('');

  // ボタンの状態を変更
  $('#reset').attr('disabled', 'disabled');
  $('#create').html('Create');
});