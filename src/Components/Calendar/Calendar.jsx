'use client'

import React, { useState, useEffect } from 'react';
import styles from "./Calendar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons';



const Calendar = ()=>{

  const weekdaysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const [numeroMes, setNumeroMes] = useState(0)
  
  const fechaActual = new Date();
  const mesActual = fechaActual.getMonth() + numeroMes;
  
  
  const monthYear = [
      {"nameMonth": "Enero", "numero_de_dias_del_mes": 31, "dia_de_inicio_del_mes": 1, "dia_de_final_del_mes": 3},
      {"nameMonth": "Febrero", "numero_de_dias_del_mes": 29, "dia_de_inicio_del_mes": 4, "dia_de_final_del_mes": 4},
      {"nameMonth": "Marzo", "numero_de_dias_del_mes": 31, "dia_de_inicio_del_mes": 5, "dia_de_final_del_mes": 0},
      {"nameMonth": "Abril", "numero_de_dias_del_mes": 30, "dia_de_inicio_del_mes": 1, "dia_de_final_del_mes": 2},
      {"nameMonth": "Mayo", "numero_de_dias_del_mes": 31, "dia_de_inicio_del_mes": 3, "dia_de_final_del_mes": 5},
      {"nameMonth": "Junio", "numero_de_dias_del_mes": 30, "dia_de_inicio_del_mes": 6, "dia_de_final_del_mes": 0},
      {"nameMonth": "Julio", "numero_de_dias_del_mes": 31, "dia_de_inicio_del_mes": 1, "dia_de_final_del_mes": 3},
      {"nameMonth": "Agosto", "numero_de_dias_del_mes": 31, "dia_de_inicio_del_mes": 4, "dia_de_final_del_mes": 6},
      {"nameMonth": "Septiembre", "numero_de_dias_del_mes": 30, "dia_de_inicio_del_mes": 0, "dia_de_final_del_mes": 1},
      {"nameMonth": "Octubre", "numero_de_dias_del_mes": 31, "dia_de_inicio_del_mes": 2, "dia_de_final_del_mes": 4},
      {"nameMonth": "Noviembre", "numero_de_dias_del_mes": 30, "dia_de_inicio_del_mes": 5, "dia_de_final_del_mes": 6},
      {"nameMonth": "Diciembre", "numero_de_dias_del_mes": 31, "dia_de_inicio_del_mes": 0, "dia_de_final_del_mes": 2}
  ]
  
  
  // Esto me da el dia en el que inicia el mes actual
  const mesInicio = monthYear[mesActual].dia_de_inicio_del_mes;
  
  const mes = monthYear[mesActual].nameMonth;
  
  console.log(mes);
  console.log(mesInicio);
  
  console.log(mesActual);
  
  
  //Array inicial de dias del mes.
  let daysArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
  
  // Cuantos días tiene nuestro mes.
  const numeroDeDias = monthYear[mesActual].numero_de_dias_del_mes;
  
  let mesAnteriorDias = ""
  
  if(mesActual == 0){
      mesAnteriorDias = monthYear[mesActual].numero_de_dias_del_mes
  } else {
      
      mesAnteriorDias = monthYear[mesActual - 1].numero_de_dias_del_mes
  }
  
  
  console.log(mesAnteriorDias);
  
  const montBefore = daysArray.slice(0, mesAnteriorDias)
  
  //Convertimos el array de forma que tenga solo los dias de nuestro mes actual.
  const dayArrayIterable = daysArray.slice(0, numeroDeDias)
  
  console.log(dayArrayIterable);
  
  //Iteramos tantas veses como 
  for(let i = 0; i < mesInicio; i++){
      const ultimoNumero = montBefore.pop();
      console.log(ultimoNumero);
      dayArrayIterable.unshift(ultimoNumero);
  }
  
  const mesFinal = monthYear[mesActual].dia_de_final_del_mes;
  
  
  console.log(mesFinal);
  
  while(dayArrayIterable.length < 42){
      const ultimoNumero = daysArray.shift() 
      dayArrayIterable.push(ultimoNumero)
  }
  
  console.log(dayArrayIterable);
  
  const handleClickPrev = ()=>{
      setNumeroMes(numeroMes - 1)
      
  }
  
  const handleClickNext = ()=>{
      setNumeroMes(numeroMes + 1)
      
  }

    return(
        <div id="container" className={`${styles.container} relative w-[1200px] min-h-[850px] mx-auto p-1 text-white flex rounded-xl bg-[#373c4f]`}>
            <div id="left" className=" w-3/5 p-5">
                <div id="calendar" className={`${styles.calendar} relative w-full h-full flex flex-col flex-wrap justify-between text-[#878895] rounded-md bg-white`}>
                    <div id="month" className="w-full h-[150px] flex items-center justify-between px-[50px] text-base font-medium capitalize">
                    <FontAwesomeIcon icon={faAngleLeft} onClick={handleClickPrev} className={`${styles.prev} h-7 w-7 cursor-pointer`} />
                    <div id='date' className=''>{nombreDelMes} 2024</div>
                    <FontAwesomeIcon icon={faAngleRight} onClick={handleClickNext} className={`${styles.next} h-7 w-7 cursor-pointer`} />
                    </div>
                    <div id="weekdays" className="w-full h-[100px] flex items-center justify-between px-5 font-medium capitalize">
                        {weekdaysArray.map((weekday)=> 
                            <div className="w-[14.28%] h-full flex items-center justify-center" key={weekday}>{weekday}</div>
                        )}
                    </div>
                    <div id="days" className="w-full flex flex-wrap justify-between px-5 text-base font-medium mb-5">
                        {daysArray.map((numberDay)=>
                            <div id="day" className="w-[14.28%] h-[90px] flex items-center justify-center cursor-pointer text-primaryColor border border-1 border-[#f5f5f5]" key={numberDay}>{numberDay}</div> 
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar;