import "./navbar.css"
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '0',
        marginRight: '-30%',
        transform: 'translate(-50%, -50%)',
        
        
    },
  };


function Navbar() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return(
        <div className="Nav-Container">
        <p className="nav-text">진행 중인</p>
        <p className="nav-text">완성된</p>
        <p className="nav-text">프로젝트</p>

        <p className="nav-text" onClick={openModal}> - </p>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
        
        <div>나의 프로필</div>
        <form>
          
          <button>프로필 설정</button>
          <br></br>
          <button>닉네임 설정</button>
       
        </form>
      </Modal>
        </div>
    );


}

export default Navbar;