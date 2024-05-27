import "./projectmain.css";
import { Link } from 'react-router-dom';
function Projectmain() {

    return(
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
                <Link to = "/post">
                <div className="Box-Title">
                    <div className="Title-Text">게시판</div>
                </div>
                </Link>

                <div className="Preview">
                    <div className="Preview-Title">5/28 발표 자료</div>
                    <div className="Preview-Info">
                        <div className="Preview-Publisher">박한비</div>
                        <div className="Preview-Time">13:05</div>
                    </div>
                </div>

                <div className="Preview">
                    <div className="Preview-Title">WBS</div>
                    <div className="Preview-Info">
                        <div className="Preview-Publisher">이어진</div>
                        <div className="Preview-Time">10:43</div>
                    </div>
                </div>

                <div className="Preview">
                    <div className="Preview-Title">개발 진행 상황</div>
                    <div className="Preview-Info">
                        <div className="Preview-Publisher">김섭진</div>
                        <div className="Preview-Time">10:43</div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Projectmain;