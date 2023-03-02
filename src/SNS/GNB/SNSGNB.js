import { useEffect } from "react";
import styledComponents from 'styled-components';
import { FaBeer } from 'react-icons/fa';
import {HiUser, HiUserAdd, } from 'react-icons/hi'
import {AiOutlinePlus,AiOutlineSearch, AiOutlineBell, AiOutlineHome} from 'react-icons/ai';
import SNSGNBComponent from './SNSGNBComponent.js';
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
    width:15vw;
    height:100vh;
    min-width:250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top:30px;
    position: sticky;   
    top: 0px;
    border-right:1px solid rgb(0,0,0);
    @media screen and (max-width: 1000px) {
        display:none;
    }
    
`;

export default SNSGNB;