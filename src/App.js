import React, { useState, useEffect, Fragment } from 'react'
import Form from './components/Form'

function App() {
  // Utilizar useSsate con 3 states diferentes
  const [artist, setArtist] = useState('')
  const [lyric, setLyric] = useState([])
  const [info, setInfo] = useState({})

  return (
    <Fragment>
      <Form />
    </Fragment>
  )
}

export default App
