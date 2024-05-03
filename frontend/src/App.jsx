import React, { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import NotesDisplay from "./components/NotesDisplay"
import AiTextArea from "./components/AiTextArea"
import CardTitle from "./components/CardTitle"

export default function App() {
  const [aiResponse, setAiResponse] = useState(null);
  if (aiResponse) {console.log("aiResponse", aiResponse.message, typeof(aiResponse.message))}

  const handleAiResponse = (response) => {
    setAiResponse(response);
  }

  return (
    //TODO Chatbox, Chat hx
    <div>
      <Header />
      <UserInput onAiResponse={handleAiResponse} />
      <NotesDisplay/>
      <CardTitle display={aiResponse}/>
      <AiTextArea display={aiResponse}/>
    </div>
  )
}