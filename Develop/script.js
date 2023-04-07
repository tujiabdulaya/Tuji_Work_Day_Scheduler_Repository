// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $(".saveBtn").click(function () {
    var textArea = $(this).siblings("textarea").val();
    var rowTime = $(this).parent().attr("id");
    console.log(rowTime, textArea);
    localStorage.setItem(rowTime, textArea);
  });

  for (let i = 9; i < 18; i++) {
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
  }

  $(`.time-block`).each(function () {
    var currentHour = dayjs().hour();
    var rowHour = parseInt($(this).attr(`id`).split(`-`)[1]);
    console.log(rowHour);
    if(rowHour < currentHour){
      $(this).addClass(`past`)
    }
    else if(rowHour===currentHour){
      $(this).addClass(`present`)
    }
    else{
      $(this).addClass(`future`)
    }
  });

  // TODO: Add code to display the current date in the header of the page.

  
});
