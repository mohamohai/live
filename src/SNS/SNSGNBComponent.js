import { useEffect } from "react";
import styledComponents from 'styled-components';

import {HiUser, HiUserAdd, } from 'react-icons/hi'
import {AiOutlinePlus,AiOutlineSearch, AiOutlineBell, AiOutlineHome} from 'react-icons/ai';
import { Link } from "react-router-dom";

function SNSGNBComponent(props){

    const GNBUrl = props.GNBUrl;
    const IconName = props.IconName;
    const GNBText = props.GNBText;
   
    return(
        <div className="asd">
            <Link to={`./${GNBUrl}`}>
            {IconName==="AiOutlineHome"? <AiOutlineHome className="GNBIcon" size='1.5rem'  fill="black"/>: 
                IconName==="AiOutlineSearch" ? <AiOutlineSearch className="GNBIcon" size='1.5rem'  fill="black"/> : 
                    IconName==="AiOutlinePlus" ? <AiOutlinePlus className="GNBIcon" size='1.5rem'  fill="black"/> :
                        IconName==="AiOutlineBell" ? <AiOutlineSearch className="GNBIcon" size='1.5rem'  fill="black"/> : "컴포넌트 함수로 호출 찾아보고"}
             <span>{GNBText}</span>
             </Link>
        </div>
    )
}
const GNBRow = styledComponents.div`

`
export default SNSGNBComponent;