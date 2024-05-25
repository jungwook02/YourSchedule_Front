import "./newproject.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';


function NewProject() {
    const [projectName, setProjectName] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [projectType, setProjectType] = useState("");

    const handleSubmit = async () => {
        const newProject = {
            name: projectName,
            startDate: startDate,
            endDate: endDate,
            type: projectType
        };

        try {
            const response = await fetch('http://localhost:8090/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProject)
            });

            if (!response.ok) {
                throw new Error('Failed to add new project');
            }

         
            console.log('New project added successfully!');
        } catch (error) {
            console.error('Error adding new project:', error);
        }
    };

    return (
        <div className="new-Container">
            <h1 className="h1-text">새 프로젝트</h1>
            <br />
            <h2 className="h2-text">프로젝트 명</h2>
            <input type="text" placeholder="프로젝트명을 입력해주세요" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
            <h2 className="h2-text">프로젝트 기간</h2>
            <div className="date-container">
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                />
                <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                />
            </div>
            <br />
            <h2 className="h2-text">프로젝트 종류</h2>
            <select name="selectedFruit" value={projectType} onChange={(e) => setProjectType(e.target.value)}>
                <option value="" disabled hidden>프로젝트 종류를 선택해주세요</option>
                <option value="팀프로젝트">팀프로젝트</option>
                <option value="공모전">공모전</option>
                <option value="대외활동">대외활동</option>
            </select>
            <br />
            <Link to="/main" onClick={handleSubmit}>
        <input type="submit" value="다음" />
      </Link>
        </div>
    );
}

export default NewProject;
