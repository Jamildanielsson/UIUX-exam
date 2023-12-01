import './Start.css'
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'

function Start() {

  const navigate = useNavigate()
  return (
    <main className='start__main'>
      <Header />
      <article className='start__article-top'>
        <h1 tabIndex="0" className='start__heading-lv1'>VI ÄR FLY AWAY</h1>
        <p tabIndex="0" className='start__paragraph'>
          Vi är flygbolaget du längtat efter, hos oss bokar du en resa snabbt och enkelt. <br></br>
          Oavsett om du reser i affärer eller i nöje så är vi det självklara valet. <br></br>
          FLY AWAY har 10.000 dagliga avgångar.
        </p>
      </article>
      <article className='start__article-bottom'>
        <h1 tabIndex="0" className='start__heading-lv1'>VILL DU BOKA EN RESA?</h1>
        <p tabIndex="0" className='start__paragraph-bottom'>Klicka på knappen nedan för att komma igång med din bokning.</p>
        <button className='main__button' onClick={() => navigate('/book')}>BOKA DIN RESA HÄR</button>
      </article>
    </main>
  )
}

export default Start