import React from 'react'

function ErrorBlock({title,message}) {
  return (
    <div className='error-block'>
        <div className='error-block-icon'>!</div>
        <div className='error-block-text'>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default ErrorBlock