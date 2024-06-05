import "./Postlist.css"

function Postlist(){
  return(
    <div>
        <div className="Postlist-Title">
            <div className="Postlist-Text">
                게시판
            </div>
            <div className="Title-Text">
                모바일 프로그래밍
            </div>
        </div>

        <input type="text" class="Search-input" placeholder="검색" />

        <div className="Postlist-Box">
            
            <div className="Postlist-Preview">
                <div className="Postlist-Previewtitle">5/28 발표 자료</div>
                <div className="Postlist-Previewinfo">
                    <div className="Postlist-Previewpublisher">박한비</div>
                    <div className="Postlist-Previewtime">오늘 13:05</div>
                </div>
            </div>

            <div className="Postlist-Preview">
                <div className="Postlist-Previewtitle">WBS</div>
                <div className="Postlist-Previewinfo">
                    <div className="Postlist-Previewpublisher">이어진</div>
                    <div className="Postlist-Previewtime">오늘 10:43</div>
                </div>
            </div>

            <div className="Postlist-Preview">
                <div className="Postlist-Previewtitle">개발 진행 상황</div>
                <div className="Postlist-Previewinfo">
                    <div className="Postlist-Previewpublisher">김섭진</div>
                    <div className="Postlist-Previewtime">어제 10:43</div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Postlist;