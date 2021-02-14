import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from "socket.io-client";

import InfoBar from '../InfoBar/InfoBar';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';

import './Chat.css';

const ENDPOINT = 'localhost:3000';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState('');

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error) => {
      if(error) alert(error);
    });
  },[location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages([...messages,message]);
    });

    socket.on('roomData', ({users}) => {
      setUsers(users);
    });
  });

  const sendMessage = (event) => {
    event.prevenDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return(
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room}/>
        <Messages messages={messages} name={name}></Messages>
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
      </div>
    </div>
  );
}

export default Chat;