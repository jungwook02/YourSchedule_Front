import React, { useEffect, useState } from 'react';
import './projectmain.css';
import { Link } from 'react-router-dom';

function Projectmain() {
    const [boardTable, setBoardTable] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8090/board_ys');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setBoardTable(data);
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
                    <Link to="/creation">
                        <div className="Title-Text">
                            너의 일정은
                        </div>
                    </Link>
                </div>
                <Link to="/calender">
                    <div className="Preview">
                        <div className="Preview-Title">회의 시간</div>
                        <div className="Preview-Info">
                            <div className="Preview-Publisher">박정욱</div>
                            <div className="Preview-Time">19:38</div>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="Noticeboard-Box">
                <Link to="/newpost">
                    <div className="Box-Title">
                        <div className="Title-Text">게시판</div>
                    </div>
                </Link>
                {boardTable.map((board, index) => (
                    <Link key={index} to="/post">
                        <div className="Preview">
                            <div className="Preview-Title">{board.boardtitle}</div>
                            <div className="Preview-Info">
                                <div className="Preview-Publisher">{board.boardWriter}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Projectmain;
