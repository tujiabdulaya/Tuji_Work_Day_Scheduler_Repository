var todaysDate = dayjs().format("dddd, MMM D, YYYY");

$("#currentDay").text(todaysDate);

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
    if (rowHour < currentHour) {
      $(this).addClass(`past`);
    } else if (rowHour === currentHour) {
      $(this).addClass(`present`);
    } else {
      $(this).addClass(`future`);
    }
  });
});
