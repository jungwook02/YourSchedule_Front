import "./Projectlist.css"


function ProjectList() {
    return(
        <div>
        <div className="first-project">
            <p className="P-Title">캡스톤 디자인(모바일 프로그래밍)</p>
            <p className="P-sub">프로젝트 시작일:2024.5.14    4명</p>
            
        </div>

        <div className="first-project">
            <p className="P-Title">동아리</p>
            <p className="P-sub">프로젝트 시작일:2024.5.14    20명</p>
            
        </div>

        <div className="first-project">
            <p className="P-Title">프로그래밍 언어론</p>
            <p className="P-sub">프로젝트 시작일:2024.5.14    40명</p>
            
        </div>


        <p className="plus">+</p>

        </div>
    )
}

export default ProjectList;