
import React from "react"
import{ useEffect, useState, Fragment } from 'react';

const colors = {
  Sea: '#a2ccb6',
  Sand: '#fceeb5',
  Peach: '#ee786e',
}

const Page2 = () => {
  const [color, setColor] = useState(colors.Sea)
  useEffect(
    () => {
      document.body.style.background = color
    },
    [color]
  )
  return (
    <Fragment>
      <select value={color} onChange={e => setColor(e.target.value)}>
        {Object.entries(colors).map(([name, value]) => (
          <option key={`color--${name}`} value={value}>
            {name}
          </option>
        ))}
      </select>
      <h1>{color}</h1>
    </Fragment>
  )
}
export default Page2;

