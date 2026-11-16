export type Lang = 'ua' | 'en'

export const LANGS: { code: Lang; label: string; htmlLang: string }[] = [
  { code: 'ua', label: 'UA', htmlLang: 'uk' },
  { code: 'en', label: 'EN', htmlLang: 'en' },
]

export const translations = {
  ua: {
    docTitle: 'Єва Мартинюк — портфоліо',
    nav: { label: 'Головна навігація', about: 'Про мене', projects: 'Проекти', contacts: 'Контакти' },
    langLabel: 'Мова',
    // Рядки заголовка задані окремо, щоб на десктопі розбивка була як у макеті
    titleLines: [
      '«Цифровий досвід',
      'як архітектурний',
      'маршрут: логіка,',
      'масштаб і відчуття',
      'простору.»',
    ],
    tagline: '«Архітектура + діджитал»',
    cta: 'Дивитися роботи',
    badgeAlt: 'UI/UX Designer, Yeva Martynyuk',
    skills: ['Figma', 'Web Design', 'UX Research', 'Design Systems', 'Interaction Design'],
  },
  en: {
    docTitle: 'Yeva Martynyuk — portfolio',
    nav: { label: 'Main navigation', about: 'About me', projects: 'Projects', contacts: 'Contacts' },
    langLabel: 'Language',
    titleLines: [
      '«Digital experience',
      'as an architectural',
      'route: logic, scale',
      'and a sense',
      'of space.»',
    ],
    tagline: '«Architecture + digital»',
    cta: 'View works',
    badgeAlt: 'UI/UX Designer, Yeva Martynyuk',
    skills: ['Figma', 'Web Design', 'UX Research', 'Design Systems', 'Interaction Design'],
  },
} as const

export type Dict = (typeof translations)[Lang]
