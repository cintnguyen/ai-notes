import React, { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import NotesDisplay from "./components/NotesDisplay"
import TextArea from "./components/TextArea"

export default function App() {
  const [aiResponse, setAiResponse] = useState(null);

  const handleAiResponse = (response) => {
    setAiResponse(response);
  }

  return (
    //TODO Chatbox, Chat hx
    <div>
      <Header />
      <UserInput onAiResponse={handleAiResponse} />
      <NotesDisplay/>
      <TextArea display={aiResponse}/>
    </div>
  )
}