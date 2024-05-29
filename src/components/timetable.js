import React, { useState, useEffect } from 'react';
import Timetable from 'react-scheduler-table';
import axios from 'axios';
import './timetable.css';

function Scheduler() {
    const [reserved, setReserved] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8090/yourSchedule');
                console.log('Fetched data:', response.data);
                setReserved(response.data);
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching reserved data:', error);
            }
        };

        fetchData();
    }, []);

    console.log('Reserved data:', reserved);

    const settings = {
        cellHeight: 40,
        startDay: "09:00",
        endDay: "18:00",
        is12hours: false,
        hourSplit: 0.5,
        columnCnt: 7,
        className: "MyTable",
        classNameSavedTime: "MySavedTime"
    };

    const savedTimeContent = () => {
        return (
            <h5>
                {reserved.map((time, index) => (
                    <span key={index}>
                        {`${time.start} - ${time.end}`} <br />
                    </span>
                ))}
            </h5>
        );
    };

    const onAddTime = ({ activeColumn, newStartTime, newEndTime }) => {
        console.log('Added time:', { activeColumn, newStartTime, newEndTime, reserved });
   };

    const onSaveTime = ({ activeColumn, newStartTime, newEndTime }) => {
        console.log('Saved time:', { activeColumn, newStartTime, newEndTime, reserved });
   };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='max'>
            <div><h1>너의 일정은</h1></div>
            <Timetable 
                settings={settings}
                className="MyTable"
                classNameSavedTime="MySavedTime"
                reserved={reserved}
                savedTimeContent={savedTimeContent}
                onAddTime={onAddTime}
                onSaveTime={onSaveTime}
            />
        </div>
    );
}

export default Scheduler;
