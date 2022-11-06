import { ReactNode } from "react";

export default function Flora ({flower = [""], className = "", children}: {flower?: string[],className?: string, children: ReactNode}) {
    return (<div className={`${className} relative overflow-clip`}>
        <img className={`absolute object-contain ${flower.join(" ")}`} src="Frame 122.png"/>
        {children}
    </div>)
}
