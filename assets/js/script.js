// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

var localTimeHour = dayjs().hour();
console.log(localTimeHour)

// $('#9').css( "border", "3px solid red" );
// $('#9').css( "background-color", "red" );
//this is how to change the background color based on ID
var idList = ['hour-9',"hour-10","hour-11","hour-12","hour-13","hour-14","hour-15","hour-16","hour-17"]
//starting code for looping through the calendar
//need to add an if calendar < localTimeHour, addClass('past');
//if calendar == localTimeHour, addClass('present');
//if calendar > localTimeHour, addClass('future');
for (i = 9;i<18;i++){
  if (localTimeHour > $(`#hour-${i}`).attr('value')){
    $(`#hour-${i}`).addClass('past')
  }
  else if(localTimeHour == $(`#hour-${i}`).attr('value')){
    $(`#hour-${i}`).addClass('present')
  }
  else if(localTimeHour < $(`#hour-${i}`).attr('value')){
    $(`#hour-${i}`).addClass('future')
  }
  else {
    console.log('not during work')
  }
  console.log(`hour-${i}`)
}
//add attribute to div by id
// $('#hour-9').addClass('past');
//get value from div by id
var puppy = $('#hour-9').attr('value')
console.log(puppy)
//compare div attribute to number
console.log(localTimeHour ==puppy)




