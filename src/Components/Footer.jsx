import validator from 'validator';
import { useState } from 'react';


function Footer() {
  
  const [mail, setmail] = useState('')
  const handleInputChange =(e) =>{
    setmail(e.target.value)
    
  }
  const [wrong, setwrong] = useState('')

  const changevalid = (bull) =>{
    setwrong(bull)  
    setInterval(() => {
      setmail('')
      setwrong('')
    }, 10000);
    
  }

  const isvalid = (mail) =>{
    validator.isEmail(mail) ? changevalid('true') : changevalid('false')
  }
    return (
      <>
      <div className="footer">
        <h1>Contact Us</h1>
        <div className="ismail">
          <input type="text" 
            className={wrong === 'true' ? 'trueinput' : wrong === 'false' ? 'wronginput' : ''}
          placeholder='Enter email'
          value={mail}
          onChange={handleInputChange}
          />
          <button id={wrong === 'true' ? "truebtn": wrong == 'false' ? 'wrongbtn' : ""} onClick={() => isvalid(mail)}>Contact</button>
          </div>
          {wrong === 'true' && <h6 className='truetxt'>Email was sent</h6>}
          {wrong === 'false' && <h6 className='falsetxt'>! Invalid email !</h6>}
      </div>
        
      </>
    )
  }
  
  export default Footer