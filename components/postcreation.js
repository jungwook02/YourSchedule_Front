import React, { useState } from 'react';
import "./postcreation.css"

function PostCreation() {
    const [content, setContent] = useState('');

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
            <input type="text" class="Post-Title-input" placeholder="제목" />
            <textarea 
                className="Post-Content-input" 
                placeholder="내용을 입력하세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <div className="PostCreation-Button">게시하기</div>
            </div>

            
        </div>
    )

}

export default PostCreation;