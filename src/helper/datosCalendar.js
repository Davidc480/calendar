const datosCalendar = () => {
  const fechaActual = new Date();
  const mesActual = fechaActual.getMonth();

  const weekdaysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const daysArray = [
    { class: "prev-date", day: "30" },
    { class: "prev-date", day: "31" },
    { class: "event", day: "1" },
    { class: "day", day: "2" },
    { class: "day", day: "3" },
    { class: "day", day: "4" },
    { class: "day", day: "5" },
    { class: "day", day: "6" },
    { class: "day", day: "7" },
    { class: "day", day: "8" },
    { class: "day", day: "9" },
    { class: "day", day: "10" },
    { class: "event", day: "11" },
    { class: "day", day: "12" },
    { class: "day", day: "13" },
    { class: "day", day: "14" },
    { class: "today-active-event", day: "15" },
    { class: "day", day: "16" },
    { class: "day", day: "17" },
    { class: "day", day: "18" },
    { class: "day", day: "19" },
    { class: "day", day: "20" },
    { class: "day", day: "21" },
    { class: "day", day: "22" },
    { class: "day", day: "23" },
    { class: "day", day: "24" },
    { class: "event", day: "25" },
    { class: "day", day: "26" },
    { class: "day", day: "27" },
    { class: "day", day: "28" },
    { class: "day", day: "29" },
    { class: "day", day: "30" },
    { class: "next-date", day: "1" },
    { class: "next-date", day: "2" },
    { class: "next-date", day: "3" },
  ];

  const monthYear = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
    // {"nameMonth": "Enero", "numero_de_dias_del_mes": 31, "dia_de_inicio_del_mes": 1, "dia_de_final_del_mes": 3},
    // {"nameMonth": "Febrero", "numero_de_dias_del_mes": 29, "dia_de_inicio_del_mes": 4, "dia_de_final_del_mes": 4},
    // {"nameMonth": "Marzo", "numero_de_dias_del_mes": 31, "dia_de_inicio_del_mes": 5, "dia_de_final_del_mes": 0},
    // {"nameMonth": "Abril", "numero_de_dias_del_mes": 30, "dia_de_inicio_del_mes": 1, "dia_de_final_del_mes": 2},
    // {"nameMonth": "Mayo", "numero_de_dias_del_mes": 31, "dia_de_inicio_del_mes": 3, "dia_de_final_del_mes": 5},
    // {"nameMonth": "Junio", "numero_de_dias_del_mes": 30, "dia_de_inicio_del_mes": 6, "dia_de_final_del_mes": 0},
    // {"nameMonth": "Julio", "numero_de_dias_del_mes": 31, "dia_de_inicio_del_mes": 1, "dia_de_final_del_mes": 3},
    // {"nameMonth": "Agosto", "numero_de_dias_del_mes": 31, "dia_de_inicio_del_mes": 4, "dia_de_final_del_mes": 6},
    // {"nameMonth": "Septiembre", "numero_de_dias_del_mes": 30, "dia_de_inicio_del_mes": 0, "dia_de_final_del_mes": 1},
    // {"nameMonth": "Octubre", "numero_de_dias_del_mes": 31, "dia_de_inicio_del_mes": 2, "dia_de_final_del_mes": 4},
    // {"nameMonth": "Noviembre", "numero_de_dias_del_mes": 30, "dia_de_inicio_del_mes": 5, "dia_de_final_del_mes": 6},
    // {"nameMonth": "Diciembre", "numero_de_dias_del_mes": 31, "dia_de_inicio_del_mes": 0, "dia_de_final_del_mes": 2}
  ];

  return {
    weekdays: weekdaysArray,
    days: daysArray,
    monthActual: monthYear[mesActual],
  };
};

export default datosCalendar;
