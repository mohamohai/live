import { useState, useEffect } from "react";

function SNSWriteModal(){
    const [WriteUser,       setWriteUser   ]=useState('');
    const [WriteUserPic ,   setWriteUserPic]=useState('');
    const [WriteTitle,      setWriteTitle  ]=useState('');
    const [WriteContent,    setWriteContent]=useState('');
    const [WriteTime,       setWriteTime   ]=useState('');
    const [WritePicArr,     setWritePicArr ]=useState([]);
    


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            
        </div>
    )

}export default SNSWriteModal