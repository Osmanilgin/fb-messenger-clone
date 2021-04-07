import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import './App.css';
import db from './firebase';
import Message from './Message';
import firebase from 'firebase';
import Flipmove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';



function App() {

    const [input, setInput] = useState('')
    const [messages,setMessages] = useState([])
    const [username,setUsername] = useState('')

const sendMessage = (e) =>{
   // all the logic to send message gooes here
        e.preventDefault();

        db.collection('messages').add({
          message: input,
          username: username,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

      setInput(''); 
}
  useEffect(() => {
      
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>
       {setMessages(snapshot.docs.map(doc=>({id: doc.id, message:doc.data()})))})
    
  }, [])

    useEffect(() => {
      // run code here 
      setUsername(prompt('Please enter your name'))
    }, [] ) //condition

  return ( 
    <div className="App">
       <img className="app__img" src="https://cdn.worldvectorlogo.com/logos/facebook-messenger.svg" />
       <h1 className="title" >  Messenger </h1> 
       <hr/>
       
 <form className="app__form">
     
        <input  className="app__input" 
        placeholder="Type here..." value={input} onChange={e => setInput(e.target.value)}/>
            <button  className="app__iconbutton" disabled ={!input} 
            variant="contained" color="primary" type = 'submit' onClick={sendMessage} >
          <SendIcon className="app__iconbutton"/>
          </button>
       
      </form>

      <Flipmove>
       {messages.map(({id, message})=> (
          <Message key={id} username={username} message={message}/>
       ))}
       </Flipmove>
    </div> 
    
  );
}

export default App;
