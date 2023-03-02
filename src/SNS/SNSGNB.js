import { useEffect } from "react";
import styledComponents from 'styled-components';
import { FaBeer } from 'react-icons/fa';
import {HiUser, HiUserAdd, } from 'react-icons/hi'
import {AiOutlinePlus,AiOutlineSearch, AiOutlineBell, AiOutlineHome} from 'react-icons/ai';
import SNSGNBComponent from './SNSGNBComponent';
function SNSGNB(){
    return(

        <SNSGNBMenu>
            <img style={{cursor:'pointer'}} src="./image/vrozlogo.png" onClick={()=>navigator('/')}></img>

            <SNSGNBComponent IconName={`AiOutlineHome`}   GNBUrl={`/`} GNBText={"홈"}></SNSGNBComponent>
            <SNSGNBComponent IconName={`AiOutlineSearch`} GNBUrl={`search`} GNBText={"검색"}></SNSGNBComponent>



            {/* 주로 글을 보는 영역은 페이지를 이동하지만 그 외의 부수적인 작업에 해당되는 것은 
            url보다 modal창으로 많이 함 */}
            <SNSGNBComponent IconName={`AiOutlinePlus`}   GNBUrl={`write`} GNBText={"글 쓰기"}></SNSGNBComponent> 
            <SNSGNBComponent IconName={`AiOutlineBell`}   GNBUrl={`alarm`} GNBText={"알람"}></SNSGNBComponent>




            {/* <AiOutlineHome/>

            <HiUser/>
            <AiOutlinePlus/>
            <AiOutlineSearch/>
            <AiOutlineBell/> */}
        </SNSGNBMenu>
    )
}
const SNSGNBMenu = styledComponents.div`
    width: 20%;
    height:100vh;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top:0px;
    left:0px;
    padding-top:30px;
    border-right: solid 0.5px rgb(0,0,0,0.3)
`;

export default SNSGNB;