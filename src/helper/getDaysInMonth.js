import getCalendarData from "./getCalendarData";

const getDaysInMonth = ({
  calendarRef,
  dateRef,
  daysRef,
  prevRef,
  nextRef,
}) => {
  let today = new Date();
  let activeDay;
  let month = today.getMonth();
  let year = today.getFullYear();

  const { monthYear } = getCalendarData();

  console.log(monthYear);

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  const day = firstDay.getDate();
  const nextDays = 7 - lastDay.getDay() - 1;

  const currentMonthAndYear = monthYear[month] + " " + year;

  let prevDaysArray = [];

  for (let x = day; x > 0; x--) {
    prevDaysArray.push(
      <div key={`prev-day-${x}`} className="prev-date">
        {prevDays - x + 1}
      </div>
    );
  }

  for (let i = 1; i < lastDate; i++) {
    if (
      i === new Date().getDate() &&
      year === new Date().getFullYear() &&
      month === new Date().getMonth()
    ) {
      prevDaysArray.push(
        <div key={`prev-day-${i}`} className="today-active">
          {i}
        </div>
      );
    } else {
      prevDaysArray.push(
        <div key={`prev-day-${i}`} className="day">
          {i}
        </div>
      );
    }
  }

  console.log(prevDaysArray);

  const response = {
    currentMonthAndYear,
    daysPrev: prevDaysArray,
  };

  return response;
};

export default getDaysInMonth;
