import heroImg from './assets/hero.png'
import menuDown from './assets/menu-down.svg'
import arrowRight from './assets/arrow-right.svg'
import badge from './assets/badge.svg'
import './App.css'

const menu = ['Про мене', 'Проекти', 'Контакти']
const skills = [
  'Figma',
  'Web Design',
  'UX Research',
  'Design Systems',
  'Interaction Design',
]

export default function App() {
  return (
    <div className="hero">
      <img className="hero__photo" src={heroImg} alt="" />

      <header className="nav">
        <a className="nav__logo" href="#top">
          Єва Мартинюк
        </a>
        <nav className="nav__menu" aria-label="Головна навігація">
          {menu.map((item) => (
            <a key={item} className="nav__link" href="#top">
              {item}
            </a>
          ))}
          <button className="lang" type="button" aria-label="Мова: UA">
            <span>UA</span>
            <img src={menuDown} alt="" width={24} height={24} />
          </button>
        </nav>
      </header>

      <main className="main" id="top">
        <div className="content">
          <div className="text">
            <h1 className="title">
              «Цифровий досвід
              <br className="title__br" /> як архітектурний
              <br className="title__br" /> маршрут: логіка,
              <br className="title__br" /> масштаб і відчуття
              <br className="title__br" /> простору.»
            </h1>
            <p className="tagline">«Архітектура + діджитал»</p>
          </div>
          <a className="button" href="#works">
            <span>Дивитися роботи</span>
            <img src={arrowRight} alt="" width={24} height={24} />
          </a>
        </div>
        <img
          className="badge"
          src={badge}
          alt="UI/UX Designer, Yeva Martynyuk"
        />
      </main>

      <footer className="skills">
        {skills.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </footer>
    </div>
  )
}
