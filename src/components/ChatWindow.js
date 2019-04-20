import React, { useState, useEffect } from 'react';
import { TextArea, Window, WindowContent, Button } from 'react95';
import styled from 'styled-components'
import MessageField from './MessageField';
import WindowBar from './WindowBar';
import { db } from './firebase';


const StyledForm = styled.form`
    padding: 0;
    margin: 0;
    outline: none;
    border: none;
    color: black;
    height: 100%;
    box-sizing: border-box;
`;

const StyledWindow = styled(Window)`
    width: 80%;
    height: 600;
    margin: 0; 
    display: grid;
    grid-template-rows: 40px 30px auto;
`;


const ChatWindow = ({ admin, handleLogOut }) => {

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        return db.collection('messages')
            .orderBy('createdAt')
            .onSnapshot(snapshot => {
                const docs = [];
                snapshot.forEach(doc => {
                    docs.push({
                        ...doc.data(),
                        id: doc.id
                    })
                });
                setMessages(docs);
            });
    }, [])

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        db
          .collection('messages')
          .add({
              text: message,
              createdAt: new Date(),
              username: admin.displayName,
              userId: admin.uid,
              color: admin.color
            });
        
        setMessage('');
    }

    


    return (
        <>
            <StyledWindow>
                <WindowBar header="Ayo" handleLogOut={handleLogOut}/>
                <WindowContent style={{
                        display: 'grid',
                        gridGap: '20px',
                        gridTemplateRows: '2fr 1fr',
                        height: '500px'
                    }}>
                    <MessageField messages={messages} />
                    <StyledForm>
                        <TextArea 
                            value={message}
                            placeholder="Type in here.."
                            onChange={handleChange}
                            height='60%'
                        />
                        <Button fullWidth onClick={handleSubmit} style={{
                            margin: '20px 0 0 0'
                        }} >
                            Send
                        </Button>
                    </StyledForm>
                </WindowContent>
            </StyledWindow>
        </>
    );
}

export default ChatWindow;