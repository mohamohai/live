import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './MainView.css'
function MainView(){

    const testarr = ["test1","test2","test3"]



    const onClickData = (test) =>{
        console.log(test)
    }
    return(<div className="MainView">
        {testarr.map((row,key)=>{
            return(
            <div className="testarrdata" key={key} onClick={()=>onClickData(row)}>
                <div>
                        <p>{row}</p>
                        {<img src={`https://jonghyunportfolio.s3.ap-northeast-2.amazonaws.com/${row}.jpg`}></img>}
                </div>
            </div>)
        })}
    </div>)
}export default MainView