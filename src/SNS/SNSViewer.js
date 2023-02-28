import { useState, useEffect } from "react"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import firebaseConfig from '../firebase.js';
import { NickName,Account,ContentText } from "./SNSViweerZip.js"; 

import './SNSViewer.css'
function SNSViewer(){
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const [SearchAccount,setSearchAccount] = useState([])
const [SearchAccountHit,setSearchAccountHit] = useState(false)

async function startData(){
  const querySnapshot = await getDocs(collection(db, "vraccount"));
  querySnapshot.forEach((doc) => {
  SearchAccount.push(doc.data())
  setSearchAccountHit(true)
  });
  console.log(SearchAccount)
}


function searchlog(){
  console.log(SearchAccount)
}
    useEffect(()=>{
      startData()
    },[])
    return(<div className="SNSViewer">
            {SearchAccountHit? <div>{SearchAccount.map((row,key)=>{
              return(
                <div className="SNSViewerOne">
                  <div className="SNSViewerOneUserImg">
                    <img src="https://jonghyunportfolio.s3.ap-northeast-2.amazonaws.com/%EC%A7%B1.jpg"></img>
                  </div>
                  <div className="SNSViewerOneUserContent">
                    <div><NickName>{row.name}</NickName>  <Account>{row.id}@naver.com</Account><span>time</span></div>
                    <ContentText>xcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</ContentText>
                    <div className="SNSViewerOneUserContentImg"><img src="https://jonghyunportfolio.s3.ap-northeast-2.amazonaws.com/%EC%A7%B1.jpg"></img></div>
                  </div>
          </div>

            )
          })}</div> :<p>여기 스켈레톤 ui 넣을 예정</p>} 

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