import React, { useState, useEffect, Fragment } from 'react'
import Form from './components/Form'
import axios from 'axios'

function App() {
  // Utilizar useSsate con 3 states diferentes
  const [artist, setArtist] = useState('')
  const [lyric, setLyric] = useState([])
  const [info, setInfo] = useState({})

  // Método para consultar la API de letras de canciones
  const consultAPILetter = async search => {
    console.log(search)
    const { artist, song } = search
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`

    // Consultar la API
    const result = await axios(url)

    // Almacenar la letra en el state
    setLyric(result.data.lyrics)
  }

  return (
    <Fragment>
      <Form consultAPILetter={consultAPILetter} />
    </Fragment>
  )
}

export default App
