$('#create').click(function (){
  $('#sector2').css("display", "block");
  $('#fillout').css("display", "inline-block");
  $('#minireset').css("display", "inline-block");
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
    table += '<td><input name="content" type="text" class="djname" placeholder="名前 / 内容を入力"></td>';   
    date.add(interval, 'm');
  }

  table += '</tbody>';

  $('#resultTitle').append(eventTitle);
  $('#resultDate').append(eventDate);
  $('#resultTime').html('start : ' + time);
  $('#resultPlace').append('at : ' + place);
  $('#timetable').append(table);
  $('#resultCredit').html('created by TTMaker');
  $('#create').html('更新');
});

$('#fillout').click( function(){
  $('.djname').css('border', '0');
  $('#sector3').css("display", "block");
  $('.control#ssave').css("display", "block");
  $('#save').removeAttr('disabled', 'disabled');
});

$('form').change(function (){
  $('#create').removeAttr('disabled', 'disabled');
});

$('#reset').click(function (){
  $('#result').css("display", "none");
  $('#minireset').css("display", "none");
  $('#sector2').css("display", "none");
  $('#fillout').css("display", "none");
  $('#sector3').css("display", "none");
  $('.control#ssave').css("display", "none");

  // htmlの出力を削除
  $('#timetable').html('');
  $('#resultTitle').html('');
  $('#resultDate').html('');
  $('#resultTime').html('');
  $('#resultPlace').html('');

  $("#preview").empty();

  // フォームの中身を削除
  $('form').find(':text').val('').end()
    .find('input[type="number"]').val('').end()
      .find('input[type="date"]').val('').end()
        .find('input[type="time"]').val('');

  // ボタンの状態を変更
  $('#create').html('作成');
});

$('#minireset').click(function (){
  $('input[name="content"]').val('');
})