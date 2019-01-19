$('#create').click(function (){
  $('#result').css("display", "block");

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

  time = date.format('HH:mm');

  table += '<table class="timetable">';
  table += '<thead><tr>';
  table += '<th>Time</th>';
  table += '<th>Name / Contents</th>';
  table += '</tr></thead><tbody>';
  
  for(var i = 0; i < people; i++){
    table += '<tr>';
    table += '<td>' + date.format('HH:mm') + '</td>';
    table += '<td><input type="text" class="djname" placeholder="名前 / 内容を入力"></td>';   
    date.add(interval, 'm');
  }

  table += '</tbody>';

  $('#resultTitle').append(eventTitle);
  $('#resultDate').append(eventDate);
  $('#resultTime').html('start : ' + time);
  $('#resultPlace').append('at : ' + place);
  $('#timetable').append(table);
  $('#resultCredit').html('created by TTMaker');
  $('#create').html('Update');
  $('#fillout').removeAttr('disabled', 'disabled');
});

$('#fillout').click( function(){
  $('.djname').css('border', '0');
  $('#save').removeAttr('disabled', 'disabled');
});

$('form').change(function (){
  $('#create').removeAttr('disabled', 'disabled');
  $('#reset').removeAttr('disabled', 'disabled');
});

$('#reset').click(function (){
  $('#result').css("display", "none");

  // htmlの出力を削除
  $('#timetable').html('');
  $('#resultTitle').html('');
  $('#resultDate').html('');
  $('#resultTime').html('');
  $('#resultPlace').html('');

  // フォームの中身を削除
  $('form').find(':text').val('').end()
    .find('input[type="number"]').val('').end()
      .find('input[type="date"]').val('').end()
        .find('input[type="time"]').val('');

  // ボタンの状態を変更
  $('#create').html('Create');
});