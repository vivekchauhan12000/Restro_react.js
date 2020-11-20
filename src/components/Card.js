import React from 'react'

export default function Card() {
  return (
    <div>
      <div className="card" style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s', width: '360px', height: '160px', display: 'flex', flexDirection: 'row', margin: '20px'}}>
        <img src="https://cdn.zeplin.io/5ea9214f6ba7e327178817d0/assets/661FC106-80E1-4186-9349-105A53FB8F0D.png" style={{height: '100%', width: '40%'}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card </p>
        </div>
      </div>
    </div>
  )
}
