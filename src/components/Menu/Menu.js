import React, { useContext } from 'react'
import { CanvasContext } from '../../contexts/CanvasContext'
import blackMarkerImg from '../../img/blackMarker.png'
import blueMarkerImg from '../../img/blueMarker.png'
import greenMarkerImg from '../../img/greenMarker.png'
import redMarkerImg from '../../img/redMarker.png'
import purpleMarkerImg from '../../img/purpleMarker.png'
import eraseImg from '../../img/erase.png'
import clearImg from '../../img/delete.png'
import exportImg from '../../img/download.png'


export default function Menu() {

  const { stylus, setStylus, styli, setClear } = useContext(CanvasContext)

  const exportCanvas = () => {
    var download = document.getElementById('download')
    var image = document.getElementById('canvas').toDataURL('image/png')
      .replace('image/png', 'image/octet-stream')
    download.setAttribute('href', image)
  }

  return (
    <div className='Menu'>
      <button onClick={() => setStylus(styli[0])} className={stylus === styli[0] ? 'active' : ''}><img src={blackMarkerImg} alt='Black'></img></button>
      <button onClick={() => setStylus(styli[1])} className={stylus === styli[1] ? 'active' : ''}><img src={blueMarkerImg} alt='Blue'></img></button>
      <button onClick={() => setStylus(styli[2])} className={stylus === styli[2] ? 'active' : ''}><img src={greenMarkerImg} alt='Green'></img></button>
      <button onClick={() => setStylus(styli[3])} className={stylus === styli[3] ? 'active' : ''}><img src={redMarkerImg} alt='Red'></img></button>
      <button onClick={() => setStylus(styli[4])} className={stylus === styli[4] ? 'active' : ''}><img src={purpleMarkerImg} alt='Purple'></img></button>
      <button onClick={() => setStylus(styli[5])} title='Eraser' className={stylus === styli[5] ? 'active' : ''}><img src={eraseImg} alt='Eraser'></img></button>
      <button onClick={() => setClear(true)} title='Clear'><img src={clearImg} alt='clear'/></button>
      <a id='download' download='canvas.png' href={document.getElementById('canvas')  ? document.getElementById('canvas').toDataURL('image/png')
        .replace('image/png', 'image/octet-stream') : null}>
        <button onClick={exportCanvas} title='Download'><img src={exportImg} alt='Export' /></button>
      </a>
    </div>
  )
}