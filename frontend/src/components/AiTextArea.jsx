import React from "react";
import {Textarea} from "@nextui-org/react";

export default function AiTextArea({display}) {
  console.log("is it displaying?", display)
  return (
  
      // <div>{display ? display.message : ""}</div>
    
    <Textarea
      isReadOnly
      label="Description"
      variant="bordered"
      labelPlacement="outside"
      placeholder="Enter your description"
      defaultValue={display}
      className="max-w-xs"
    />
  );
}
