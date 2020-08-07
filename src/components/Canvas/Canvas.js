import React, { useRef, useEffect, useState } from 'react';

export default function Canvas({color, size, clear, setClear}) {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`
    const context = canvas.getContext('2d')
    context.scale(2,2)
    context.fillStyle = '#f5f5f5';
    context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    context.lineCap = 'round'
    context.lineJoin = 'round'
    contextRef.current = context
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (clear) {
      contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      setClear(false)
    }
    // eslint-disable-next-line
  }, [clear])

  const startDrawing = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const finishDrawing = () => {
   contextRef.current.closePath()
   setIsDrawing(false)
  }

  const draw = ({nativeEvent}) => {
    if(!isDrawing){
      return
    }
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.strokeStyle = color
    contextRef.current.lineWidth = size
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }

  return (
    <canvas id="canvas"
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
}