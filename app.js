$(function() {

  // Event listener for button.

  $('button').click(function(event) {
    event.preventDefault();
    runCalculator();

  });

  // Go and get the stuff from the page.

  function runCalculator() {
    var buttons = $('#1, #2, #3, #4, #5, #6, #7, #8, #9, #0, #dot').val();
    var operator = $('.operator').val();
    console.log(buttons);

    $(buttons).each(function(i, v) {

      if ($('#calculate')){
        displayResult(calResult);
      } else if ($('#clear')) {
        clear();
      } else {
        addValue(i);
      }

      console.log(i);
    });



    var calResult = calculate(buttons, operator, buttons);

    // console.log(calResult);

  }


  // Create a function that does the maths.
  function calculate(num1, op, num2) {
    // ifs and elses (switch?) using num1, num2 and operator


      var result;

      switch (op) {
        case "+":
          result = num1 + num2;

          break;

        case "-":
           result = num1 - num2;

          break;

        case "*":
          result = num1 * num2;

          break;

        case "/":
          result = num1 / num2;

          break;

        default:

      }
      // console.log(result);
      return result;
  }

  function clear() {
    $('#result').html("");
  }

  function addValue(input) {
    $("#result").html(input + input);

  }

  // Create a function that displays the results.
  function displayResult(result) {
    // put result on the page
    // console.log(result);
    $("#result").html(result);


    // console.log(result);
  }

});
