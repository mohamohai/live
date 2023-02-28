import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './MainView.css'
function MainView(){

    const testarr = ["test1","test2","test3"]



    const onClickData = (test) =>{
        console.log(test)
    }
    return(<div className="MainView">
        {testarr.filter((val)=>{
            if(val === "test1"){
            console.log(val)
            }
        })}
        {testarr.map((row,key)=>{
            return(
            <div className="testarrdata" key={key} onClick={()=>onClickData(row)}>
                <div>
                        <p>{row}</p>
                </div>
            </div>)
        })}
    </div>)
}export default MainView