import React, { useEffect, useState } from 'react';
import './projectmain.css';
import { Link } from 'react-router-dom';

function Projectmain() {
    const [boaradTable, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8090/board_ys');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); 
    }, []); 

    return (
     
        <div>
            <div className="Projectmain-Title">모바일 프로그래밍</div>

            <div className="Yourschedule-Box">
                <div className="Box-Title">
                    <Link to="/calender">
                        <div className="Title-Text">
                            너의 일정은
                        </div>
                    </Link>
                </div>

                <div className="Preview">
                    <div className="Preview-Title">회의 시간</div>
                    <div className="Preview-Info">
                        <div className="Preview-Publisher">박정욱</div>
                        <div className="Preview-Time">19:38</div>
                    </div>
                </div>
            </div>

            <div className="Noticeboard-Box">
                <Link to="/post">
                    <div className="Box-Title">
                        <div className="Title-Text">게시판</div>
                    </div>
                </Link>
                <Link to="/post">                
                {boaradTable.map((boaradTable, index) => (
                    <div key={index} className="Preview">
                        <div className="Preview-Title">{boaradTable.title}</div>
                        <div className="Preview-Info">
                            <div className="Preview-Publisher">{boaradTable.boardWriter}</div>
                            <div className="Preview-Time">{boaradTable.createAt}</div>
                        </div>
                    </div>
                ))}
                </Link>

            </div>
        </div>
    );
}

export default Projectmain;
