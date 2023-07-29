import { useState } from 'react'
import React from 'react'


function Card({name, img, desc, price, modal, vari}) {
  return (
    <>
    <div className="card">
      <div className="card_img">
        <img src={img} alt="" />
        </div>
        <h1>{name}</h1>
        <h2>{price} $</h2>
         <h5>{desc}</h5>      
         <button onClick={() => modal(name, img, desc, price, vari)}>See More</button>                                                                       
    </div>
    </>
  )
}

export default Card