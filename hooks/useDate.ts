import { useEffect, useState } from 'react';
import moment from 'moment';

const defaultDayFormatHours = 'DD/MM/YYYY HH:mm:ss';
const defaultDayFormatDays = 'DD/MM/YYYY';

export const useDate = () => {
  const convertUTCDateToLocalDate = date => {
    const dateF = new Date(date);
    const newDate = new Date(dateF.getTime() - dateF.getTimezoneOffset() * 60 * 1000);

    return newDate;
  };
  const differenceTime = date => {
    const date_past = new Date(date);
    const date_now = new Date();

    let seconds = Math.floor((date_now - date_past) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    let text = '';
    if (days > 0) text += (days > 9 ? days : '0' + days) + 'd ';
    text += (hours > 9 ? hours : '0' + hours) + 'h ';
    text += (minutes > 9 ? minutes : '0' + minutes) + 'm ';
    text += (seconds > 9 ? seconds : '0' + seconds) + 's ';
    if (Date.parse(date_past) < Date.parse(date_now)) {
      // start is less than End
      return text;
    } else {
      // end is less than start
      return null;
    }
  };
  const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update
  const weekday = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const date =
		weekday[today.getDay()] +
		'\n' +
		today.getDate() +
		' de ' +
		meses[today.getMonth()] +
		'\nde ' +
		today.getFullYear();

  const hours = today.getHours();
  const minutes = today.getMinutes();
  const time = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes);

  const convertDateToString = dateGet => {
    return (
      weekday[dateGet.getDay()] +
			' ' +
			dateGet.getDate() +
			' de ' +
			meses[dateGet.getMonth()] +
			' de ' +
			dateGet.getFullYear()
    );
  };

  const printDate = dateString => {
    return printDateWithFormat(dateString, defaultDayFormatDays);
  };

  const printDateComplete = dateString => {
    return printDateWithFormat(dateString, defaultDayFormatHours);
  };

  const printDateWithFormat = (dateString, format) => {
    const day = moment(dateString);
    return day.format(format);
  };

  return {
    date,
    time,
    convertUTCDateToLocalDate,
    differenceTime,
    convertDateToString,
    printDate,
    printDateComplete,
    printDateWithFormat
  };
};

export default useDate;
