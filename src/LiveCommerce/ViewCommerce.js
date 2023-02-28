import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import firebaseConfig from '../firebase.js';
import { getDatabase, ref, onValue,set, add, push} from "firebase/database";

function ViewCommerce(){
    const [UserName,setUserName] = useState("guest")
    const [Message,setMessage]=useState("ahwjs1022")
    const [Email,setEmail]=useState("")
    const {id} = useParams();
    function writeUserData(userId, name, email, imageUrl) {  // realtime에 데이터 넣는 양식 
        const timeCheck = new Date();
        console.log(timeCheck)
        const db = getDatabase();
        push(ref(db, 'chatting1/' + "guest"), { 
            username: UserName,                      
            email   : Email,                                         
            message : Message,
            timedata :String(timeCheck),
      
        });
    }

    useEffect(()=>{
        const db = getDatabase();
        const starCountRef = ref(db, 'chatting1/' + "guest" );
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        }); 
    },[])

    return(<div>
        firebase 테스트   {id}      <br></br>
        <input type="text" onChange={(e)=>{setMessage(e.target.value)}}></input> <br></br>
        <button onClick={()=>writeUserData()}>input data</button><br></br>
    </div>)
}export default ViewCommerce