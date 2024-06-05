import React from 'react';
import "./post.css"
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
function Post() {
  
    const content123 = `구글 스프레드시트로 WBS 제작했습니다!
    권한 풀어놔서 링크 확인해주시면 감사하겠습니다.

    https://docs.google.com/spreadsheets/d/1t_hIeR84JKycZ_fHM-fbIb252TVhSjOB5ZYPDObW_IY/edit#gid=0`;

    // URL을 감지하여 링크로 변환하고, 줄바꿈도 처리
    const formattedContent = content123.split('\n').map((line, index) => {
        const parts = line.split(/(https?:\/\/[^\s]+)/g).map((part, i) => {
            if (part.match(/https?:\/\/[^\s]+/)) {
                return (
                    <a key={i} href={part} target="_blank" rel="noopener noreferrer">
                        {part}
                    </a>
                );
            }
            return part;
        });

        return (
            <React.Fragment key={index}>
                {parts}
                <br />
            </React.Fragment>
        );
    });
    const [comment, setProjects] = useState([]);
    const [content, setContent] = useState("");
    const [boardId, setUserId] = useState("");

 const handleSubmit = async () => {
     const newcomment = {
         content:content,
         boardId:boardId

     };

     try {
         const response = await fetch('http://localhost:8090/board_ys/comments', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(newcomment)
         });

         if (!response.ok) {
             throw new Error('Failed to add new project');
         }

      
         console.log('New project added successfully!');
     } catch (error) {
         console.error('Error adding new project:', error);
     }
 };

 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8090/board_ys/comments/1');
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

    return(
        <div>
            <div className="Post">
                <div className="Post-Text">
                    게시판
                </div>
                <div className="Title-Text">
                    모바일 프로그래밍
                </div>
            </div>

            <div className="Post-Box">
                <div className="Post-Publisher">이어진</div>
                <div className="Post-Time">05/27 10:59</div>

                <div className="Post-ContentTitle">WBS</div>
                <div className="Post-Content">{formattedContent}</div>
            </div>

          
            {comment.map((comment, index) => (
                <div key={index} className="Comment">
                <div className="Comment-Writer"></div>
                <div className="Comment-Content">{comment.content}</div>
            </div>
  ))}
       
       <div className="Comment-inputBox">
       <input
                    type="text"
                    value={boardId}
                    className="Comment-input"
                    onChange={(e) => setUserId(e.target.value)} 
                />
                <input type="text" className="Comment-input" placeholder="댓글을 입력해주세요" value={content}
                    onChange={(e) => setContent(e.target.value)} />
               
               <button onClick={handleSubmit} className="Send-Button">→</button>
            </div>
            
  
        </div>
    )
}

export default Post;