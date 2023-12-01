import './ToFly.css'
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'

function ToFly() {

  const navigate = useNavigate()
  return (
    <main className='tofly__main'>
      <Header />
      <section className='kids__section'>
        <h1 tabIndex="0" className='tofly__heading-lv1'>INFÖR DIN RESA</h1>
        <img className='tofly__img' src="../../src/assets/cryingbaby.png" alt="Ett barn som befinner sig på ett flygplan och skriker rakt ut" /><br></br><span tabIndex='0' className='margin-extra'>  En bebis gråter på flygplanet</span><br></br>
        <h2 tabIndex="0" className='tofly__heading-lv2'>Att flyga med barn</h2>
        <p tabIndex="0" className='tofly__paragraph'>Att flyga med barn kan vara svårt ibland, dem kan skrika när de känner obehag och att sitta fast
          med bälte kan skapa en klaustrofobisk känsla vilket enkelt kan stressa ett litet barn.
          Därför har vi förberett denna videon som ni kan titta på där hemma i lugn och ro för att enkelt
          kunna förbereda båda er vuxna men framförallt barnen inför flygresan.
          Vi hoppas att vår video skall kunna hjälpa er med er nästa flygresa.</p>
        <video tabIndex="0" className='tofly__video' controls >
          <source name='Instruktionsvideo' src="../../src/assets/video/video.webm" type="video/webm" />
          <track src="../../src/assets/video/video.vtt" srcLang="en" label="English" kind="captions" default={true}></track>
          Din webbläsare stödjer inte denna typ av filmfiler.
          <a href='https://www.youtube.com/watch?v=JFQU_A5YjJw'>Länk till videon istället</a>
        </video>
      </section>
      <section className='adults__section'>
        <h2 tabIndex="0" className='tofly__heading-lv2'>Att flyga som vuxen</h2>
        <p tabIndex="0" className='tofly__paragraph'>Det kan även vara svårt för vuxna att flyga, oavsett om det är första gången eller inte så kan alla behöva hjälp.
          Behöver du hjälp med din flygrädsla? Använd länken nedan för att få råd inför resan</p>
        <a className='tofly__link' href="https://www.sveakbt.se/fobier/flygradsla">Länk: Läs mer här om flygrädsla</a>
        <br></br>
        <img className='tofly__img' src="../../src/assets/cartoon.png" alt="En tecknad bild på en man ombord på ett flygplan som skakar av rädsla" /><br></br><span tabIndex='0' className='margin-extra'>En man skakar av rädsla i sin flygplans-stol</span><br></br><br></br>
      </section>
      <button className='main__button' onClick={() => navigate('/')}>TILLBAKA TILL START</button>
    </main>
  )
}

export default ToFly