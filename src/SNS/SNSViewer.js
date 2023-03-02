import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs  } from "firebase/firestore";
import firebaseConfig from '../firebase.js';

import {SNSViwer, SNSViewerOne,FlexOnlyDiv, SNSViewerOneUserContent, NickName, Account, ContentText, UserPic,  } from "./SNSViewerZip.js"; 
import './SNSViewer.css'
import SNSGNB from "./GNB/SNSGNB.js"

function SNSViewer(){
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const [SearchAccount,setSearchAccount] = useState([]);
const [SearchAccountHit,setSearchAccountHit] = useState(false);
const navigate = useNavigate();

const [startData2, setStartData2] = useState([])

async function startData(){
  const querySnapshot = await getDocs(collection(db, "vrboard"));
  setStartData2(querySnapshot._snapshot.docChanges);
  querySnapshot.forEach((doc) => {
    SearchAccount.push(doc.data())
  });
  setSearchAccountHit(true)
                {/* 푸쉬로 넣어둔거라 나중에 셋으로 바꿀 때 써야할수도있음 {startData2[0].doc.data.value.mapValue.fields.content.stringValue} */}
}


function goNav(gourl){
  navigate(`/${gourl}`)
}


function viwePrint(){
  return(
  <SNSViwer>
    <SNSGNB></SNSGNB>
    <div>
      {SearchAccount.map((row,key)=>{
      return(
          <SNSViewerOne key={key}> 
            <FlexOnlyDiv>
              <UserPic url={`https://jonghyunportfolio.s3.ap-northeast-2.amazonaws.com/${row.userpic}`}>
              </UserPic>
            </FlexOnlyDiv>
            <SNSViewerOneUserContent>
              <FlexOnlyDiv>
                <NickName>{row.name}</NickName>
                <Account>{row.id}</Account> 
              </FlexOnlyDiv>
              <ContentText onClick={()=>goNav(`SNSViewer`)}>{row.content}</ContentText>
              <div className="SNSViewerOneUserContentImg"><img src={`https://jonghyunportfolio.s3.ap-northeast-2.amazonaws.com/${row.img}`}></img></div>
            </SNSViewerOneUserContent>
          </SNSViewerOne>
      )
      })}
    </div >
    <SNSGNB></SNSGNB>
  </SNSViwer>
  )
}
    useEffect(()=>{
      startData()
    },[])
    return(<div className="SNSViewer">
            {SearchAccountHit? viwePrint():''} 

        {/* <div className="SNSViewerOne">
          <div className="SNSViewerOneUserImg">
            <img src="https://jonghyunportfolio.s3.ap-northeast-2.amazonaws.com/%EC%A7%B1.jpg"></img>
          </div>
          <div className="SNSViewerOneUserContent">
            <div><span>NickName</span><span>인증마크</span><span>email</span><span>time</span></div>
            <div className="SNSViewerOneUserContentText">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</div>
            <div className="SNSViewerOneUserContentImg"><img src="https://jonghyunportfolio.s3.ap-northeast-2.amazonaws.com/%EC%A7%B1.jpg"></img></div>
          </div>
        </div> */}
    </div>)
}export default SNSViewer