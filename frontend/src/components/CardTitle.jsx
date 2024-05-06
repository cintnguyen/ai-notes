import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";


export default function CardTitle({display}) {
    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md">{display ? display.question : ""}</p>
                    {/* <p className="text-small text-default-500">nextui.org</p> */}
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{display ? display.answer : ""}</p>
            </CardBody>
            <Divider />
            {/* <CardFooter>
                <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                >
                    Visit source code on GitHub.
                </Link>
            </CardFooter> */}
        </Card>
    )
}