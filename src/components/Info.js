import React from 'react'

function Info({ info }) {
  if (Object.keys(info).length === 0) return null
  
  const {
    strArtistThumb,
    strGenre,
    strBiographyES,
    strFacebook,
    strTwitter,
    strLastFMChart
  } = info

  return (
    <div className='card border-light'>
      <div className='card-header bg-primary text-light-font-weight-bold'>
        Información artista
      </div>
      <div className='card-body'>
        <img src={strArtistThumb} alt='Logo artísta' />
        <p className='card-text'>Género: {strGenre}</p>
        <h2 className='card-text text-center'>Biografía</h2>
        <p className='card-text'>{strBiographyES}</p>
        <p className='card-text'>
          <a
            href={`https://${strFacebook}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-facebook' />
          </a>
          <a
            href={`https://${strTwitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter' />
          </a>
          <a
            href={`${strLastFMChart}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-lastfm' />
          </a>
        </p>
      </div>
    </div>
  )
}

export default Info
