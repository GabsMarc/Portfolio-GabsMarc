import React from "react";

interface NavbarSpanProps {
    text: string
}


export function NavbarSpan({ text }: NavbarSpanProps) {

    return (
        <div className="content-center space-x-10">
            <p className="hover:text-purple-700 ease-in duration-200 cursor-pointer">{text}</p>
        </div>
    )
}