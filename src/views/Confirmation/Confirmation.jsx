import './Confirmation.css'
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'

function Confirmation() {

  const navigate = useNavigate()
  return (
    <main className='confirmation__main'>
      <Header />
      <h1 tabIndex="0" className='confirmation__heading-lv1'>TACK FÖR DIN BOKNING!</h1>
      <h2 tabIndex="0" className='confirmation__heading-lv2'>DITT BOKNINGSNUMMER SKICKAS NU
        TILL DEN EMAIL-ADRESS SOM DU ANGIVIT.</h2>
      <p tabIndex="0" className='confirmation__paragraph'>Har du några synpunkter eller frågor kring din resa, var vänliga kontakta oss minst 24 timmar innan din resas avgång.</p>
      <button className='main__button' onClick={() => navigate('/')}>TILLBAKA TILL START</button>
    </main>
  )
}

export default Confirmation