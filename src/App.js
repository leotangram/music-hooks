import React, { useState, useEffect, Fragment } from 'react'
import Form from './components/Form'
import axios from 'axios'
import Song from './components/Song'
import Info from './components/Info'

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

    // Almacenar el artista que se buscó
    setArtist(artist)

    // Almacenar la letra en el state
    setLyric(result.data.lyrics)
  }

  // Método para consultar la API de información de la banda
  const consultAPIInfo = async () => {
    if (artist) {
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`

      const result = await axios(url)

      setInfo(result.data.artists[0])
    }
  }

  useEffect(() => {
    consultAPIInfo()
  }, [artist])

  return (
    <Fragment>
      <Form consultAPILetter={consultAPILetter} />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <Info info={info} />
          </div>
          <div className='col-md-6'>
            <Song lyric={lyric} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
