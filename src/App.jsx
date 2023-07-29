import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import React from 'react'
import hotelsData from './data'
import Nav from './Components/Nav'
import photo from './background2.jpg'
import Footer from './Components/Footer'

function App() {
  const[nav, setnav] = useState(false)
  const [blur, setblur] = useState(false)
  const [showmodal, setshowmodal] = useState(false)
  const [modaldata, setmodaldata] = useState({
    name: "",
    img: "",
    desc: "",
    price: "",
    vari : '',
  })
  const modal = (name, img, desc, price, vari) =>{
    console.log(img)
    setblur(!blur)
    setshowmodal(!showmodal)
    setmodaldata({
      name: name,
      img: img,
      desc: desc,
      price: price,
      vari: vari
    });

  }
  
  const scrollTo = (id) => {
    const element = document.querySelector(`.${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const shownav = () =>{
    let antnav = !nav
    setnav(antnav)
  }

  const lifunc = (inf) =>{
    async function jer(){
      shownav()
      return true
    }
    async function shem(){
      return scrollTo(inf)
    }
    async function dl(){
      try{
        const next = await jer()
        next ? shem() : ""


      }catch(err){
        console.log(console.error())
      }
      
    }
    dl()
  }

  return (
    <>
    <div className="res_nav" id={nav ? "shown" : ""}>
    <div className="ul_list2">
            <ul>
                <li onClick={() => lifunc('main')}>Home</li>
                <li onClick={() => lifunc('container')}>Hotels</li>
                <li onClick={() => lifunc('footer')}>Contact us</li>
            </ul>
            </div>
    </div>
    <div className={blur ? 'black' : "not"} onClick={() => modal()}></div>
      {showmodal && (<div className= "modal">
      <img src={modaldata.img} alt="" />
        <h1>{modaldata.name}</h1>
        <h2>{modaldata.price} $</h2>
         <h5>{modaldata.desc}</h5>   
         <h4>{modaldata.vari}</h4>
         <button id='buy'>Buy</button>
        <button id='x' onClick={() => modal()}>X</button>
        </div>) }
      <div className="main">
        <Nav scroll = {scrollTo} shownav={shownav} nav = {nav}/>
        <h1 id='txt'>Best Hotel service</h1>
        <img src={photo} alt="" />
      </div>
       {nav !== true ? (
      <>
       <div className="container">
       <h1 id='rectxt'>Recomended for you:</h1>
       {hotelsData.map((card) => (
         <Card key={card.id} name={card.name} img={card.img} desc = {card.description} price = {card.price} modal = {modal} vari = {card.variations} />
       ))}
       
     </div>
     <Footer/> 
     </>
      ) : null }
    </>
  );
}


export default App
