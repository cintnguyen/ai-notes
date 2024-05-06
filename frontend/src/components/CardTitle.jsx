import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";


export default function CardTitle({ display }) {
    const delCard = async () => {
        try {
          const response = await fetch(`http://localhost:8420/conversations/${display._id}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setConversations(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    return (
        // "gap-2 grid grid-cols-2 sm:grid-cols-4"
        <Card isHoverable = {true} className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                {/* <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                /> */}
                <div className="flex flex-col">
                    <p className="text-md"><b>{display ? display.question : ""}</b></p>
                    {/* <p className="text-small text-default-500">nextui.org</p> */}
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{display ? display.answer : ""}</p>
            </CardBody>
            <Divider />
            <CardFooter>
                {/* <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                >
                    Visit source code on GitHub.
                </Link> */}
                <Button color="primary" variant="ghost" onClick={delCard} >
                    Delete
                </Button>
            </CardFooter>
        </Card>
    )
}