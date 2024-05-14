import "./newproject.css"
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";



function Newproject() {
    const [startDate,setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date());
    return(
        <div className="new-Container">
        <h1 className="h1-text">새 프로젝트</h1>
        <br></br>
        <h2 className="h2-text">프로젝트 명</h2>
        <input type="text" placeholder="프로젝트명을 입력해주세요" />
        <h2 className="h2-text">프로젝트 기간</h2>

        <div className="date-container">
        <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        selectDate={startDate}
        endDate={endDate}
        /> 
       
        
         <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        selectStart={startDate}
        endDate={endDate}
        
        />

</div>

        

        <br></br>
        <h2 className="h2-text">프로젝트 종류</h2>
        
    
        <label>
    <select name="selectedFruit">
        <option value="" disabled selected hidden>프로젝트 종류를 선택해주세요</option>
        <option value="1st">팀프로젝트</option>
        <option value="2nd">공모전</option>
        <option value="3rd">대외활동</option>
    </select>
</label>

        <input type="submit" value="다음"/>
        </div>
    );


}

export default Newproject;