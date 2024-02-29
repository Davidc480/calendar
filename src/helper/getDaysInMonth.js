import getCalendarData from "./getCalendarData";

const getDaysInMonth = (year, month) => {
  let activeDay;

  const { monthYear } = getCalendarData();

  console.log(year);

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  const day = firstDay.getDay();
  const nextDays = 7 - lastDay.getDay() - 1;

  const currentMonthAndYear = monthYear[month] + " " + year;

  let prevDaysArray = [];

  for (let x = day; x > 0; x--) {
    prevDaysArray.push(
      <div key={`prev-date-${x}`} className="prev-date">
        {prevDays - x + 1}
      </div>
    );
  }

  for (let i = 1; i <= lastDate; i++) {
    if (
      i === new Date().getDate() &&
      year === new Date().getFullYear() &&
      month === new Date().getMonth()
    ) {
      prevDaysArray.push(
        <div key={`today-active-${i}`} className="today-active">
          {i}
        </div>
      );
    } else {
      prevDaysArray.push(
        <div key={`day-${i}`} className="day">
          {i}
        </div>
      );
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    prevDaysArray.push(
      <div key={`next-date-${j}`} className="next-date">
        {j}
      </div>
    );
  }

  console.log(prevDaysArray);

  const response = {
    currentMonthAndYear,
    daysPrev: prevDaysArray,
    month,
    year,
  };

  return response;
};

export default getDaysInMonth;
