import './Header.css'
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate()
  return (
    <header className='main__header'>
      <section className='flyaway__logo-container'>
        <h1 className='flyaway__logo-heading'>FLY-AWAY.COM</h1>
      </section>
      <li className='header__links-container'>
        <a role='button' className='links' onClick={() => navigate('/')} href='/'>START</a>
        <a role='button' className='links' onClick={() => navigate('/book')} href="/book">BOKA</a>
        <a role='button' className='links last-link' onClick={() => navigate('/tofly')} href="/tofly">INFÖR RESAN</a>
      </li>
    </header>
  )
}

export default Header