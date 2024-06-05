import "./YourScheduleCreation.css"

function YourSchedlueCreation() {
    return(
        <div>
            <div className="YourSchedule-Title">
                <div className="YourSchedule-Text">
                    너의 일정은
                </div>
                <div className="Title-Text">
                    모바일 프로그래밍
                </div>
            </div>

            <div className="YourSchedule-Box">
            <input type="text" class="Post-Title-input" placeholder="주제를 입력해주세요" />
            
            <div className="PostCreation-Button">게시하기</div>
            </div>

            
        </div>
    )

}

export default YourSchedlueCreation;