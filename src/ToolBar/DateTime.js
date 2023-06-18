import  React, { useState , useEffect } from 'react';
import './DateTime.css';

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    function pad(num) {
        if(num < 10) {
            return `0${num}`;
        }
        return `${num}`;
    }

    function getDate(date) {
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const weekday = weekdays[date.getDay()]
        const month = months[date.getMonth()]

        return `${weekday} ${month} ${date.getDate()}`;
    }

    function getTime(date) {

        let hour = date.getHours() % 12;
        if(hour == 0) hour = 12;

        const minutes = pad(date.getMinutes());

        const peroid = date.getMinutes() < 12 ? 'AM' : 'PM';

        return `${hour}:${minutes} ${peroid}`;
    }

    return(
        <div className='DateTime'>
            <div className="DateTime__Date">{getDate(date)}</div>
            <div className="DateTime__Time">{getTime(date)}</div>
        </div>
    )
}

export default DateTime;