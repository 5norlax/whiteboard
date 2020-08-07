import React, { useContext } from 'react';
import { CanvasContext } from '../../contexts/CanvasContext'

export default function Menu() {

  const { setStylus, styli, setClear } = useContext(CanvasContext)

  const exportCanvas = () => {
    var download = document.getElementById("download");
    var image = document.getElementById("canvas").toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
  }

  return (
    <div className='Menu'>
      {styli.map((stylus) => {
        return <button key={stylus.name} onClick={() => setStylus(stylus)}>{stylus.name}</button>
      })}
      <button onClick={() => setClear(true)}>clear</button>
      <a id="download" download="canvas.png" href={document.getElementById("canvas")}>
        <button onClick={exportCanvas}>export</button>
      </a>
    </div>
  );
}