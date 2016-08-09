$(document).ready(function() {

  $('button').click(function(event) {
    event.preventDefault();


  });

  $('#1, #2, #3, #4, #5, #6, #7, #8, #9, #0, #dot').click(function (e) {
    var v = $(this).html();
    $('#result').html($('#result').html() + v);
    console.log(v);
  });

  $('#clear').click(function () {

    $('#result').html("");

  });

  $('#plus').click(function () {

    if ($('#result').html() === "") {
      return false;
    } else {
      var p = $('#plus').val();
      $('#result').html($('#result').html() + p);
    }

  });

  $('#subtract').click(function () {

    if ($('#result').html() === "") {
      return false;
    } else {
      var s = $('#subtract').val();
      $('#result').html($('#result').html() + s);
    }

  });

  $('#multiply').click(function () {

    if ($('#result').html() === "") {
      return false;
    } else {
      var m = $('#multiply').val();
      $('#result').html($('#result').html() + m);
    }

  });

  $('#divide').click(function () {

    if ($('#result').html() === "") {
      return false;
    } else {
      var d = $('#divide').val();
      $('#result').html($('#result').html() + d);
    }

  });


  $('#calculate').click(function () {



    if ($('#result').html() === "") {
      return false;
    } else {
      var cal = $('#result').html();

      $('#result').html(eval(cal));

    }

  });

});
