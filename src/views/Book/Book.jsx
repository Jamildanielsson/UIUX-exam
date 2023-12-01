import './Book.css'
import Header from '../../components/Header/Header'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { unstable_useBlocker as useBlocker } from 'react-router-dom';

function Book() {
  const [hasChanged, setHasChanged] = useState(false)
  const [nameInput, setNameInput] = useState('')
  const [mailInput, setMailInput] = useState('')
  const [passport, setPassport] = useState('')
  const [nameMessage, setNameMessage] = useState('')
  const navigate = useNavigate()
  let storedForm;
  
  const unblock = useBlocker(() => {
    if (hasChanged) {
      localStorage.setItem('inputItem', nameInput)
      let warningDiv = document.getElementById('warningDiv')
      warningDiv.classList.add('show')
      return true;
    }
    let warningDiv = document.getElementById('warningDiv')
    warningDiv.classList.remove('show')
    return false;
  });

  useEffect(() => {
    localStorage.clear()
    if (!hasChanged) return;
    function handleOnBeforeUnload(event) {
      event.preventDefault();
      return (event.returnValue = '');
    }
    window.addEventListener('beforeunload', handleOnBeforeUnload, { capture: true })
    return () => {
      window.removeEventListener('beforeunload', handleOnBeforeUnload, { capture: true })
    }
  }, [hasChanged])

  function navigateToConfirmation() {
    if (!nameInput || !mailInput || !passport) {
      setNameMessage('Please fill in all the required fields!')
      
    }
    else {
      navigate('/confirmation')
    }
  }
  function handleOnChange() {
    setHasChanged(true)
  }
  function acceptNumbersOnly(event) {
    if (isNaN(event.key) && event.key !== 'Tab' && event.key !== 'Backspace' && event.key !== 'Cmd') {
      event.preventDefault();
      alert('Fältet accepterar endast siffror! Var god prova igen.');
    }
  }
  function stayOnPage() {
    let warningDiv = document.getElementById('warningDiv')
    warningDiv.classList.remove('show')
    warningDiv.classList.add('hidden')
  }
  function navigateBack() {
    let warningDiv = document.getElementById('warningDiv')
    localStorage.clear()
    unblock.proceed()
    navigate('/', { replace: true })
    warningDiv?.classList.remove('show')
    warningDiv?.classList.add('hidden')
  }

  function displayOverlay() {
    storedForm = localStorage.getItem('inputItem');
    if (storedForm !== nameInput.value) {
      return true;
    }
    return false;
  }

  const hasUnsavedChanges = displayOverlay();
  
  return (
    <main className='book__main'>
      <Header />
      {hasUnsavedChanges && (
        <div className='warning' id='warningDiv'>
          <p  tabIndex="0" >Det finns osparade ändringar.<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Vill du fortsätta?</p>
          <div><br></br>
            <button className='warning__button' onClick={() => stayOnPage()}>Nej</button>
            <button className='warning__button' onClick={() => navigateBack()}>Ja</button>
          </div>
        </div>
      )}
      <section className='book__section'>
        <h1 tabIndex="0" className='book__heading'>FYLL I DINA UPPGIFTER</h1>

        <p tabIndex="0" className='required'>* = Required fields</p>

        <p className='required'>{nameMessage}</p>

        <form autoComplete='true' name='customer__form' id="myForm" className='customer__details' onChange={handleOnChange}>
          
          <div className='column-1'>

            <label tabIndex="0" htmlFor='fullname'>Full name*</label>
            <input tabIndex="0" onChange={(event) => setNameInput(event.target.value)}
             type="text" className='inputField' id='fullname' placeholder='ex. Jack Nicholson' required />

            <label tabIndex="0" htmlFor='dateofbirth'>Date of birth*</label>
            <input tabIndex="0" id='dateofbirth' type="date" required />

            <label tabIndex="0" htmlFor='travelfrom'>Travel from* </label>
            <select tabIndex="0" name='travelfrom' id='travelfrom'>
              <option value='Gothenburg, Landvetter'>Gothenburg, Landvetter</option>
              <option value='Stockholm, Arlanda'>Stockholm, Arlanda</option>
              <option value='Malmo, Sturup'>Malmo, Sturup</option>
            </select>
            
          </div>
          <div className='column-2'>
            
            <label tabIndex="0" htmlFor='email'>Email*</label><input tabIndex="0" onChange={(event) => setMailInput(event.target.value)} id='email' type="text" placeholder='ex. JackNicholson@gmail' required />
            
            <label tabIndex="0" htmlFor='passportnumber'>Passport number*</label> 
            <input onChange={(event) => setPassport(event.target.value)} type="text" className='numbersOnly' id='passportnumber' placeholder='ex. 123 456 890' onKeyDown={acceptNumbersOnly} required />
            
            <label tabIndex="0" htmlFor='travelto'>Travel to* </label>
            <select name='travelto' id='travelto'>
              <option value='New York, USA'>New York, USA</option>
              <option value='Havanna, Cuba'>Havanna, Cuba</option>
              <option value='Shanghai, China'>Shanghai, China</option>
            </select>
          
          </div>

        </form>
        <button className='main__button' onClick={navigateToConfirmation} >SKAPA BOKNING</button>
      </section>
    </main>
  )
}

export default Book