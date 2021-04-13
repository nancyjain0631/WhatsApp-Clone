import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import {AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

import { useParams } from "react-router-dom";
import "./Chat.css";
import db from './firebase';


function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const { roomId } =useParams();
    const [roomName, setRoomName] = useState("");
    useEffect(() => {
        if( roomId ) {
            db.collection('rooms')
            .doc(roomId)
            .onSnapshot(snapshot => 
                // THIS WILL PULL THE DATA FROM LHS AND GET THE CHATNAME
                setRoomName(snapshot.data().name)
                
        );
        }
    }, [roomId]);
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    },[]);

    const sendMessage = (e) =>{
        // preventDefault will stop from refreshing
        e.preventDefault();
        // console.log(input);
        setInput("");
    };
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/aada.svg`}/>
                <div className="chat_headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                <p className={`chat_message ${true && "chat_reciever"}`}>
                    <span className="chat_name">Nancy Jain</span>
                    Heya
                    <span className="chat_timestamp">3:52pm</span>
                </p>
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon/>
                <AttachFile/>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat;
