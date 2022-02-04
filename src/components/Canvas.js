import React, { useEffect, useState, useRef } from 'react';
import { Stage, Layer, Line } from "react-konva";


function Canvas(props) {




    // const canvasRef = useRef(null);
    // const contexRef = useRef(null);
    // const [isPaint, setIsPaint] = useState(false);
    
    
    // useEffect(() => {
    //     const canvas = canvasRef.current
    //     // canvas.width = window.innerWidth;
    //     // canvas.height = window.innerHeight;
    //     // canvas.style.width = `${window.innerWidth}px`;
    //     // canvas.style.height = `${window.innerHeight}px`;
    //     canvas.fillRect(10, 10, 150, 100);

    //     const context = canvas.getContext("2d");
    //     context.scale(2,2);
    //     context.lineCap = "round";
    //     context.strokeStyle = "black";
    //     context.lineWidth = 5;
    //     contexRef.current = context;
    
    // }, [])

    // const startPaint = ({nativeEvent}) => {
    //     const {offsetX, offsetY} = nativeEvent;

    //     contexRef.current.beginPath();
    //     contexRef.current.moveTo(offsetX, offsetY);
    //     setIsPaint(true);
    // }
  
    // const endPaint = () => {
    //     contexRef.current.closePath();
    //     setIsPaint(false);
    // }

  
    // const paint = ({nativeEvent}) => {

    //     if (isPaint){
    //         const {offsetX, offsetY} = nativeEvent;

    //         contexRef.current.lineTo(offsetX, offsetY);
    //         contexRef.current.stroke();
    //     }
        
    // }
    
    // const [currentLine, setCurrentLine] = useState(null);
    // const [lines, setLines] = useState([]);
  
    // const onMouseDown = () => {
    //   const { x, y } = getScaledPoint(stage, 1);
    //   setCurrentLine({ points: [x, y] });
    // };
  
    // const onMouseMove = () => {
    //   if (currentLine) {
    //     const { x, y } = getScaledPoint(stage, 1);
    //     setCurrentLine({
    //       ...currentLine,
    //       points: [...currentLine.points, x, y]
    //     });
    //   }
    // };
    // const onMouseUp = () => {
    //   const { x, y } = getScaledPoint(stage, 1);
    //   setCurrentLine(null);
    //   setLines([
    //     ...lines,
    //     { ...currentLine, points: [...currentLine.points, x, y] }
    //   ]);
    // };


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

        <select 
            className="canva__menu"
            value={tool}
            onChange={(e) => {
            setTool(e.target.value);
            }}
        >
            <option value="indicator">Indicator</option>
        </select>

        </>

    )

}

export default Canvas;