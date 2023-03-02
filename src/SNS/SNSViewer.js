import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import firebaseConfig from "../firebase.js";
import {
  SNSViwer,
  SNSFlexRowTable,
  SNSViewerOne,
  FlexOnlyDiv,
  SNSViewerOneUserContent,
  NickName,
  Account,
  ContentText,
  UserPic,
} from "./SNSViewerZip.js";
import "./SNSViewer.css";
import SNSGNB from "./GNB/SNSGNB.js";
import SNSFriend from "./GNB/SNSFriend.js";

function SNSViewer() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [SearchAccount, setSearchAccount] = useState([]);
  const [SearchAccountHit, setSearchAccountHit] = useState(false);
  const [SearchBoradData, setSearchBoradData] = useState([]);
  const [SearchBoradDataHit, setSearchBoradDataHit] = useState(false);

  const navigate = useNavigate();

  async function SearchBoard() {
    //전체호출 이건 웨어 후하게 그냥 전체 글 불러오기
    const q = query(collection(db, "vrboard"), orderBy("time", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      SearchBoradData.push(doc.data());
    });
    setSearchBoradDataHit(true);
  }

  function goNav(gourl) {
    navigate(`/${gourl}`);
  }

  function viwePrintvr() {
    return (
      <SNSViwer>
        <SNSGNB></SNSGNB>
        <SNSFlexRowTable>
          <FlexOnlyDiv>
            {SearchBoradData.map((row, key) => {
              return (
                <SNSViewerOne key={key}>
                  <FlexOnlyDiv>
                    <UserPic
                      url={`https://jonghyunportfolio.s3.ap-northeast-2.amazonaws.com/${row.userpic}`}
                    ></UserPic>
                  </FlexOnlyDiv>
                  <SNSViewerOneUserContent>
                    <FlexOnlyDiv>
                      <NickName>{row.name}</NickName>
                      <Account>{row.id}</Account>
                    </FlexOnlyDiv>
                    <ContentText onClick={() => goNav(`SNSViewer`)}>
                      {row.content}
                    </ContentText>
                    <div className="SNSViewerOneUserContentImg">
                      <img
                        src={`https://jonghyunportfolio.s3.ap-northeast-2.amazonaws.com/${row.img[0]}`}
                      ></img>
                    </div>
                  </SNSViewerOneUserContent>
                </SNSViewerOne>
              );
            })}
          </FlexOnlyDiv>
          <SNSFriend></SNSFriend>
        </SNSFlexRowTable>
      </SNSViwer>
    );
  }
  useEffect(() => {
    SearchBoard();
  }, []);
  return (
    <div className="SNSViewer">{SearchBoradDataHit ? viwePrintvr() : ""}</div>
  );
}
export default SNSViewer;
