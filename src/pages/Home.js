import React from 'react'
import '../App.css';
import Card from "../components/Card"

export default function Home() {
  return (
    <div>
    <div className="background_image">
      <div className="row justify-content-center">
        <div className="Ellipse-1"><h1>e!</h1></div>
      </div>
      <div className="row">
        <div className="col9"><h2>Find the best Restaurants,cafe and bar</h2></div>
      </div>
      <div className="input-group mb-3" style={{width: '70%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px'}}>
        <div className="input-group-prepend" style={{marginRight: '10px'}}>
          <button className="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Location</button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Pune</a>
            <a className="dropdown-item" href="#">Jaipur</a>
            <a className="dropdown-item" href="#">Lucknow</a>
            <div role="separator" className="dropdown-divider" />
            <a className="dropdown-item" href="#">Get my Location</a>
          </div>
        </div>
        <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="🔍Search for restaurant" />
      </div>
    </div>
    <div className="container">
      <h3 style={{margin: '10px', color: 'rgb(63, 63, 160)', fontWeight: 700}}>Quick Search</h3>
      <h5 style={{color: 'rgb(63, 63, 160)', fontWeight: 200}}>Discover Restaurants by there meal</h5>
      <div className="row cardArrangment">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
       
      </div>
    </div></div>
  )
}
