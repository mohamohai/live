import { useEffectm, useState, useRef } from "react";
import styledComponents from "styled-components";
import InputGroup from "react-bootstrap/InputGroup";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import firebaseConfig from "../../firebase.js";

import {
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineHome,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function SNSGNBComponent(props) {
  const GNBUrl = props.GNBUrl;
  const IconName = props.IconName;
  const GNBText = props.GNBText;

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const [WriteUser, setWriteUser] = useState("임시 아이디");
  const [WriteUserPic, setWriteUserPic] = useState("ab.jpg");
  const [WriteContent, setWriteContent] = useState("");
  const [WritePicArr, setWritePicArr] = useState(["cd.jpg", "bc.jpg"]);
  const [hashTagText, sethashTagText] = useState("");

  const [hasharr, sethasharr] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    sethasharr([]);
  };
  const handleShow = () => setShow(true);

  async function submitDoc() {
    const data = new Date();
    const docRef = await addDoc(collection(db, "vrboard"), {
      id: WriteUser,
      userpic: WriteUserPic,
      content: WriteContent,
      time: data,
      img: WritePicArr,
    });
    console.log("Document written with ID: ", docRef.id);
  }

  function CheckEnter(e) {
    if (e.key === "Enter") {
      hasharr.push(hashTagText);
      sethashTagText("");
      document.getElementsByClassName("hashbox").value='';
    }
  }

  function hasharrDel(DelData) {
    console.log(DelData);
    hasharr.forEach((row, key) => {
      if (row === DelData) {
        hasharr.splice(key, key + 1);
      }
    });
  }

  return (
    <GNBRow>
      {IconName === "AiOutlineHome" ? (
        <Link to={`/SNSViewer`}>
          <AiOutlineHome className="GNBIcon" size="1.5rem" fill="black" />{" "}
        </Link>
      ) : IconName === "AiOutlineSearch" ? (
        <Link to={`./${GNBUrl}`}>
          <AiOutlineSearch className="GNBIcon" size="1.5rem" fill="black" />{" "}
        </Link>
      ) : IconName === "AiOutlinePlus" ? (
        <AiOutlinePlus
          onClick={handleShow}
          className="GNBIcon"
          size="1.5rem"
          fill="black"
        />
      ) : IconName === "AiOutlineBell" ? (
        <Link to={`./${GNBUrl}`}>
          {" "}
          <AiOutlineBell className="GNBIcon" size="1.5rem" fill="black" />
        </Link>
      ) : (
        "컴포넌트 함수로 호출 찾아보고"
      )}
      <GNBRowSpan>{GNBText}</GNBRowSpan>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>글쓰기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>내용{WriteContent}</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                autoFocus
                onChange={(e) => setWriteContent(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>해시태그 추후예정...?</Form.Label>
              <Form.Control
                type="email"
                placeholder="일단 공간이 남아서 넣어봤는데 해쉬태그 같은걸로 하면 좋을 거 같아요"
                value={hashTagText}
                onChange={(e) => sethashTagText(e.target.value)}
                onKeyPress={(e) => CheckEnter(e)}
                className="hashbox"
              />
              {hasharr.map((row, ket) => {
                return (
                  <Hashbox>
                    {row}
                    <span onClick={() => hasharrDel(row)}> x </span>
                    </Hashbox>
                );
              })}
            </Form.Group>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">
                &nbsp;&nbsp; Small &nbsp;&nbsp;
              </InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
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
          <Button
            variant="primary"
            onClick={() => {
              submitDoc();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </GNBRow>
  );
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

`;

const GNBRowSpan = styledComponents.span`
    font-size: 1rem;
    padding-left: 10px;
`;

const Hashbox = styledComponents.div`
  float:left;
  padding: 10px;
  border-radius: 10px;
  background-color:rgb(247,90,105,0.8);
  margin:5px 5px 5px 0;
`
export default SNSGNBComponent;
