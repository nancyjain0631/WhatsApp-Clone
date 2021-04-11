import React , { useState , useEffect } from 'react';
import './Sidebar.css';
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from  "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import db from "./firebase";

function Sidebar() {
   const [chats, setChats] =useState([]);
   useEffect(() => {
    //    any changes in the list of items in the collection "chats", run this code
    db.collection('chats').onSnapshot(snapshot => {
        // docs- list of elements(no. of chats) in the database
        setChats(snapshot.docs.map(doc => 
            ({
                id:doc.id,
                data:doc.data(),
            })
        ))
    })
   }, [])
    return (
        <div className="sidebar">
           <div className="sidebar_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/aada.svg`} />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                   
                </div>

           </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
                
            </div>
            <div className="sidebar_chats">
                <SidebarChat addNewChat/>
                {chats.map(chat => (
                    <SidebarChat key={chat.id} id={chat.id} name={chat.data.name} />
                ))}
                              

            </div>

        </div>
    );
}

export default Sidebar
