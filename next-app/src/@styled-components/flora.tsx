import { ReactNode } from "react";

export default function Flora ({flower = [""], className = "", children}: {flower?: string[],className?: string, children: ReactNode}) {
    return (<div className={`${className} relative overflow-clip`}>
        {flower.map(f => 
            <img className={`absolute object-contain ${f}`} src="Frame 122.png"/>
        )}
        {children}
    </div>)
}
