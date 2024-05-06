import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import NotesDisplay from "./components/NotesDisplay"
import AiTextArea from "./components/AiTextArea"
import CardTitle from "./components/CardTitle"

export default function App() {
  const [aiResponse, setAiResponse] = useState(null);
  const [conversations, setConversations] = useState([])

  if (aiResponse) {console.log("aiResponse", aiResponse.message, typeof(aiResponse.message))}

  const handleAiResponse = (response) => {
    setAiResponse(response);
  }

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8420/conversations`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setConversations(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Cleanup function to cancel any pending requests or timers
    return () => {
      // You can perform cleanup tasks here if needed
    };
  }, []); // Empty dependency array means this effect only runs once after the initial render


  

  return (
    //TODO Chatbox, Chat hx
    <div>
      <Header />
      <UserInput onAiResponse={handleAiResponse} />

    
      <NotesDisplay display={conversations}/>
      
      
      {conversations.map(conversation => 
        <CardTitle display={conversation}/>
      )}
      
      <AiTextArea display={aiResponse}/>
    </div>
  )
}