import React, { useMemo } from "react";
import useDraggable from '../utils/customHooks/useDraggable';


interface SwiftyProps {
}

export const Swifty: React.FC<SwiftyProps> = (props) => {
    
    const {handleMouseDown, handleMouseUp, position} = useDraggable();
    const mouseDown = useMemo(() => handleMouseDown, [position]);
    const mouseUp = useMemo(() => handleMouseUp, [position]);

    return (
        <>
            <style jsx global>{`
                #swifty{
                    left: ${position.x}px;
                    top: ${position.y}px;
                }
            `}</style>

            <span id="swifty">
                <span onMouseDown={mouseDown} onMouseUp={mouseUp}>D</span>
            </span>            
        </>
    )
}

