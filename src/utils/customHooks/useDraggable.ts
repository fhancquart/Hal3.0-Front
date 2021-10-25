import { useRef, useState } from 'react';

const useDraggable = () => {
    
    const [position, setPosition] = useState({x: 25, y: 25, coords: {x:0, y:0}})

    const handleMouseMove = useRef((e:any) => {
        setPosition(position => {
            const xDiff = position.coords.x - e.pageX
            const yDiff = position.coords.y - e.pageY
            return {
                x: position.x - xDiff,
                y: position.y - yDiff,
                coords: {
                    x: e.pageX,
                    y: e.pageY,
                },
            }
        })
    })

    const handleMouseDown = (e:any) => {
        const pageX = e.pageX
        const pageY = e.pageY
        setPosition(position =>
            Object.assign({}, position, {
            coords: {
                x: pageX,
                y: pageY,
            },
            }),
        )
        document.addEventListener('mousemove', handleMouseMove.current)
    }
    
    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove.current)
        setPosition(position => Object.assign({}, position, {coords: {}}))
    }
    
    return {handleMouseDown, handleMouseUp, position}
}


export default useDraggable;