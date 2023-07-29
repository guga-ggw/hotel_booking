import { useState } from "react"

function Nav({scroll, shownav, nav}) {
  const[menu, setmenu] = useState('')
    return (
      <>
      <div className="nav_bar">
        <div className="logo">
        <h1>G.hotel</h1>
        </div>
        <div className="ul_list">
            <ul>
                <li>Home</li>
                <li onClick={() => scroll('container')}>Hotels</li>
                <li onClick={() => scroll('footer')}>Contact us</li>
            </ul>
            <div className="humb_menu" id={nav ? 'degr' : ""} onClick={() => shownav()}>
              <div className="stick"></div>
              <div className="stick"></div>
              <div className="stick"></div>
            </div>
        </div>
      </div>
      </>
    )
  }
  
  export default Nav