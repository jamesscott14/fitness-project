// BMR Calculator
$(document).ready(function(){
  $('#Calculate').click(function(){
    var sexValue = $('.sex:checked').val();
    var age = parseInt($('#age').val());
    var height = parseInt($(".feet").val()) * 12 + parseInt($(".inches").val());
    var weight = parseInt($(".weight").val());
    var exerciseLevel = parseInt($("#exercise_per_week").val());

// get bmr value

    var bmr = ' ';
      // BMR FormulaB
      //
      // MR Women: (447.6 + (9.2 x (weight*/2.2)) + (3.1 x (height*/0.39)) - (4.3 x age in years))

      // BMR Men: (88.3 + (13.4 x (weight*/2.2)) + (4.8 x (height*/0.39)) - (5.7 x age in years))
      if (sexValue == "male"){
        bmr = Math.round((88.3 + (13.4 * (weight/2.2)) + (4.8 * (height/0.39)) - (5.7 * age)));
        console.log(bmr);
      }
      else if (sexValue === "female"){
        bmr = Math.round((447.6 + (9.2 * (weight/2.2)) + (3.1 * (height / 0.39)) - (4.3 * age)));
        console.log(bmr);
      };
       if (bmr === NaN){
        console.log("please complete the form")
      };


       if (exerciseLevel > 0){
        console.log("On rest days you should eat " + bmr + " calories, and on workout days, you should eat " + (bmr + 500) + " calories!");
      };
      $('#hideMe').show().html("Workout Days: " + (bmr + 500));
      $('#offDays').show().html("Rest Days: " + bmr);
      $('#toLose').show().html("To Lose Weight: " (bmr - 500));


});


});
