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


    // console.log(buttons);

    for (var i = 0; i < buttons.length; i++) {

      if (buttons[i] === "="){
        displayResult(calResult);
      } else {
        addValue(buttons);
      }



    }

    var calResult = calculate(buttons, buttons, operator);

    // console.log(calResult);

  }


  // Create a function that does the maths.
  function calculate(num1, num2, op) {
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
