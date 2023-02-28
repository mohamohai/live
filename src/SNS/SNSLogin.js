import { useState, useEffect, useRef, Component } from "react";
import styled from "styled-components";
import './SNSLogin.css'


function SNSLogin(){
    const [loginid,setloginid]=useState('')
    const [loginpassword,setloginpassword]=useState('')
    
   
    return(
                <SNSLoginFull>
                    <SNSLoginForm>
                        <div>
                            <img className="LoginLogo" src="./logo_seoulbroz_nobox.png"></img>
                            Broz Asia
                        </div>  
                        <LoginBox
                            type="text"
                            onChange={(e)=>{setloginid(e.target.value)}}
                        ></LoginBox>
                        <LoginBox
                            type="text"
                            onChange={(e)=>{setloginpassword(e.target.value)}}
                        ></LoginBox>
                    </SNSLoginForm>
                </SNSLoginFull>
    )

    
}


const SNSLoginFull = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(to bottom, plum, lightcoral);
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;
const SNSLoginForm = styled.div`
width: 30%;
height: 90%;
background-color: white;
display: flex;
flex-direction: column;
justify-content:space-around;
align-items: center;
`;


const LoginBox = styled.input`
box-sizing: border-box;
padding: 10px;
border-radius: 5px;
`;

export default SNSLogin