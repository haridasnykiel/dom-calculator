$(function() {

  // Event listener for button.

  $('button').click(function(event) {
    event.preventDefault();
    runCalculator();

  });

  // Go and get the stuff from the page.

  function runCalculator() {
    var buttons = $('button').val();
    var operator = $('.operator').val();
    var clear = $('#clear').val();


    console.log(buttons);

    $(buttons).each(buttons, function(i, v) {

      if (buttons[v] === "="){
        displayResult(calResult);
      } else if (buttons[v] === "C") {
        clear();
      } else {
        addValue(buttons);
      }

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
    $("#result").html(input);

  }

  // Create a function that displays the results.
  function displayResult(result) {
    // put result on the page
    // console.log(result);
    $("#result").html(result);


    // console.log(result);
  }

});
