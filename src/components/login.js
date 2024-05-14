import "./login.css"

function Login() {
    return(
        <div>
        <h1 className="h1-text">코드 입력</h1>
        <input type="text" placeholder="초대 코드를 입력해주세요" />
        <h2 className="h2-text">사용자 이름</h2>
        <input type="text" placeholder="이름을 입력해주세요" />
        <h2 className="h2-text">사용자 학번</h2>
        <input type="text" placeholder="학번을 입력해주세요" />



        <input type="submit" value="확인"/>
        </div>
    )

}

export default Login;