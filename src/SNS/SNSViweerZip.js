import styledComponents from 'styled-components';

const NickName = styledComponents.span`
  font-size: 1.1em;
  text-align: center;
  font-weight:bold;
  cursor: pointer;
  &:hover{
    font-size: 1.15em;
    transition: all 0.3s;
    color:red;
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
  background: url(${props=>props.url}) center center / cover;
`;
const CircleText = styledComponents.div`
width: 5rem;
height: 5rem;
background: ${props => props.color || 'black'};
border-radius: 50%;
`;
export { NickName, Account, ContentText, CircleText,UserPic };




