var gallonsToLitersHeader1 = "Gallons to Liters";
var gallonsToLitersHeader2 = "Liters to Gallons"


function convertGallonsToLiters(gallons) {
  return gallons * 3.785;
}

function convertLitersToGallons(liters) {
  return liters / 3.785;
}

$(document).ready(function() {
  $("#gallonsToLitersHeader").click(function() {
    var headerText = $("span#gallonsToLitersHeader").text();
    var newHeaderText;
    var newLabelText;

    if (headerText == gallonsToLitersHeader1) {
      newHeaderText = gallonsToLitersHeader2;
      newLabelText = "Liters";
    }
    else {
      newHeaderText = gallonsToLitersHeader1;
      newLabelText = "Gallons";
    }

    $("span#gallonsToLitersHeader").text(newHeaderText);
    $("label#gallonsToLitersLabel").text(newLabelText);
  });
});

$(document).ready(function() {
  $("#formOne").submit(function(event){
    var typeOfConversion = $("span#gallonsToLitersHeader").text();
    if (typeOfConversion == gallonsToLitersHeader1) {
      var gallons = parseFloat($("input#gallons").val());
      var liters = convertGallonsToLiters(gallons);
      $("#gallonsToLitersValue").text(liters);
    }
    else {
      var liters = parseInt($("input#gallons").val());
      var gallons = convertLitersToGallons(liters);
      $("#gallonsToLitersValue").text(gallons);
    }

    $("#gallonsToLitersResult").show();
    event.preventDefault();
  });
});



// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     var gallons = parseInt("input#gallons").val();
//     var result = gallons * 3.785;
//      $(#output).text(result);
//   });
// });
