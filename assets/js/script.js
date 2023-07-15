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
//need to add dayjs advancedFormat and use Do to get suffixes
//https://day.js.org/docs/en/plugin/advanced-format
var localDate = dayjs().format('dddd, MMMM D');
// var savedText9 = localStorage.getItem('txt9');
// var savedText10 = localStorage.getItem('txt10');
// var savedText11 = localStorage.getItem('txt11');
// var savedText12 = localStorage.getItem('txt12');
// var savedText13 = localStorage.getItem('txt13');
// var savedText14 = localStorage.getItem('txt14');
// var savedText15 = localStorage.getItem('txt15');
// var savedText16 = localStorage.getItem('txt16');
// var savedText17 = localStorage.getItem('txt17');

console.log(localDate)
console.log(localTimeHour)

$('#currentDay').text(localDate)

 
// $('#txt9').text(savedText9)


// $('#9').css( "border", "3px solid red" );
// $('#9').css( "background-color", "red" );
//this is how to change the background color based on ID
// var idList = ['hour-9',"hour-10","hour-11","hour-12","hour-13","hour-14","hour-15","hour-16","hour-17"]
//starting code for looping through the calendar
//need to add an if calendar < localTimeHour, addClass('past');
//if calendar == localTimeHour, addClass('present');
//if calendar > localTimeHour, addClass('future');
for (i = 9;i<18;i++){
  if (localTimeHour > $(`#hour-${i}`).attr('value')){
    $(`#hour-${i}`).addClass('past')
    $(`#hour-${i}.children[1]`).addClass('gerbil')
    let toothpaste = localStorage.getItem(`txt${i}`);
    $(`#txt${i}`).text(toothpaste)
  }
  else if(localTimeHour == $(`#hour-${i}`).attr('value')){
    $(`#hour-${i}`).addClass('present')
    let hairspray = localStorage.getItem(`txt${i}`);
    $(`#txt${i}`).text(hairspray)
  }
  else if(localTimeHour < $(`#hour-${i}`).attr('value')){
    $(`#hour-${i}`).addClass('future')
    let shampoo = localStorage.getItem(`txt${i}`);
    $(`#txt${i}`).text(shampoo)
  }
  else {
    console.log('not during work')
  }
  console.log(`hour-${i}`)
}
//add attribute to div by id
// $('#hour-9').addClass('past');
//get value from div by id
// var puppy = $('#hour-9').attr('value')
// console.log(puppy)
// //compare div attribute to number
// console.log(localTimeHour ==puppy)






// jquery click events mod5 lesson3
//create variable for location to listen to
var button9 = $('button#btn9');

//create function what to do when button is clicked  on = eventListener
button9.on('click', function () {

  console.log( $(this));  //this is the jquery equivalent of event.target
  // console.log( $(this).attr("style","display:none"))  //can use $(this) to target or point to the thing that was clicked on and you can act on it,  this code will have the button not display

  //this console logs all of the  html text from all of the timeslots
  // console.log($(this).attr('value')); 
  
  // console.log($("#txt9").text())

  //get text input from text box
  var hour9Text = $("textarea#txt9").val()
  console.log(hour9Text)

  //save to local storage
  localStorage.setItem('txt9',hour9Text);


  console.log($('#btn9').attr('id')); 

});


//try on hour-10
var button10 = $('button#btn10');

//create function what to do when button is clicked  on = eventListener
button10.on('click', function () {
  console.log( $(this)); 
  var hour10Text = $("textarea#txt10").val()
  console.log(hour10Text)
  localStorage.setItem('txt10',hour10Text);
  console.log($('#btn10').attr('id')); 
});

var button11 = $('button#btn11');
button11.on('click', function () {
  console.log( $(this)); 
  var hour11Text = $("textarea#txt11").val()
  console.log(hour11Text)
  localStorage.setItem('txt11',hour11Text);
  console.log($('#btn11').attr('id')); 
});

var button12= $('button#btn12');
button12.on('click', function () {
  console.log( $(this)); 
  var hour12Text = $("textarea#txt12").val()
  console.log(hour12Text)
  localStorage.setItem('txt12',hour12Text);
  console.log($('#btn12').attr('id')); 
});

var button13 = $('button#btn13');
button13.on('click', function () {
  console.log( $(this)); 
  var hour13Text = $("textarea#txt13").val()
  console.log(hour13Text)
  localStorage.setItem('txt13',hour13Text);
  console.log($('#btn13').attr('id')); 
});

var button14 = $('button#btn14');
button14.on('click', function () {
  console.log( $(this)); 
  var hour14Text = $("textarea#txt14").val()
  console.log(hour14Text)
  localStorage.setItem('txt14',hour14Text);
  console.log($('#btn14').attr('id')); 
});

var button15 = $('button#btn15');
button15.on('click', function () {
  console.log( $(this)); 
  var hour15Text = $("textarea#txt15").val()
  console.log(hour15Text)
  localStorage.setItem('txt15',hour15Text);
  console.log($('#btn15').attr('id')); 
});

var button16 = $('button#btn16');
button16.on('click', function () {
  console.log( $(this)); 
  var hour16Text = $("textarea#txt16").val()
  console.log(hour16Text)
  localStorage.setItem('txt16',hour16Text);
  console.log($('#btn16').attr('id')); 
});

var button17 = $('button#btn17');
button17.on('click', function () {
  console.log( $(this)); 
  var hour17Text = $("textarea#txt17").val()
  console.log(hour17Text)
  localStorage.setItem('txt17',hour17Text);
  console.log($('#btn17').attr('id')); 
});
