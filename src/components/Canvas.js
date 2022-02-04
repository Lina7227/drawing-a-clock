import React, { useEffect, useState, useRef } from 'react';
import { Stage, Layer, Line } from "react-konva";


function Canvas(props) {


    const [tool, setTool] = React.useState('pen');
    const [lines, setLines] = React.useState([]);
    const isDrawing = React.useRef(false);

    const handleMouseDown = (e) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setLines([...lines, { tool, points: [pos.x, pos.y] }]);
    };

    const handleMouseMove = (e) => {
        // no drawing - skipping
        if (!isDrawing.current) {
          return;
        }
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        let lastLine = lines[lines.length - 1];
        // add point
        lastLine.points = lastLine.points.concat([point.x, point.y]);
    
        // replace last
        lines.splice(lines.length - 1, 1, lastLine);
        setLines(lines.concat());
   
    };
    
    const handleMouseUp = () => {
        isDrawing.current = false;
    };



    return(

        <>

        <Stage
            className="canvas"
            id="canvas"
            width={props.width}
            height={props.height}
            onMouseDown={handleMouseDown}
            onMousemove={handleMouseMove}
            onMouseup={handleMouseUp}
        >

            <Layer>
                {lines.map((line, i) => (
                    <Line
                        key={i}
                        points={line.points}
                        stroke="#FFF5EE"
                        strokeWidth={7}
                        tension={0.5}
                        lineCap="round"
                        clearRect={110, 400}
                        globalCompositeOperation={
                            line.tool === 'eraser' ? 'destination-out' : 'source-over'
                        }
                    />
                ))}
                
            </Layer>
        </Stage>

        </>

    )

}

export default Canvas;