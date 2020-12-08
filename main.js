let currentDay = document.getElementById("currentDay");
let DateTime = luxon.DateTime;
let today = DateTime.local();
currentDay.textContent = today.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
