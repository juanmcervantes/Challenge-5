$(function () {
  // Display current day in the header
  $("#currentDay").text(dayjs().format('MMMM D, YYYY'));

  // Color coding the time blocks
  $(".time-block").each(function() {
      var hourBlock = parseInt($(this).attr("id").split("-")[1]);
      var currentHour = dayjs().hour();

      if (hourBlock < currentHour) {
          $(this).addClass("past");
      } else if (hourBlock === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
      } else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
      }
  });

  // Save events to local storage
  $(".saveBtn").on("click", function() {
      var hour = $(this).parent().attr("id").split("-")[1];
      var event = $(this).siblings(".description").val();

      localStorage.setItem(hour, event);
  });

  // Load saved events from local storage
  $(".time-block").each(function() {
      var hour = $(this).attr("id").split("-")[1];
      var savedEvent = localStorage.getItem(hour);

      if (savedEvent) {
          $(this).children(".description").val(savedEvent);
      }
  });
});
