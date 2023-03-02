import styledComponents from 'styled-components';

const SNSViwer = styledComponents.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const SNSViewerOne = styledComponents.div`
    width: 40vw;
    min-width: 500px;
    padding: 20px 70px 20px 20px;
    height: auto;
    border: solid 1px rgb(0,0,0,0.2);
    border-radius: 15px;
    display: flex;
    flex: row;
    justify-content: center;
    margin: 10px 0;
`;

const FlexOnlyDiv = styledComponents.div`
`;

const NickName = styledComponents.span`
  font-size: 1.1em;
  text-align: center;
  font-weight:bold;
  cursor: pointer;
  &:hover{
    transition: all 0.3s;
    text-decoration: underline;
  }
`;

const Account = styledComponents.span`
  font-size: 0.8em;
  text-align: right;
  color:rgb(150,150,150);
  cursor: pointer;
`;

const ContentText = styledComponents.div`
  font-size: 1.0em;
  text-align: left;
  width: 100%;
  word-break: break-all;
  cursor: pointer;
`;

const UserPic = styledComponents.div`
  width: 50px;
  height: 50px;
  border-radius: 80%;
  border: 1px solid rgb(210,210,210,0.5);
  background: url(${props=>props.url}) center center / cover;
`;

const CircleText = styledComponents.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'};
  border-radius: 50%;
`;

const SNSViewerOneUserContent = styledComponents.div`
  display: flex;
  padding: 0px 10px;
  flex-direction: column;
  width: 90%;
  text-align: left;
`;
export {SNSViwer, SNSViewerOne, FlexOnlyDiv,SNSViewerOneUserContent, NickName, Account, ContentText, CircleText,UserPic };




