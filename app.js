$(function() {

  // Event listener for button.

  $('button').click(function(event) {
    event.preventDefault();
    runCalculator();

    // console.log(result);
  });

  // Go and get the stuff from the page.

  function runCalculator() {
    var fnum = parseInt($('.numbers').html());
    var snum = parseInt($('.numbers').html());
    var operator = $('.operator').val();
    var clear = $('#clear');


    console.log(operator);

    for (var i = 0; i < fnum.length; i++) {
      if (fnum[i].html() === "="){
        displayResult(calResult);
      } else {
        addValue(fnum || snum);
      }

    }



    var calResult = calculate(fnum, snum, operator);


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

  // Add value to the results <p> tag.
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
