import { useEffect } from "react";
import styledComponents from "styled-components";

import {
  SNSViwer,
  SNSViewerOne,
  FlexOnlyDiv,
  SNSViewerOneUserContent,
  NickName,
  Account,
  ContentText,
  UserPic,
} from "../SNSViewerZip.js";
function SNSFriend() {
  const testarrfriendpic = ["ab.jpg", "bc.jpg", "cd.jpg"];
  const testarrfriendname = ["홍길동", "전우치", "간달프"];
  const testarrfriendid = ["hong1234", "yap1212", "fire1515"];
  const testarrfriendcomment = [
    "이거 테스트 한 번 해보고 다시 부트스트랩",
    "얍얍",
    "마법안써요",
  ];

  return (
    <div>
      <SNSFriendViewer>
        {testarrfriendpic.map((row, key) => {
          return (
            <SNSViewerOne2 key={key}>
              <FlexOnlyDiv>
                <UserPic
                  url={`https://jonghyunportfolio.s3.ap-northeast-2.amazonaws.com/${testarrfriendpic[key]}`}
                ></UserPic>
              </FlexOnlyDiv>
              <SNSViewerOneUserContent2>
                <FlexOnlyDiv>
                  <NickName>{testarrfriendname[key]}</NickName>
                  <Account>{testarrfriendid[key]}</Account>
                </FlexOnlyDiv>
                <ContentText2>{testarrfriendcomment[key]}</ContentText2>
              </SNSViewerOneUserContent2>
            </SNSViewerOne2>
          );
        })}
      </SNSFriendViewer>
    </div>
  );
}

const SNSFriendViewer = styledComponents.div`
    height:100vh;
    min-width:300px;
    width:300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;   
    top: 20px;

    @media screen and (max-width: 1000px) {
        display:none;
    }
`;

const SNSViewerOne2 = styledComponents.div`
    min-width: 100%;
    width: 90%;
    padding: 20px 70px 20px 20px;
    height: auto;
    border-radius: 15px;
    display: flex;
    flex: row;
    justify-content: center;
    margin: 10px 0;
`;
const ContentText2 = styledComponents.div`
  font-size: 0.8em;
  text-align: left;
  width: 90%;
  word-break: break-all;
  cursor: pointer;
  color:rgb(180,180,180);
  white-space : nowrap;
  text-overflow : ellipsis;
  overflow:hidden;

`;

const SNSViewerOneUserContent2 = styledComponents.div`
  display: flex;
  padding: 0px 10px;
  flex-direction: column;
  width: 100%;
  text-align: left;

`;
export default SNSFriend;
