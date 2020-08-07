import React, { createContext, useState, useLayoutEffect } from 'react'
import styli from './styli'

export const CanvasContext = createContext()

export default function CanvasContextProvider(props) {

  const [stylus, setStylus] = useState(styli[0])
  const [clear, setClear] = useState(false)

  useLayoutEffect(() => {
    const root = document.getElementsByTagName('html')[0]
    root.style.cssText = `--stylus: ${stylus.cursor}`
  }, [ stylus ])

  return (
    <CanvasContext.Provider value={{ stylus, setStylus, styli, clear, setClear }}>
      {props.children}
    </CanvasContext.Provider>
  )

}