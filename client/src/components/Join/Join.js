import React, { useState } from 'react';

import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return(
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1>Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)}></input>
        </div>
        <div>
        <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)}></input>
        </div>
        <link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/Chat?name=${name}&room=${room}`}>
          <button className="button mt-20" type="submit">Sign In</button>
        </link>
      </div>
    </div>
  );
}

export default Join;