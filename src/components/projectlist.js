import "./projectlist.css"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProjectList() {
    // 상태 추가
    const [projects, setProjects] = useState([]);
    
    const [activeMenu, setActiveMenu] = useState("진행중인");

    // + 버튼 누르기 전에는 메뉴 비활성화
    const [showNewProjectMenu, setShowNewProjectMenu] = useState(false);

    // 새로운 프로젝트 메뉴를 토글하는 함수
    const toggleNewProjectMenu = () => {
        setShowNewProjectMenu(!showNewProjectMenu);
    };

    // + 버튼 활성화
    const handleClick = (menu) => {
        setActiveMenu(menu);
    };
    // 데이터 로딩
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8090/api/projects');
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
            <div>
            <div>
                <div className={`MenuBar ${activeMenu === "진행중인" ? "active" : "inactive"}`} onClick={() => handleClick("진행중인")}>진행중인</div>
                <div className={`MenuBar ${activeMenu === "완성된" ? "active" : "inactive"}`} onClick={() => handleClick("완성된")}>완성된</div>
                <div className="MenuBar">프로젝트</div>

           
            {projects.map((project, index) => (
                <div key={index} className="Projectlist-Box">
                  <Link to="/projectdetail/${project.id}">
                    <p className="Projectlist-Title">{project.name}</p>
                    <p className="Projectlist-Sub">프로젝트 시작일: {project.startDate} ~ {project.endDate}</p>
                    </Link>
                </div>
            ))}
             <p className="Plus-Button" onClick={toggleNewProjectMenu}>+</p>

            {showNewProjectMenu && (
            <div className="Plus-Menu">
            <Link to="/new">새로운 프로젝트 생성</Link>
            <p className="Plus-Text">초대코드 입력</p>
            </div>
            )}
</div>

        </div>
        </div>
    );
}

export default ProjectList;
