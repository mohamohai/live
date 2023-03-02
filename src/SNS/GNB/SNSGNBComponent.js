import { useEffectm, useState } from "react";
import styledComponents from 'styled-components';

import {AiOutlinePlus,AiOutlineSearch, AiOutlineBell, AiOutlineHome} from 'react-icons/ai';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function SNSGNBComponent(props){
    const GNBUrl = props.GNBUrl;
    const IconName = props.IconName;
    const GNBText = props.GNBText;
   


    const [WriteUser,       setWriteUser   ]=useState('');
    const [WriteUserPic ,   setWriteUserPic]=useState('');
    const [WriteTitle,      setWriteTitle  ]=useState('');
    const [WriteContent,    setWriteContent]=useState('');
    const [WriteTime,       setWriteTime   ]=useState('');
    const [WritePicArr,     setWritePicArr ]=useState([]);
    


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return(
        <GNBRow>
            {IconName==="AiOutlineHome"? <Link to={`./${GNBUrl}`}><AiOutlineHome className="GNBIcon" size='1.5rem'  fill="black"/> </Link>: 
                IconName==="AiOutlineSearch" ?  <Link to={`./${GNBUrl}`}><AiOutlineSearch className="GNBIcon" size='1.5rem'  fill="black"/> </Link> : 
                    IconName==="AiOutlinePlus" ? <AiOutlinePlus onClick={handleShow} className="GNBIcon" size='1.5rem'  fill="black"/>  :
                        IconName==="AiOutlineBell" ? <Link to={`./${GNBUrl}`}> <AiOutlineSearch className="GNBIcon" size='1.5rem'  fill="black"/></Link> : "컴포넌트 함수로 호출 찾아보고"} 
            
            
            
             <GNBRowSpan>{GNBText}</GNBRowSpan>
            
            














             <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Id</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={(e)=>setWriteUser(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={10} />
            </Form.Group>

            <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>이미지 파일 업로드 (1개)</Form.Label>
                <Form.Control type="file" size="sm" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>




        </GNBRow>
    )
}
const GNBRow = styledComponents.div`
    width: 100%;
    margin: 15px;
    padding-left: 20px;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-weight: 300;
    text-decoration: none;

`

const GNBRowSpan = styledComponents.span`
    font-size: 1rem;
    padding-left: 10px;
`;
export default SNSGNBComponent;