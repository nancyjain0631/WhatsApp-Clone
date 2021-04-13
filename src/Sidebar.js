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
   const [rooms, setRooms] =useState([]);
   useEffect(() => {
    //    any changes in the list of items in the collection "chats", run this code
    const unsubscribe= db.collection('rooms').onSnapshot((snapshot) => 
        // docs- list of elements(no. of chats) in the database
        setRooms(
            snapshot.docs.map((doc) => 
            ({
                id: doc.id,
                data: doc.data(),
            }))
        )
    );
    return () => {
        unsubscribe();
    }
   }, []);

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
                {rooms.map((room) => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
                              

            </div>

        </div>
    );
}

export default Sidebar
