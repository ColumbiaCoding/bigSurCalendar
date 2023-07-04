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
  $(".saveBtn").on("click", function(){
    
      var line13 = $(this).parent().attr('id');
      var line14 = $(this).siblings('textarea').val(); 
      localStorage.setItem(line13, line14);
 
      console.log(line13)
       console.log(line14)
     });
     
     $(document).ready(function() {
      // Get the current hour
      var currentTime = dayjs().hour();
      console.log(currentTime)

      // Loop through each element with an ID starting with 'hour-'
      $('[id^="hour-"]').each(function() {
        // Get the ID of the element
        var id = $(this).attr('id');
        
        // Extract the hour value from the ID (The format is 'hour-X')
        var hour = parseInt(id.split('-')[1]);
        console.log(hour)
        // Now we are comparing the hour with the current hour
        if (hour < currentTime) {
          $(this).addClass('past');
        } else if (hour === currentTime) {
          $(this).addClass('present');
        } else {
          $(this).addClass('future');
        }
      });
    });


 
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
