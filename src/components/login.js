import { Link } from "react-router-dom";
import "./login.css"

function Login() {
    return(
        <div>
            <div className="Login">로그인</div>

            <div className ="Align">
                <div className="Text">아이디</div>
                <input type="text" className="custom-input" placeholder="아이디를 입력해주세요" />

                <div className="Text">비밀번호</div>
                <input type="text" className="custom-input" placeholder="비밀번호를 입력해주세요" />
            </div>
            <Link to = "/main">
            <div className="Submit-Button">→</div>
            </Link>


        </div>
        
    )

}

export default Login;