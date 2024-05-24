import React, { useState } from 'react';
import "./Projectlist.css";

function ProjectList() {
    // 초기 화면 설정(메인화면 이후 진행중인 프로젝트로)
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
    
    return(       
        <div>
            <div>
                <div className={`MenuBar ${activeMenu === "진행중인" ? "active" : "inactive"}`} onClick={() => handleClick("진행중인")}>진행중인</div>
                <div className={`MenuBar ${activeMenu === "완성된" ? "active" : "inactive"}`} onClick={() => handleClick("완성된")}>완성된</div>
                <div className="MenuBar">프로젝트</div>

                {activeMenu === "진행중인" && (
                    <div>
                        <div className="P-Box">
                        <p className="P-Title">캡스톤 디자인(모바일 프로그래밍)</p>
                        <p className="P-Sub">프로젝트 시작일:2024.5.14    4명</p>           
                    </div>

                    <div className="P-Box">
                        <p className="P-Title">동아리</p>
                        <p className="P-Sub">프로젝트 시작일:2024.5.14    20명</p>            
                    </div>

                    <div className="P-Box">
                        <p className="P-Title">프로그래밍 언어론</p>
                        <p className="P-Sub">프로젝트 시작일:2024.5.14    40명</p>            
                    </div>

                    <p className="Plus-Button" onClick={toggleNewProjectMenu}>+</p>

                    {/* + 버튼 항목 */}
                    {showNewProjectMenu && (
                        <div className="Plus-Menu">
                            <p className="Plus-Text">새로운 프로젝트</p>
                            <p className="Plus-Text">초대코드 입력</p>
                        </div>
                    )}
                </div>
                )}

                {activeMenu === "완성된" && (
                    <div>
                        <div className="P-Box">
                            <p className="P-Title">프로그래밍 언어론</p>
                            <p className="P-Sub">프로젝트 시작일:2024.5.14    40명</p>
                        </div>
                    </div>
                )}

                {activeMenu === "프로젝트" && (
                    <div className="P-Box" />
                )}
            </div>

        </div>
    );
}

export default ProjectList;
