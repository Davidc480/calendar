'use client'
import React, { useRef, useState, useEffect } from 'react';
import styles from "./Calendar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons';
import getCalendarData from '@/helper/getCalendarData';
import getDaysInMonth from '@/helper/getDaysInMonth';



const Calendar = ()=>{

    const [dateInfo, setDateInfo] = useState({
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
      });

    const calendarRef = useRef(null);
    const dateRef = useRef(null);
    const daysRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [monthInfo, setMonthInfo] = useState("")


    const { weekdays, days, currentMonth, monthYear } = getCalendarData()

    useEffect(() => {
        const dates = getDaysInMonth(dateInfo.year, dateInfo.month);
        setMonthInfo(dates);
      }, [dateInfo]);

    // console.log(monthInfo.daysPrev);
    
    const handleClickprevMonth = () => {
        setDateInfo(prev => ({
          ...prev,
          month: prev.month - 1 < 0 ? 11 : prev.month - 1,
          year: prev.month - 1 < 0 ? prev.year - 1 : prev.year,
        }));
      };
      
      const handleClickNextMonth = () => {
        setDateInfo(prev => ({
          ...prev,
          month: prev.month + 1 > 11 ? 0 : prev.month + 1,
          year: prev.month + 1 > 11 ? prev.year + 1 : prev.year,
        }));
      };
    
      const handleClickToday = ()=>{
        const dates = getDaysInMonth(dateInfo.year, dateInfo.month);
        setMonthInfo(dates);
      }
    return(
        <div id="container" className={`${styles.container} relative w-[1200px] min-h-[850px] mx-auto p-1 text-white flex rounded-xl bg-[#373c4f]`}>
            <div id="left" className="w-[60%] p-5">
                <div id="calendar" ref={calendarRef} className={`${styles.calendar} relative w-full h-full flex flex-col flex-wrap justify-between text-[#878895] rounded-md bg-white`}>
                    <div id="month" className="w-full h-[150px] flex items-center justify-between px-[50px] text-base font-medium capitalize">
                    <FontAwesomeIcon icon={faAngleLeft} ref={prevRef} onClick={handleClickprevMonth} className={`${styles.prev} h-7 w-7 cursor-pointer`} />
                    <div id='date' ref={dateRef} className=''>{monthInfo.currentMonthAndYear }</div>
                    <FontAwesomeIcon icon={faAngleRight} ref={nextRef} onClick={handleClickNextMonth} className={`${styles.next} h-7 w-7 cursor-pointer`} />
                    </div>
                    <div id="weekdays" className="w-full h-[100px] flex items-center justify-between px-5 font-medium capitalize">
                        {weekdays.map((weekday)=> 
                            <div className="w-[14.28%] h-full flex items-center justify-center" key={weekday}>{weekday}</div>
                        )}
                    </div>
                    <div id="days" ref={daysRef} className="w-full flex flex-wrap justify-between px-5 text-base font-medium mb-5">{monthInfo.days}
                        {monthInfo ? monthInfo.daysPrev.map(day => React.cloneElement(day, {className: `${styles[day.props.className]}`})) : null}
                    </div>
                    <div id='goto-today' className='w-full h-[50px] flex items-center justify-between gap-[5px] px-5 mb-5 text-primaryColor'>
                        <div id='goto' className='flex items-center rounded-md overflow-hidden border border-primaryColor'>
                            <input type="text" placeholder='mm/yyyy' className='w-full h-[30px] outline-none border-none px-5 text-primaryColor rounded-md' />
                            <button id='goto-btn' className={`${styles.gotobtn} py-[5px] px-[10px] border border-primaryColor rounded-md bg-transparent cursor-pointer text-primaryColor `}>Go</button>
                        </div>
                        <button id='today-btn' onClick={handleClickToday} className={`${styles.todaybtn} py-[5px] px-[10px]  border border-primaryColor rounded-md bg-transparent cursor-pointer text-primaryColor`}>Today</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar;