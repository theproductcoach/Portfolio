import { Html, useProgress } from '@react-three/drei';
import React from 'react'

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 20,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTomp: 40
        }}
      >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader