import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import {getMessagesAPI} from '@/Services/Operations/MessageAPI'


const useChat = (tripId, userId, setMessages) => {
    const fetchMessages = async () =>{
        const res = await getMessagesAPI(tripId)
        setMessages(res)
    }
    
    useEffect(() => {
        console.log("making connections...");
        const socket = io("http://localhost:5050", {
            query:{
                userId,
                tripId,
            }
        })
        console.log("making connections successfully");
        
        fetchMessages()
        socket.on('message', (msg) => {
            console.log("New Message received");
            console.log(msg);
            
            
            if (msg.tripId === tripId) {
                console.log('setting message');
                
                setMessages((prev)=>([ msg, ...prev]))
                
            }
        })

        // return () => socket.off('message')
        return () => {
            console.log("disconnecting...");
            
            socket.disconnect();
            console.log("disconnected");
        }
    }, [tripId, userId])

}

export default useChat