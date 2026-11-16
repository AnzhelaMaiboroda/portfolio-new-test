import { useEffect, useRef, useState } from 'react'
import heroImg from './assets/hero.png'
import menuDown from './assets/menu-down.svg'
import arrowRight from './assets/arrow-right.svg'
import badge from './assets/badge.svg'
import { LANGS, translations, type Lang } from './i18n'
import './App.css'

const STORAGE_KEY = 'lang'

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'ua' || saved === 'en') return saved
  } catch {
    /* localStorage may be unavailable */
  }
  return navigator.language?.toLowerCase().startsWith('uk') ? 'ua' : 'en'
}

function LanguageSwitcher({
  lang,
  label,
  onChange,
}: {
  lang: Lang
  label: string
  onChange: (l: Lang) => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = LANGS.find((l) => l.code === lang)!

  return (
    <div className="lang" ref={ref}>
      <button
        className="lang__btn"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${label}: ${current.label}`}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{current.label}</span>
        <img
          className={open ? 'lang__arrow lang__arrow--open' : 'lang__arrow'}
          src={menuDown}
          alt=""
          width={24}
          height={24}
        />
      </button>
      {open && (
        <ul className="lang__list" role="listbox" aria-label={label}>
          {LANGS.map((l) => (
            <li key={l.code} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={l.code === lang}
                className={
                  l.code === lang ? 'lang__option lang__option--active' : 'lang__option'
                }
                onClick={() => {
                  onChange(l.code)
                  setOpen(false)
                }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>(getInitialLang)
  const t = translations[lang]

  useEffect(() => {
    document.documentElement.lang = LANGS.find((l) => l.code === lang)!.htmlLang
    document.title = t.docTitle
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang, t.docTitle])

  const menu = [t.nav.about, t.nav.projects, t.nav.contacts]

  return (
    <div className="hero">
      <div className="hero__media">
        <img className="hero__photo" src={heroImg} alt="" />
      </div>

      <header className="nav">
        <div className="grid nav__grid">
          <a className="nav__logo" href="#top">
            {lang === 'ua' ? 'Єва Мартинюк' : 'Yeva Martynyuk'}
          </a>
          <nav className="nav__menu" aria-label={t.nav.label}>
            {menu.map((item) => (
              <a key={item} className="nav__link" href="#top">
                {item}
              </a>
            ))}
            <LanguageSwitcher lang={lang} label={t.langLabel} onChange={setLang} />
          </nav>
        </div>
      </header>

      <main className="main" id="top">
        <div className="grid main__grid">
          <div className="content">
            <div className="text">
              <h1 className="title">
                {t.titleLines.map((line, i) => (
                  <span key={i} className="title__line">
                    {line}{' '}
                  </span>
                ))}
              </h1>
              <p className="tagline">{t.tagline}</p>
            </div>
            <a className="button" href="#works">
              <span>{t.cta}</span>
              <img src={arrowRight} alt="" width={24} height={24} />
            </a>
          </div>
          <img className="badge" src={badge} alt={t.badgeAlt} />
        </div>
      </main>

      <footer className="skills">
        <div className="grid skills__grid">
          {t.skills.map((s) => (
            <span key={s} className="skills__item">
              {s}
            </span>
          ))}
        </div>
      </footer>
    </div>
  )
}
