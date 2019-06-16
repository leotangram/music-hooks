import React, { useState, useEffect, Fragment } from 'react'
import Form from './components/Form'

function App() {
  // Utilizar useSsate con 3 states diferentes
  const [artist, setArtist] = useState('')
  const [lyric, setLyric] = useState([])
  const [info, setInfo] = useState({})

  // Método para consultar la API de letras de canciones
  const consultAPILetter = search => {
    console.log(search)
  }

  return (
    <Fragment>
      <Form consultAPILetter={consultAPILetter} />
    </Fragment>
  )
}

export default App
