import React, { useContext } from 'react';
import Canvas from '../components/Canvas/Canvas'
import Menu from '../components/Menu/Menu'
import { CanvasContext } from '../contexts/CanvasContext'

export default function App() {

  const { stylus, clear, setClear } = useContext(CanvasContext)

  return (
    <div className='Board'>
      <Menu id='Menu' />
      <Canvas color={stylus.color} size={stylus.size} clear={clear} setClear={setClear} />
    </div>
  );
}
