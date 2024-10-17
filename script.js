let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calender-dates");

const currdate = document.querySelector(".calender-current-date");

const prenexIcons = document.querySelector(".calender-navigation span");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const manipulate = () => {
  let dayone = new Date(year, month, 1).getDay();
  let lastdate = new Date(year, month, +1, 0).getDate();

  let dayend = new Date(year, month, lastdate).getDay();

  let monthlastdate = new Date(year, month, 0).getDate();

  let lit = "";

  for (let i = dayone; i > 0; i--) {
    lit += `<li class="inactive>${monthlastdate - i + 1}</li>`;
  }

  for (let i = 1; i <= lastdate; i++) {
    // check if the current day is today
    let isToday =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active"
        : "";
    lit += `<li class="${isToday}>${i}</li>`;
  }
};
