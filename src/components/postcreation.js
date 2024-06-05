import React, { useState } from 'react';
import "./postcreation.css"
import { Link } from 'react-router-dom';

function PostCreation() {
    const [boardTitle, setTitle] = useState("");
    const [boardWriter, setWriter] = useState("");
    const [boardContents, setContent] = useState("");

    const handleSubmit = async () => {
        const newPost = {
            boardContents: boardContents,
            boardTitle: boardTitle,
            boardWriter: boardWriter
        };
    
        try {
            const response = await fetch('http://localhost:8090/board_ys', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPost) // 수정된 부분
            });
    
            if (!response.ok) {
                throw new Error('새 게시글 추가 실패');
            }
    
            console.log('새 게시글이 성공적으로 추가되었습니다!');
        } catch (error) {
            console.error('새 게시글 추가 중 오류 발생:', error);
        }
    };
    
    return(
        <div>
            <div className="PostCreation-Title">
                <div className="PostCreation-Text">
                    게시판 생성
                </div>
                <div className="Title-Text">
                    모바일 프로그래밍
                </div>
            </div>

            <div className="PostCreation-Box">
                <input 
                    type="text" 
                    className="Post-Title-input" 
                    placeholder="제목" 
                    value={boardTitle}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                    type="text" 
                    className="Post-Title-input" 
                    placeholder="작성자" 
                    value={boardWriter}
                    onChange={(e) => setWriter(e.target.value)}
                />
                <input
                    type="text"
                    className="Post-Content-input" 
                    placeholder="내용을 입력하세요"
                    value={boardContents}
                    onChange={(e) => setContent(e.target.value)}
                />
                
            </div>
            <Link to='/projectdetail/:id' onClick={handleSubmit}>
               <div className='creation_but'>
          <input type="submit" value="게시하기"/>
          </div>
          </Link>
        </div>
    )
}

export default PostCreation;
