import React, { useState, useEffect } from 'react';
import Timetable from 'react-scheduler-table';
import axios from 'axios';
import './timetable.css';

function Scheduler() {
    const [reserved, setReserved] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8090/yourSchedule');
                setReserved(response.data);
            } catch (error) {
                console.error('Error fetching reserved data:', error);
            }
        };

        fetchData();
    }, []);

    const settings = {
        cellHeight: 40,
        startDay: "09:00",
        endDay: "18:00",
        is12hours: false,
        hourSplit: 0.5,
        columnCnt: 7
    };

    const savedTimeContent = () => {
        return (
            <h5>
                My Saved Time: <br />
                {reserved.map((time, index) => (
                    <span key={index}>
                        {`${time.start} - ${time.end}`} <br />
                    </span>
                ))}
            </h5>
        );
    };

    return (
        <div className='max'>
            <div><h1>너의 일정은</h1></div>
            <Timetable 
                settings={settings}
                className="MyTable"
                classNameSavedTime="MySavedTime"
                reserved={reserved}
                savedTimeContent={savedTimeContent}
            />
        </div>
    );
}

export default Scheduler;
